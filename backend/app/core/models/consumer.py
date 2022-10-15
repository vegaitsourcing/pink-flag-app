from django.db import models

class Consumer(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length = 50)
    date_of_birth = models.DateField()
    enable_notifications = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
