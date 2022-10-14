from django.urls import path
from . import views 


urlpatterns = [
  path('blogs/', views.getBlogs),
  path('blogs/<str:pk>', views.getBlog)
]