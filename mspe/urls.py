from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/dev/', include('development.urls')),
    path('api/contact/', include('contact.urls')),
]
