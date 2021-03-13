from django.urls import path
from .views import DevelopmentView

urlpatterns = [
    path('', DevelopmentView.as_view(), name="development")
]
