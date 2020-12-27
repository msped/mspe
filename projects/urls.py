from django.contrib import admin
from django.urls import path
from django.contrib.auth.decorators import login_required
from .views import AllProjects

urlpatterns = [
    path('', AllProjects.as_view(), name="all_projects"),
]