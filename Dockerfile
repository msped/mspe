FROM python:3.10
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /mspe/backend

COPY requirements.txt /mspe/backend/
RUN pip3 install -r requirements.txt

COPY . /mspe/backend/
