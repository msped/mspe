"""mspe URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.sitemaps.views import sitemap
from .settings import MEDIA_ROOT
from django.views.generic.base import TemplateView
from home.sitemaps import HomeStaticSitemap
from development.sitemaps import DevelopmentSitemap
from contact.sitemaps import ContactSitemap

sitemaps = {
    'home': HomeStaticSitemap,
    'developments': DevelopmentSitemap,
    'contact': ContactSitemap,
}


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('dev/', include('development.urls')),
    path('contact/', include('contact.urls')),
    path('projects/', include('projects.urls')),
    path('captcha/', include('captcha.urls')),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}),
    path(
        "robots.txt",
        TemplateView.as_view(template_name="robots.txt", content_type="text/plain"),
    ),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=MEDIA_ROOT)

handler400 = 'errors.views.handler400View'
handler403 = 'errors.views.handler403View'
handler404 = 'errors.views.handler404View'
handler500 = 'errors.views.handler500View'