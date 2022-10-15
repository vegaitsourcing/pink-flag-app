from django.urls import path
from core.api_views import ConsumerView

urlpatterns = [
    path('consumer', ConsumerView.as_view())
]