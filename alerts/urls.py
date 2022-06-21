from django.urls import path
from .views import Alerts

urlpatterns = [
    path('/alerts/', Alerts.as_view(), name="alerts"),
]
