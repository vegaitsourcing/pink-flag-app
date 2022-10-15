from rest_framework import serializers
from pink_flag_calendar.models.calendar_entry import CalendarEntry

class CalendarEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = CalendarEntry
        fields = '__all__'


