from core.models import Consumer
import jwt

HTTP_AUTHORIZATION = "HTTP_AUTHORIZATION"

class AuthMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        bearer_token = request.META.get(HTTP_AUTHORIZATION, None)
        if bearer_token is None:
            response = self.get_response(request)
            return response
        token = bearer_token.split(" ")[1]
        idinfo = jwt.decode(token, options={"verify_signature": False})
        email = idinfo['email']

        consumer = Consumer.objects.filter(email=email).first()
        if consumer:
            request._force_auth_user = consumer

        response = self.get_response(request)

        return response


