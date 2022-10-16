# Generated by Django 4.1.2 on 2022-10-15 18:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Calendar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_period_length', models.IntegerField()),
                ('last_cycle_length', models.IntegerField()),
                ('consumer', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='core.consumer')),
            ],
        ),
        migrations.CreateModel(
            name='CalendarEntry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('calendar', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='entries', to='pink_flag_calendar.calendar')),
            ],
        ),
    ]