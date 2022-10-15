```
docker-compose -f .\docker-compose.pink-flag.yaml build web
docker-compose -f .\docker-compose.pink-flag.yaml up -d db
docker-compose -f .\docker-compose.pink-flag.yaml run --rm web python manage.py migrate
docker-compose -f .\docker-compose.pink-flag.yaml run --rm web python manage.py createsuperuser
docker-compose -f .\docker-compose.pink-flag.yaml up -d
```