from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import DevelopmentListSerializer
from .models import Development

class DevelopmentView(ListAPIView):
    queryset = Development.objects.all()
    serializer_class = DevelopmentListSerializer

class GetProject(RetrieveAPIView):
    queryset = Development.objects.all()
    serializer_class = DevelopmentListSerializer
    look_up_field = 'id'

class GetLatest(APIView):
    def get(self, request):
        latest_project = Development.objects.all()[0]
        serializer = DevelopmentListSerializer(latest_project, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
