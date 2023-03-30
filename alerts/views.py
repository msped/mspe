from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import AlertSerializer
from .models import Alert

# Create your views here.

class Alerts(APIView):
    def get(self, request):
        alert = Alert.objects.filter(active=True)
        if alert:
            serializer = AlertSerializer(alert, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_204_NO_CONTENT)
