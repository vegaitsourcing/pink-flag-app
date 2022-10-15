#!/bin/bash

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

#Start server
gunicorn manage.py runserver 0.0.0.0:80