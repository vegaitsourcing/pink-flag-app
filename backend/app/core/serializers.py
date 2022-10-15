from rest_framework import serializers
from core.models.consumer import Consumer

class CostumerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consumer
        fields = '__all__'


