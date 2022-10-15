from core.models.consumer import Consumer
from django.core.exceptions import BadRequest
from core.serializers import CostumerSerializer
from google.oauth2 import id_token
from google.auth.transport import requests
from app.settings import GOOGLE_CLIENT_ID


def create_consumer(data: dict) -> Consumer:
    costumer_serializer: CostumerSerializer = CostumerSerializer(data=data)
    if not costumer_serializer.is_valid():
        raise BadRequest(costumer_serializer.error_messages)
    
    consumer: Consumer = costumer_serializer.save()
    return consumer

def get_consumer_email(http_authorization: str) -> str:
        token = http_authorization.split(" ")[1]
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), GOOGLE_CLIENT_ID)
        email = idinfo['email']
        return email
