from core.models.consumer import Consumer
from django.core.exceptions import BadRequest
from core.serializers import CostumerSerializer

def create_consumer(data: dict) -> Consumer:
    costumer_serializer: CostumerSerializer = CostumerSerializer(data=data)
    if not costumer_serializer.is_valid():
        raise BadRequest(costumer_serializer.error_messages)
    
    consumer: Consumer = costumer_serializer.save()
    return consumer