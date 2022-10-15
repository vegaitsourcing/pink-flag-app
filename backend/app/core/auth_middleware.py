from google.oauth2 import id_token
from google.auth.transport import requests
from core.models import Consumer
from app.settings import GOOGLE_CLIENT_ID

HTTP_AUTHORIZATION = "HTTP_AUTHORIZATION"

class AuthMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        token = request.META.get(HTTP_AUTHORIZATION).split(" ")[1]
        try:
            idinfo = id_token.verify_oauth2_token(token, requests.Request(), GOOGLE_CLIENT_ID)
            email = idinfo['email']
            consumer = Consumer.objects.get(email=email)
            # consumer = Consumer(email=email, enable_notifications=True)
            # consumer.save()
            print(consumer)

            request.user = consumer
        except ValueError as e:
            print(e)

        response = self.get_response(request)

        return response


