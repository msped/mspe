from django.shortcuts import render
from django.views import View

from .models import Verification

# Create your views here.

class OnlineCV(View):
    template_name = "cv.html"

    def get(self, request):
        verification_code = Verification.objects.get(is_active=True)
        return render(request, self.template_name, {'code': verification_code})
