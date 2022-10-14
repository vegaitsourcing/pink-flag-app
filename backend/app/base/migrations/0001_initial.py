# Generated by Django 4.1.2 on 2022-10-14 17:54

from django.db import migrations, models
import djangocms_text_ckeditor.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(choices=[('VESTI', 'VESTI'), ('BLOG', 'BLOG')], max_length=10)),
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('text', djangocms_text_ckeditor.fields.HTMLField(blank=True)),
            ],
            options={
                'verbose_name_plural': 'Blogs',
            },
        ),
    ]
