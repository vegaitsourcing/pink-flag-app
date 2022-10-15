from django.db import models
from core.models.consumer import Consumer

class Calendar(models.Model):
    last_period_length = models.IntegerField()
    last_cycle_length = models.IntegerField()

    consumer = models.OneToOneField(Consumer, null=False, on_delete=models.CASCADE)