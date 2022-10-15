#!/bin/bash

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

#Start server
gunicorn app.wsgi:application --bind 0.0.0.0:80