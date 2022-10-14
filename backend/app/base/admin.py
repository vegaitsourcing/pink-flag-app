from django.contrib import admin
from .models import *
from django.utils.html import format_html
# Register your models here.

class BlogAdmin(admin.ModelAdmin):


    list_display = ("title", "category",)
    list_filter = ("title" , "category",)

admin.site.register(Blog, BlogAdmin)