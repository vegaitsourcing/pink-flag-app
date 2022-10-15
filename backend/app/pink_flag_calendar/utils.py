from typing import Optional
from core.models.consumer import Consumer
from pink_flag_calendar.models.calendar import Calendar
from pink_flag_calendar.serializers.calendar_entry import CalendarEntrySerializer
from pink_flag_calendar.serializers.calendar import CalendarSerializer, CalendarResponseSerializer
from pink_flag_calendar.models.calendar_entry import CalendarEntry
from django.core import exceptions


def create_new_calendar_entry(data: dict) -> CalendarEntry:
    calendar_entry_serializer: CalendarEntrySerializer = CalendarEntrySerializer(data=data)
    if not calendar_entry_serializer.is_valid():
        raise exceptions.FieldError(calendar_entry_serializer.errors)
    calendar_entry: CalendarEntry = calendar_entry_serializer.save()
    return calendar_entry

def create_new_calendar(data: dict) -> Calendar:
    calendar_serializer: CalendarSerializer = CalendarSerializer(data=data)
    if not calendar_serializer.is_valid():
        raise exceptions.FieldError(calendar_serializer.errors)
    calendar: Calendar = calendar_serializer.save()
    return calendar

def get_consumer_calendar_data(consumer: Consumer) -> dict:
    calendar:Optional[Calendar] = consumer.calendar
    if not calendar:
        raise exceptions.ObjectDoesNotExist()
    calendar_response_serializer: CalendarResponseSerializer = CalendarResponseSerializer(calendar)
    return calendar_response_serializer.data