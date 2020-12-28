from django.contrib import admin
from django.urls import path
from django.contrib.auth.decorators import login_required
from .views import AllProjects, ProjectView, TaskView, IssueView

urlpatterns = [
    path('', AllProjects.as_view(), name="all_projects"),
    path('<int:p_id>/', ProjectView.as_view(), name="project_view"),
    path('task/<int:t_id>/', TaskView.as_view(), name="task_view"),
    path('issue/<int:i_id>/', IssueView.as_view(), name="issue_view"),
]