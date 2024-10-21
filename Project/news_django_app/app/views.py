import logging

from django.shortcuts import render
from django.views import View
from difflib import get_close_matches
import json

from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets, generics, permissions, status, filters
from rest_framework.exceptions import PermissionDenied
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.views import APIView

from .models import *
from .serializers import *
import app.apps

logger = logging.getLogger('django')


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
def magazines_by_tag(request, tag_name):
    tag = Tag.objects.get(tag_name=tag_name)
    magazines = Magazine.objects.filter(tags=tag)
    serializer = MagazineSerializer(magazines, many=True)
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


@api_view(['GET'])
def search_magazines_by_tag(request):
    query = request.GET.get('q', '')
    if not query:
        return Response({"error": "No query provided"}, status=400)

    all_tags = Tag.objects.values_list('tag_name', flat=True)
    similar_tags = get_close_matches(query, all_tags, n=5, cutoff=0.6)

    if not similar_tags:
        return Response({"error": "No matching tags found"}, status=404)

    magazines = Magazine.objects.filter(tags__tag_name__in=similar_tags).distinct()
    serializer = MagazineSerializer(magazines, many=True)
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

    Token.objects.filter(user=user).delete()
    Token.objects.create(user=user)

    return Response({"success": "Password changed successfully"}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    print("Попытка авторизации\n")
    data = request.data
    print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
    username = data.get('username')
    password = data.get('password')

    user = authenticate(username=username, password=password)

    if user is not None:
        token, created = Token.objects.get_or_create(user=user)
        print(f'Successful login for {username}')
        return Response({"token": token.key}, status=status.HTTP_200_OK)
    else:
        print(f'Failed login attempt for {username}')
        return Response({"error": "Неправильный логин или пароль"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    print("Попытка регистрации\n")
    data = request.data
    print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
    if data['password'] != data['confirm_password']:
        return Response({"error": "Пароли не совпадают"}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(
        login=data['login'],
        email=data['mail'],
        mail=data['mail'],
        password=data['password'],
        username=data['login'],
        name=data['name'],
        surname=data['surname'],
        patronymic=data['patronymic'],
    )

    token = Token.objects.create(user=user)

    return Response({"success": "Пользователь успешно зарегистрирован", "token": token.key},
                    status=status.HTTP_201_CREATED)


class IsAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        user_status = UserStatus.objects.filter(user=request.user).first()
        logger.debug(
            f"Checking admin status for user {request.user.login}: {user_status.status if user_status else 'No status found'}")
        return user_status and user_status.status == 'admin'


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]  # IsAdmin

    def get_permissions(self):
        user = self.request.user
        permissionsOut = user.get_all_permissions()
        print(f"User {user.login} has the following permissions: {permissionsOut}")
        return super().get_permissions()

    @action(detail=False, methods=['get'], url_path='profile')
    def get_profile(self, request):
        user = request.user
        user_status = UserStatus.objects.filter(user=user).first()
        logger.debug(
            f"Fetching profile for user {user.login} with status {user_status.status if user_status else 'None'}")

        if request.user.is_authenticated:
            serializer = self.get_serializer(request.user)
            return Response(serializer.data)
        else:
            logger.warning(f"Unauthorized access attempt for user: {user.login}")
            return Response({"detail": "Not authenticated."}, status=403)

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


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class MagazineViewSet(viewsets.ModelViewSet):
    queryset = Magazine.objects.all()
    serializer_class = MagazineSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

    def get_queryset(self):
        queryset = super().get_queryset()
        tags = self.request.query_params.get('tags')
        if tags:
            tag_list = tags.split(',')
            queryset = queryset.filter(tags__tag_name__in=tag_list).distinct()
        return queryset

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            logger.debug(f"Creating magazine for user: {self.request.user}")
            serializer.save(author=self.request.user)
        else:
            logger.warning(f"Unauthenticated user tried to create a magazine.")
            raise PermissionDenied("Только редакторы могут создавать журналы.")

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            instance.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Post.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
    permission_classes = [IsAuthenticatedOrReadOnly]

    # filter_backends = [filters.SearchFilter]
    # search_fields = ['name']

    def get_queryset(self):
        queryset = super().get_queryset()
        tags = self.request.query_params.get('tags')
        if tags:
            tag_list = tags.split(',')
            queryset = queryset.filter(tags__tag_name__in=tag_list).distinct()
        return queryset

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            logger.debug(f"Creating post for user: {self.request.user}")
            serializer.save(author=self.request.user)
        else:
            logger.warning(f"Unauthenticated user tried to create a post.")
            raise PermissionDenied("Только авторизованные пользователи могут создавать новости.")

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            instance.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Post.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['get'])
    def search(self, request):
        query = request.GET.get('q', '')
        if query:
            news = self.get_queryset().filter(name__icontains=query)
            serializer = self.get_serializer(news, many=True)
            return Response(serializer.data)
        return Response({"error": "Query is required"}, status=status.HTTP_400_BAD_REQUEST)


class UserStatusViewSet(viewsets.ModelViewSet):
    queryset = UserStatus.objects.all()
    serializer_class = UserStatusSerializer
    permission_classes = [IsAuthenticated]


# Create your views here.

class BaseTemplateView(View):  # Base
    template_name = 'index.html'

    def get_context_data(self, request):
        post_data = Post.objects.all()
        get_data = request.GET.dict()
        return {
            'post_data': post_data,
            'get_data': get_data
        }

    def get(self, request):
        context = self.get_context_data(request)
        return render(request, self.template_name, context)

    def post(self, request):
        context = self.get_context_data(request)
        return render(request, self.template_name, context)
