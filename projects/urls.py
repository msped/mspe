from django.contrib import admin
from django.urls import path
from django.contrib.auth.decorators import login_required
from .views import AllProjects, ProjectView, TaskView, IssueView, ToggleTask, TaskEdit, DeleteTask, ToggleIssue

urlpatterns = [
    path('', AllProjects.as_view(), name="all_projects"),
    path('<int:p_id>/', ProjectView.as_view(), name="project_view"),
    path('task/<int:t_id>/', TaskView.as_view(), name="task_view"),
    path('task/toggle-task/<int:t_id>', ToggleTask, name="toggle_task"),
    path('task/<int:t_id>/edit', TaskEdit.as_view(), name="task_edit"),
    path('task/<int:t_id>/delete', DeleteTask, name="delete_task"),
    path('issue/<int:i_id>/', IssueView.as_view(), name="issue_view"),
    path('issue/toggle-issue/<int:i_id>', ToggleIssue, name="toggle_issue"),
]