from django.shortcuts import render
from django.views import View
from django.http import HttpResponse
from django.template import loader
from django.views.decorators.csrf import csrf_exempt
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

class TaskView(View):
    template_name = 'task_view.html'

    def get(self, request, t_id):
        task = Task.objects.get(id=t_id)
        context = {
            'task': task
        }
        return render(request, self.template_name, context)

class IssueView(View):
    template_name = 'issue_view.html'

    def get(self, request, i_id):
        issues = Issue.objects.get(id=i_id)
        context = {
            'issues': issues,
        }
        return render(request, self.template_name, context)

@csrf_exempt
def ToggleTask(request, t_id):
    task = Task.objects.get(id=t_id)
    task_id = task.id
    if task.closed:
        task.closed = False
        state = 'success'
        toggle = 'Open'
    else:
        task.closed = True
        state = 'danger'
        toggle = 'Closed'
    task.save()
    template = loader.render_to_string(
        'task_toggle_button.html',
        {
            'task_id': task_id,
            'state': state,
            'toggle': toggle
        }
    )
    return HttpResponse(template)