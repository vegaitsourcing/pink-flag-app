from django.urls import path
from pink_flag_calendar.api_views import CalendarView, CalendarEntryView

urlpatterns = [
    path('calendar_entry', CalendarEntryView.as_view()),
    path('', CalendarView.as_view())

]