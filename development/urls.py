from django.urls import path
from .views import DevelopmentView, GetLatest, GetProject

urlpatterns = [
    path('', DevelopmentView.as_view(), name="development"),
    path('latest/', GetLatest.as_view(), name="get_latest"),
    path('<pk>/', GetProject.as_view(), name="get_project"),
]
