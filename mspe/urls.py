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
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler400 = 'errors.views.handler400View'
handler403 = 'errors.views.handler403View'
handler404 = 'errors.views.handler404View'
handler500 = 'errors.views.handler500View'