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
        
class ProjectView(View):
    template_name = 'project_view.html'

    def get(self, request, p_id):
        project = Project.objects.get(id=p_id)
        tasks = Task.objects.filter(project=project)
        issues = Issue.objects.filter(project=project)
        context = {
            'project': project,
            'tasks': tasks,
            'issues': issues,
        }
        return render(request, self.template_name, context)