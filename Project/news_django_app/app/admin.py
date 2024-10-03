from django.contrib import admin
from .models import User, Tag, Magazine, Post, UserStatus

# Register your models here.
admin.site.register(User)
admin.site.register(Tag)
admin.site.register(Magazine)
admin.site.register(Post)
admin.site.register(UserStatus)