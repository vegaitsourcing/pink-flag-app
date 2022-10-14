from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.


class Blog(models.Model):

     choices = (
     ("VESTI", "VESTI"),
     ("BLOG", "BLOG"),
     )

     category = models.CharField(max_length= 10, choices = choices)
     title = models.CharField(max_length= 200, null = True, blank = True)
     image = models.ImageField(null=True, blank=True)
     text = RichTextField(max_length=255)

     def __str__(self):
        return self.title

     class Meta:
        verbose_name_plural = "Blogs"
    
