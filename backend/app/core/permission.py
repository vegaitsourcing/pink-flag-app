from rest_framework.permissions import BasePermission
from core.models import Consumer

class IsAuthenticated(BasePermission):

    def has_permission(self, request, view):
        return request.user.__class__ == Consumer
