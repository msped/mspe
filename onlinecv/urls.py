from django.urls import path
from .views import VerificationCode

urlpatterns = [
    path('', VerificationCode.as_view(), name="cv")
]
