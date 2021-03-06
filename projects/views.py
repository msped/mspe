from django.shortcuts import render, redirect
from django.views import View
from django.http import HttpResponse
from django.template import loader
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from .models import Project, Issue, Task, IssueTypes

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
            'issue': issues,
        }
        return render(request, self.template_name, context)

@csrf_exempt
@login_required
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

@csrf_exempt
@login_required
def ToggleIssue(request, i_id):
    issue = Issue.objects.get(id=i_id)
    issue_id = issue.id
    if issue.closed:
        issue.closed = False
        state = 'success'
        toggle = 'Open'
    else:
        issue.closed = True
        state = 'danger'
        toggle = 'Closed'
    issue.save()
    template = loader.render_to_string(
        'issue_toggle_button.html',
        {
            'issue_id': issue_id,
            'state': state,
            'toggle': toggle
        }
    )
    return HttpResponse(template)

class TaskEdit(View):
    template_name = 'task_edit.html'
    def get(self, request, t_id):
        task = Task.objects.get(id=t_id)
        context = {
            'task': task
        }
        return render(request, self.template_name, context)

    def post(self, request, t_id):
        task = Task.objects.get(id=t_id)
        task.name = request.POST['name']
        task.description = request.POST['description']
        task.notes = request.POST['notes']
        task.save()
        messages.success(request, "Task Updated")
        return redirect('task_view', t_id=task.id)

@login_required
def DeleteTask(request, t_id):
    task = Task.objects.get(id=t_id)
    p_id = task.project.id
    task.delete()
    messages.success(
        request,
        "Task Deleted"
    )
    return redirect('project_view', p_id=p_id)

class IssueEdit(View):
    template_name = 'issue_edit.html'
    def get(self, request, i_id):
        issue = Issue.objects.get(id=i_id)
        issue_types = IssueTypes.objects.all()
        context = {
            'issue': issue,
            'issue_types': issue_types
        }
        return render(request, self.template_name, context)

    def post(self, request, i_id):
        issue = Issue.objects.get(id=i_id)
        issue_type = IssueTypes.objects.get(id=int(request.POST['issue_type']))
        issue.name = request.POST['name']
        issue.description = request.POST['description']
        issue.issue_type = issue_type
        issue.notes = request.POST['notes']
        issue.save()
        messages.success(request, "Issue Updated")
        return redirect('issue_view', i_id=issue.id)

@login_required
def DeleteIssue(request, i_id):
    issue = Issue.objects.get(id=i_id)
    p_id = issue.project.id
    issue.delete()
    messages.success(
        request,
        "Issue Deleted"
    )
    return redirect('project_view', p_id=p_id)

class AddTask(View):
    template_name = 'add_task.html'
    def get(self, request, p_id):
        project = Project.objects.get(id=p_id)
        context = {
            'project': project
        }
        return render(request, self.template_name, context)

    def post(self, request, p_id):
        project = Project.objects.get(id=p_id)
        task = Task.objects.create(
            project=project,
            name=request.POST['name'],
            description=request.POST['description'],
            notes=request.POST['notes']
        )
        task.save()
        messages.success(
            request,
            'Added New Task'
        )
        return redirect('task_view', t_id=task.id)

class AddIssue(View):
    template_name = 'add_issue.html'
    def get(self, request, p_id):
        project = Project.objects.get(id=p_id)
        issue_types = IssueTypes.objects.all()
        context = {
            'project': project,
            'issue_types': issue_types
        }
        return render(request, self.template_name, context)

    def post(self, request, p_id):
        project = Project.objects.get(id=p_id)
        issue_type = IssueTypes.objects.get(id=int(request.POST['issue_type']))
        issue = Issue.objects.create(
            project=project,
            name=request.POST['name'],
            issue_type=issue_type,
            description=request.POST['description'],
            notes=request.POST['notes']
        )
        issue.save()
        messages.success(
            request,
            'Added New Issue'
        )
        return redirect('issue_view', i_id=issue.id)

class AddProject(View):
    template_name = 'add_project.html'
    def get(self, request):
        return render(request, self.template_name)

    def post(self, request):
        project = Project.objects.create(
            name=request.POST['name'],
            github_link=request.POST.get('github_link'),
            live_link=request.POST.get('live_link'),
            description=request.POST['description'],
            notes=request.POST.get('notes')
        )
        project.save()
        messages.success(request, "Project Created")
        return redirect('project_view', p_id=project.pk)

class EditProject(View):
    template_name = 'edit_project.html'
    def get(self, request, p_id):
        project = Project.objects.get(id=p_id)
        context = {'project': project}
        return render(request, self.template_name, context)

    def post(self, request, p_id):
        project = Project.objects.get(id=p_id)
        project.name = request.POST['name']
        project.description = request.POST['description']
        project.github_link = request.POST.get('github_link')
        project.live_link = request.POST.get('live_link')
        project.notes = request.POST.get('notes')
        project.save()
        messages.success(request, 'Project Updated')
        return redirect('project_view', p_id=p_id)

@login_required
def DeleteProject(request, p_id):
    project = Project.objects.get(id=p_id)
    project.delete()
    messages.success(request, "Project Deleted")
    return redirect('all_projects')