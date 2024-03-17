from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import AlertSerializer
from .models import Alert

class Alerts(ListAPIView):
    serializer_class = AlertSerializer

    def get_queryset(self):
        return Alert.objects.filter(active=True)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if queryset.exists():
            serializer = self.serializer_class(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_204_NO_CONTENT)
