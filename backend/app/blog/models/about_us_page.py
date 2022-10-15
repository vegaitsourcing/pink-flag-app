from django.db import models

from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField


class AboutUsPage(Page):
    max_count = 1

    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    body = RichTextField(features=['bold', 'italic', 'link', 'ul'])

    content_panels = Page.content_panels + [
        FieldPanel('image'),
        FieldPanel('body'),
    ]

    api_fields = [
        APIField('body'),
        APIField('image'),
    ]
