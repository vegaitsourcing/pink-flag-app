from django.db import models

from modelcluster.fields import ParentalKey

from wagtail.models import Page, Orderable
from wagtail.fields import StreamField
from wagtail.admin.panels import FieldPanel, MultiFieldPanel, InlinePanel
from wagtail.search import index
from wagtail import blocks
from wagtail.images.blocks import ImageChooserBlock
from wagtail.api import APIField

class BlogPage(Page):

    choices = (
        ("VESTI", "VESTI"),
        ("BLOG", "BLOG"),
    )

    category = models.CharField(max_length=10, choices=choices)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    body = StreamField([
        ('paragraph', blocks.RichTextBlock()),
        ('image', ImageChooserBlock()),
    ], use_json_field=True)

    content_panels = Page.content_panels + [
        FieldPanel('category'),
        FieldPanel('image'),
        FieldPanel('body'),
    ]

    subpage_types = ('blog.BlogPage',)

    api_fields = [
        APIField('body'),
        APIField('category'),
        APIField('image'),
    ]
