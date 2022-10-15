from rest_framework.views import APIView
from rest_framework.request import Request
from core.models.consumer import Consumer
from core.models.consumer import Consumer
from django.http.response import HttpResponseBadRequest
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.core import exceptions
from core.utils import create_consumer

class ConsumerView(APIView):

    def post(self, request: Request):
        # TODO get email from token
        email:str = 'test@vegait.rs'    
        
        data = request.data
        data['email'] = email
        
        try:
            consumer: Consumer = create_consumer(data)
        except exceptions.BadRequest as e:
            return HttpResponseBadRequest(str(e))
        
        return Response(consumer.id)