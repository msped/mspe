from django.shortcuts import get_object_or_404
from rest_framework.generics import RetrieveAPIView
from rest_framework.views import APIView
from django.http import HttpResponse

from .serializers import VerificationSerializer
from .models import Verification, Resume

# Create your views here.

class VerificationCode(RetrieveAPIView):
    serializer_class = VerificationSerializer

    def get_object(self):
        return Verification.objects.get(is_active=True)

class DownloadResume(APIView):
    def get(self, request):
        resume = get_object_or_404(Resume, is_active=True)
        response = HttpResponse(resume.file, content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename=CV.pdf'
        return response
