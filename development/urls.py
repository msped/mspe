from django.urls import path
from .views import DevelopmentView, GetProject

urlpatterns = [
    path('', DevelopmentView.as_view(), name="development"),
    path('<pk>/', GetProject.as_view(), name="get_project")
]
