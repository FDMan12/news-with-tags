from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission, BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, login, email, password=None, **extra_fields):
        if not login:
            raise ValueError('The Login field must be set')
        if not email:
            raise ValueError('The Email field must be set')

        email = self.normalize_email(email)
        user = self.model(login=login, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, login, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(login, email, password, **extra_fields)


# Create your models here.
class User(AbstractUser):
    name = models.CharField(max_length=100, null=True, blank=True)
    surname = models.CharField(max_length=100, null=True, blank=True)
    patronymic = models.CharField(max_length=100, blank=True, null=True)
    mail = models.EmailField(unique=True, null=True, blank=True)
    login = models.CharField(max_length=100, unique=True, null=True, blank=True)
    password = models.CharField(max_length=128, null=True, blank=True)  # Длина по умолчанию
    tags = models.ManyToManyField('Tag', related_name='users', blank=True)
    groups = models.ManyToManyField(Group, related_name='custom_user_set')
    user_permissions = models.ManyToManyField(Permission, related_name='custom_user_set')

    USERNAME_FIELD = 'login'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()

    def __str__(self):
        return f'{self.name} {self.surname} ({self.login})'


class Tag(models.Model):
    tag_name = models.CharField(default='name', max_length=100)
    category = models.CharField(default='category', max_length=100)

    def __str__(self):
        return self.tag_name


class Magazine(models.Model):
    name = models.CharField(default='name', max_length=100)
    description = models.TextField(default='default description')
    tags = models.ManyToManyField(Tag, related_name='magazines')

    def __str__(self):
        return self.name


class Post(models.Model):
    name = models.CharField(default='name', max_length=100)
    description = models.TextField(default='default description')
    file = models.FileField(upload_to='posts/', blank=True, null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts', blank=True, null=True)
    tags = models.ManyToManyField(Tag, related_name='posts', blank=True)

    def __str__(self):
        return self.name


class UserStatus(models.Model):
    ROLES = (
        ('admin', 'Admin'),
        ('editor', 'Editor'),
        ('user', 'User'),
    )
    status = models.CharField(max_length=20, choices=ROLES, default='user')
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='status', null=True, blank=True)

    def __str__(self):
        return f'{self.user.login}: {self.status}'

    # def __str__(self):
    #     return f"{self.user.username} - {self.status}"
