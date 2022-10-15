
from django.db import models

from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField


class FooterPage(Page):
    max_count = 1

    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

   
    location = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField(max_length=30, blank=True, null=True)
    instagram_profile_url = models.CharField(max_length=200, blank=True, null=True)
    facebook_profile_url = models.CharField(max_length=200, blank=True, null=True)
    copyright = models.TextField(max_length=200, blank=True, null=True)


    content_panels = Page.content_panels + [
        FieldPanel('image'),
        FieldPanel('location'),
        FieldPanel('email'),
        FieldPanel('instagram_profile_url'),
        FieldPanel('facebook_profile_url'),
        FieldPanel('copyright'),
    ]

    api_fields = [
        APIField('image'),
        APIField('location'),
        APIField('email'),
        APIField('instagram_profile_url'),
        APIField('facebook_profile_url'),
        APIField('copyright'),
    ]