#!/bin/bash

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

# Collect static files
echo "Collecting static files"
python manage.py collectstatic

# Start server
python manage.py runserver 0.0.0.0:80
