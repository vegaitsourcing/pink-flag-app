from rest_framework import serializers
from pink_flag_calendar.models.calendar import Calendar
from pink_flag_calendar.serializers.calendar_entry import CalendarEntrySerializer

class CalendarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calendar
        fields = '__all__'


class CalendarResponseSerializer(serializers.ModelSerializer):
    entries = CalendarEntrySerializer(many=True, read_only=True)
    
    class Meta:
        model = Calendar
        fields = ('last_period_length', 'last_cycle_length', 'entries')
