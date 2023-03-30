from django.urls import path
from .views import VerificationCode, DownloadResume

urlpatterns = [
    path('', VerificationCode.as_view(), name="cv"),
    path('download/', DownloadResume.as_view(), name="download"),
]
