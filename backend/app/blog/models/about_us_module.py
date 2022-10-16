from django.db import models

from wagtail.models import Page

from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField


class AboutUsModule(Page):
    max_count = 1

    description = models.TextField(max_length=200, blank=True, null=True)
    button_text = models.CharField(max_length=30)

    content_panels = Page.content_panels + [
        FieldPanel('description'),
        FieldPanel('button_text'),
    ]

    api_fields = [
        APIField('description'),
        APIField('button_text'),
    ]
