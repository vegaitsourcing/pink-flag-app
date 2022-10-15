from django.db import models

class Consumer(models.Model):
    email = models.EmailField(primary_key=True)
    enable_notifications = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)

