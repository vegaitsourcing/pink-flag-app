from rest_framework.views import APIView
from rest_framework.request import Request
from core.models.consumer import Consumer
from core.models.consumer import Consumer
from django.http.response import HttpResponseBadRequest
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.core import exceptions
from google.oauth2 import id_token
from google.auth.transport import requests
from core.utils import create_consumer
from app.settings import GOOGLE_CLIENT_ID

HTTP_AUTHORIZATION = "HTTP_AUTHORIZATION"


class ConsumerView(APIView):

    def post(self, request: Request):
        token = request.META.get(HTTP_AUTHORIZATION).split(" ")[1]
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), GOOGLE_CLIENT_ID)
        email = idinfo['email']
        data = request.data
        data['email'] = email
        
        try:
            consumer: Consumer = create_consumer(data)
        except exceptions.BadRequest as e:
            return HttpResponseBadRequest(str(e))
        
        return Response(consumer.id)