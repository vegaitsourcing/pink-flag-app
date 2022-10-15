from rest_framework.views import APIView
from rest_framework.request import Request
from core.models.consumer import Consumer
from core.models.consumer import Consumer
from django.http.response import HttpResponseBadRequest
from rest_framework.response import Response
from django.core import exceptions
from core.utils import create_consumer,get_consumer_email

HTTP_AUTHORIZATION = "HTTP_AUTHORIZATION"


class ConsumerView(APIView):

    def post(self, request: Request):
        http_authorization = request.META.get(HTTP_AUTHORIZATION)
        
        try:
            email = get_consumer_email(http_authorization)
        except Exception:
            return Response(status=401)
        
        data = request.data
        data['email'] = email
        
        try:
            consumer: Consumer = create_consumer(data)
        except exceptions.BadRequest as e:
            return HttpResponseBadRequest(str(e))
        
        return Response(consumer.id)