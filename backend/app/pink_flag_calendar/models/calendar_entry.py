from django.db import models

from pink_flag_calendar.models.calendar import Calendar

class CalendarEntry(models.Model):
    start_date = models.DateField()
    end_date = models.DateField()

    calendar = models.ForeignKey(
        Calendar, related_name='entries', on_delete=models.CASCADE, null=False)

