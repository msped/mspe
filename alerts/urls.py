from django.urls import path
from .views import Alerts

urlpatterns = [
    path('', Alerts.as_view(), name="alerts"),
]
