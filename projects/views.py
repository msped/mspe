from django.shortcuts import render
from django.views import View
from .models import Project, Issue, Task

# Create your views here.

class AllProjects(View):
    template_name = 'all_projects.html'
    def get(self, request):
        projects = Project.objects.all()
        context = {
            'projects': projects
        }
        return render(request, self.template_name, context)
        