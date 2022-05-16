from rest_framework.generics import RetrieveAPIView

from .serializers import VerificationSerializer
from .models import Verification

# Create your views here.

class VerificationCode(RetrieveAPIView):
    serializer_class = VerificationSerializer

    def get_object(self):
        return Verification.objects.get(is_active=True)
