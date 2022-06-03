from rest_framework.generics import RetrieveAPIView
from rest_framework.views import APIView
from django.http import FileResponse

from .serializers import VerificationSerializer
from .models import Verification, Resume

# Create your views here.

class VerificationCode(RetrieveAPIView):
    serializer_class = VerificationSerializer

    def get_object(self):
        return Verification.objects.get(is_active=True)

class DownloadResume(APIView):
    def get(self, request):
        queryset = Resume.objects.get(is_active=True)
        file_handle = queryset.file.open()
        response = FileResponse(file_handle, content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename=CV.pdf'
        response['Content-Length'] = queryset.file.size
        return response
