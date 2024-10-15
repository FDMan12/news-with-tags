from django.shortcuts import render
from django.views import View
from difflib import get_close_matches
import json
from rest_framework import viewsets, generics, permissions, status, filters
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.views import APIView

from .models import *
from .serializers import *
import app.apps


# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

class IsEditorOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        user_status = UserStatus.objects.filter(user=request.user).first()
        return user_status and user_status.status == 'editor'

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author == request.user


@api_view(['GET'])
def posts_by_tag(request, tag_name):
    tag = Tag.objects.get(tag_name=tag_name)
    posts = Post.objects.filter(tags=tag)
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def search_posts_by_tag(request):
    query = request.GET.get('q', '')
    if not query:
        return Response({"error": "No query provided"}, status=400)

    all_tags = Tag.objects.values_list('tag_name', flat=True)
    similar_tags = get_close_matches(query, all_tags, n=5, cutoff=0.6)

    if not similar_tags:
        return Response({"error": "No matching tags found"}, status=404)

    posts = Post.objects.filter(tags__tag_name__in=similar_tags).distinct()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
    user = request.user
    data = request.data

    old_password = data.get('old_password')
    new_password = data.get('new_password')
    confirm_password = data.get('confirm_password')

    if not user.check_password(old_password):
        return Response({"error": "Old password is incorrect"}, status=status.HTTP_400_BAD_REQUEST)

    if new_password != confirm_password:
        return Response({"error": "New passwords do not match"}, status=status.HTTP_400_BAD_REQUEST)

    user.set_password(new_password)
    user.save()

    # Invalidate the old token and generate a new one (if you're using token authentication)
    Token.objects.filter(user=user).delete()
    Token.objects.create(user=user)

    return Response({"success": "Password changed successfully"}, status=status.HTTP_200_OK)


@api_view(['POST'])
def login_user(request):
    data = request.data
    username = data.get('username')
    password = data.get('password')

    user = authenticate(username=username, password=password)

    if user is not None:
        # Если пользователь существует и данные верны, генерируем токен
        token, created = Token.objects.get_or_create(user=user)
        return Response({"token": token.key}, status=status.HTTP_200_OK)
    else:
        # Если аутентификация не удалась
        return Response({"error": "Неправильный логин или пароль"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def register_user(request):
    data = request.data

    # Проверка на совпадение паролей
    if data['password'] != data['confirm_password']:
        return Response({"error": "Пароли не совпадают"}, status=status.HTTP_400_BAD_REQUEST)

    # Создание нового пользователя
    user = User.objects.create_user(
        username=data['login'],
        email=data['email'],
        password=data['password'],
        first_name=data['name'],
        last_name=data['surname'],
    )

    # Генерация токена для нового пользователя
    token = Token.objects.create(user=user)

    return Response({"success": "Пользователь успешно зарегистрирован", "token": token.key},
                    status=status.HTTP_201_CREATED)


class IsAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        user_status = UserStatus.objects.filter(user=request.user).first()
        return user_status and user_status.status == 'admin'


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdmin]

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=True, methods=['post'], url_path='add-editor')
    def add_editor(self, request, pk=None):
        user = self.get_object()
        if not user.groups.filter(name='Editors').exists():
            editors_group = Group.objects.get(name='Editors')
            editors_group.user_set.add(user)
            return Response({"status": "User added as editor"})
        return Response({"status": "User is already an editor"}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['post'], url_path='remove-editor')
    def remove_editor(self, request, pk=None):
        user = self.get_object()
        if user.groups.filter(name='Editors').exists():
            editors_group = Group.objects.get(name='Editors')
            editors_group.user_set.remove(user)
            return Response({"status": "User removed as editor"})
        return Response({"status": "User is not an editor"}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated], url_path='profile')
    def get_profile(self, request):
        user = request.user
        serializer = self.get_serializer(user)
        return Response(serializer.data)


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class MagazineViewSet(viewsets.ModelViewSet):
    queryset = Magazine.objects.all()
    serializer_class = MagazineSerializer
    permission_classes = [IsEditorOrReadOnly]
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    @action(detail=False, methods=['get'])
    def search(self, request):
        query = request.GET.get('q', '')
        if query:
            magazines = self.get_queryset().filter(name__icontains=query)
            serializer = self.get_serializer(magazines, many=True)
            return Response(serializer.data)
        return Response({"error": "Query is required"}, status=status.HTTP_400_BAD_REQUEST)


class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request):
        user = request.user
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsEditorOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class UserStatusViewSet(viewsets.ModelViewSet):
    queryset = UserStatus.objects.all()
    serializer_class = UserStatusSerializer
    permission_classes = [IsAdmin]


# Create your views here.

class BaseTemplateView(View):  # Base
    template_name = 'index.html'

    def get_context_data(self, request):
        # Собираем все параметры запроса в контекст
        return {
            'post_data': request.body,
            'get_data': json.dumps(request.GET)  # Сериализуем в JSON
        }

    def get(self, request):
        # Возвращаем шаблон без изменений для GET-запросов
        return render(request, self.template_name)

    def post(self, request):
        # Отправляем клиенту отрендеренный с контекстом шаблон
        return render(request, self.template_name, self.get_context_data(request))
