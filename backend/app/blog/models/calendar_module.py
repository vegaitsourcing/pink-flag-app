from django.db import models

from wagtail.models import Page

from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField


class CalendarModule(Page):
    max_count = 1

    title_of_module = models.CharField(max_length=50)
    description = models.TextField(max_length=200, blank=True, null=True)
    button_text = models.CharField(max_length=30)

    content_panels = Page.content_panels + [
        FieldPanel('title'),
        FieldPanel('description'),
        FieldPanel('button_text'),
    ]

    api_fields = [
        APIField('title'),
        APIField('description'),
        APIField('button_text'),
    ]
