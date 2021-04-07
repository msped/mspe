from django.shortcuts import render
from django.views import View
from development.models import Development

# Create your views here.

class HomeView(View):
    template_name = "home.html"
    def get(self, request):
        latest_project = Development.objects.all()[0]
        return render(
            request,
            self.template_name,
            {'project': latest_project}
        )
