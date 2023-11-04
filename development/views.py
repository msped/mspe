from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

from .serializers import DevelopmentListSerializer
from .models import Development


class DevelopmentView(ListAPIView):
    queryset = Development.objects.all()
    serializer_class = DevelopmentListSerializer


class GetProject(RetrieveAPIView):
    queryset = Development.objects.all()
    serializer_class = DevelopmentListSerializer
    look_up_field = 'id'

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(),
                                id=self.kwargs[self.lookup_field])
        return obj


class GetLatest(APIView):
    def get(self, request):
        latest_project = Development.objects.order_by('-created_date').first()
        serializer = DevelopmentListSerializer(
            latest_project)
        return Response(serializer.data, status=status.HTTP_200_OK)
