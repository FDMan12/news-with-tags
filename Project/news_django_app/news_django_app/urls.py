"""
URL configuration for news_django_app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from app.views import *
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="News API",
        default_version='v1',
        description="API для работы с новостями и тегами",
        contact=openapi.Contact(email="support@example.com"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny,],
)

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'tags', TagViewSet)
router.register(r'magazines', MagazineViewSet)
router.register(r'posts', PostViewSet)
router.register(r'userstatuses', UserStatusViewSet)
urlpatterns = [
    path('', BaseTemplateView.as_view()), # main
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api/', include('djoser.urls')),
    path('api/', include('djoser.urls.authtoken')),
    path('api/users/', include('djoser.urls')),
    path('api/register/', register_user, name='register_user'),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/users/profile/', UserViewSet.as_view({'get': 'retrieve'}), name='user-profile'),
    path('posts/<int:pk>/', PostViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='post-detail'),
    path('posts/tag/<str:tag_name>/', posts_by_tag, name='posts-by-tag'),
    path('tags/', TagViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='tag-list'),
    path('search/', search_posts_by_tag, name='search-posts-by-tag'),
    path('change-password/', change_password, name='change-password'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
urlpatterns += staticfiles_urlpatterns()

