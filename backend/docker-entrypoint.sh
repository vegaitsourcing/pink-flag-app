#!/bin/bash

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

# Collect static files
echo "Collecting static files"
python manage.py collectstatic

#Start server
gunicorn app.wsgi:application --bind 0.0.0.0:80