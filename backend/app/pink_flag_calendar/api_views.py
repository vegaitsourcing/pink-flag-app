from rest_framework.views import APIView
from rest_framework.request import Request
from pink_flag_calendar.models.calendar_entry import CalendarEntry
from pink_flag_calendar.models.calendar import Calendar
from core.models.consumer import Consumer
from django.http.response import HttpResponseBadRequest, HttpResponseNotFound
from rest_framework.response import Response
from core.permission import IsAuthenticated
from pink_flag_calendar.utils import create_new_calendar_entry, create_new_calendar, get_consumer_calendar_data
from django.core import exceptions


class CalendarView(APIView):
    authentication_classes = [IsAuthenticated]

    def get(self, request: Request):
        consumer: Consumer = request.user
        try:
            calendar_data = get_consumer_calendar_data(consumer)
        except exceptions.ObjectDoesNotExist:
            return HttpResponseNotFound()
        return Response(calendar_data)

    def post(self, request: Request):
        consumer: Consumer = request.user
        data: dict = request.data
        data['consumer'] = consumer.id
        
        try:
            calendar: Calendar = create_new_calendar(data)
        except exceptions.FieldError as e:
            return HttpResponseBadRequest(str(e))
        
        return Response(calendar.id)


class CalendarEntryView(APIView):
    authentication_classes = [IsAuthenticated]

    def post(self, request: Request):
        consumer: Consumer = request.user
        calendar: Calendar = consumer.calendar
        data: dict = request.data
        data['calendar'] = calendar.id
        
        try:
            calendar_entry: CalendarEntry = create_new_calendar_entry(data)
        except exceptions.FieldError as e:
            return HttpResponseBadRequest(str(e))
        
        return Response(calendar_entry.id)
