from rest_framework import serializers
from .models import Alert

class AlertSerializer(serializers.ModelSerializer):
    model = Alert
    fields = [
        'id',
        'severity',
        'message'
    ]
