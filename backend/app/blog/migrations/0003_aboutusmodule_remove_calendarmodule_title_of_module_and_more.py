# Generated by Django 4.1.2 on 2022-10-16 15:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailcore', '0077_alter_revision_user'),
        ('blog', '0002_blogpage_featured'),
    ]

    operations = [
        migrations.CreateModel(
            name='AboutUsModule',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
                ('description', models.TextField(blank=True, max_length=200, null=True)),
                ('button_text', models.CharField(max_length=30)),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailcore.page',),
        ),
        migrations.RemoveField(
            model_name='calendarmodule',
            name='title_of_module',
        ),
        migrations.RemoveField(
            model_name='donationsmodule',
            name='title_of_module',
        ),
    ]
