from rest_framework import serializers
from .models import Alert

class AlertSerializer(serializers.ModelSerializer):
    severity_display = serializers.CharField(
        source="get_severity_display"
    )

    class Meta:
        model = Alert
        fields = [
            'id',
            'severity_display',
            'message'
        ]
