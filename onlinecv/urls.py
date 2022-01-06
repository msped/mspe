from django.urls import path
from .views import OnlineCV

urlpatterns = [
    path('', OnlineCV.as_view(), name="cv")
]