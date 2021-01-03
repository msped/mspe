from django.contrib import admin
from django.urls import path
from django.contrib.auth.decorators import login_required
from .views import AllProjects, ProjectView, TaskView, IssueView, ToggleTask, TaskEdit, DeleteTask, ToggleIssue, IssueEdit, DeleteIssue, AddTask, AddIssue, AddProject, EditProject, DeleteProject

urlpatterns = [
    path('', login_required(AllProjects.as_view()), name="all_projects"),
    path('<int:p_id>', login_required(ProjectView.as_view()), name="project_view"),
    path('<int:p_id>/new/task', login_required(AddTask.as_view()), name="add_task"),
    path('task/<int:t_id>', login_required(TaskView.as_view()), name="task_view"),
    path('task/toggle-task/<int:t_id>', ToggleTask, name="toggle_task"),
    path('task/<int:t_id>/edit', login_required(TaskEdit.as_view()), name="task_edit"),
    path('task/<int:t_id>/delete', DeleteTask, name="delete_task"),
    path('issue/<int:i_id>', login_required(IssueView.as_view()), name="issue_view"),
    path('issue/toggle-issue/<int:i_id>', ToggleIssue, name="toggle_issue"),
    path('issue/<int:i_id>/edit', login_required(IssueEdit.as_view()), name="issue_edit"),
    path('issue/<int:i_id>/delete', DeleteIssue, name="delete_issue"),
    path('<int:p_id>/new/issue', login_required(AddIssue.as_view()), name="add_issue"),
    path('new', login_required(AddProject.as_view()), name="add_project"),
    path('<int:p_id>/edit', login_required(EditProject.as_view()), name="project_edit"),
    path('<int:p_id>/delete', DeleteProject, name="project_delete"),
]