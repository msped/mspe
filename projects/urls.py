from django.contrib import admin
from django.urls import path
from django.contrib.auth.decorators import login_required
from .views import AllProjects, ProjectView

urlpatterns = [
    path('', AllProjects.as_view(), name="all_projects"),
    path('<int:p_id>/', ProjectView.as_view(), name="project_view"),
]