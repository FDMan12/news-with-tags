from rest_framework import serializers
from .models import User, Tag, Magazine, Post, UserStatus


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'name', 'surname', 'patronymic', 'mail', 'login', 'tags', 'status']

class UserSerializer(serializers.ModelSerializer):
    role = serializers.CharField(source='status.status', read_only=True)

    class Meta:
        model = User
        fields = ['id', 'name', 'surname', 'patronymic', 'mail', 'login', 'password', 'role']
        extra_kwargs = {'password': {'write_only': True}}

    def get_role(self, obj):
        user_status = UserStatus.objects.filter(user=obj).first()
        return user_status.status if user_status else None

    def create(self, validated_data):
        user_status_data = validated_data.pop('status', None)

        user = User.objects.create(
            name=validated_data['name'],
            surname=validated_data['surname'],
            patronymic=validated_data.get('patronymic', ''),
            email=validated_data['mail'],
            username=validated_data['login']
        )
        user.set_password(validated_data['password'])
        user.save()
        if user_status_data:
            UserStatus.objects.create(user=user, **user_status_data)
        return user


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'tag_name', 'category']


class MagazineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magazine
        fields = ['id', 'name', 'description', 'tags']


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'name', 'description', 'file', 'author', 'tags']


class UserStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserStatus
        fields = ['id', 'status', 'user']
