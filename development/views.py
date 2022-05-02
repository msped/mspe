from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import DevelopmentListSerializer
from .models import Development

class DevelopmentView(ListAPIView):
    queryset = Development.objects.all()
    serializer_class = DevelopmentListSerializer

class GetProject(RetrieveAPIView):
    queryset = Development.objects.all()
    serializer_class = DevelopmentListSerializer
    look_up_field = 'id'
