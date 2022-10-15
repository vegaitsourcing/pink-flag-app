from django.urls import path, include
from .api import (
    ConsumerApiView,
)
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path('api', csrf_exempt(ConsumerApiView.as_view())),
]