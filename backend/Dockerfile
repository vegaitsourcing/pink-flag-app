FROM python:3.9-alpine

ENV PYTHONBUFFERED 1

RUN apk add --update --no-cache postgresql-client
RUN apk add --update --no-cache --virtual .tmp-build-deps \
    gcc libc-dev linux-headers postgresql-dev

WORKDIR /app

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY ./app .
COPY ./docker-entrypoint.sh docker-entrypoint.sh

ENTRYPOINT [ "sh","./docker-entrypoint.sh" ] 
