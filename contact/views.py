from django.shortcuts import render
from django.views.generic import View

# Create your views here.

class ContactView(View):
    """CBV for contact page"""
    template_name = "contact.html"
    def get(self, request):
        return render(request, self.template_name)
