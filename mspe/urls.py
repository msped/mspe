from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/alerts/', include('alerts.urls')),
    path('api/dev/', include('development.urls')),
    path('api/cv/', include('onlinecv.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
