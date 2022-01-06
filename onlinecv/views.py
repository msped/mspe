from django.shortcuts import render
from django.views import View

from .models import Verification

# Create your views here.

class OnlineCV(View):
    template_name = "cv.html"

    def get(self, request):
        try:
            verification_code = Verification.objects.get(is_active=True)
        except Verification.DoesNotExist:
            verification_code = None
        return render(request, self.template_name, {'code': verification_code})
