import json
from django.http import HttpResponse
from django.shortcuts import render
from django.template.loader import render_to_string
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views import View
from .models import Development, DevelopmentTech

# Create your views here.

class DevelopmentView(View):
    template_name = "development.html"
    def get(self, request):
        dev_projects = Development.objects.all().order_by('-created_date')
        return render(request, self.template_name, {'devs': dev_projects})

class GetProject(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(GetProject, self).dispatch(request, *args, **kwargs)
    def post(self, request, p_id):
        dev = Development.objects.get(id=p_id)
        tech = DevelopmentTech.objects.filter(development=dev)
        template = render_to_string('modal_template.html', {'dev': dev, 'tech': tech})
        return HttpResponse(template)
