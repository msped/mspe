from django.contrib.admin.sites import site
from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class DevelopmentSitemap(Sitemap):
    priority = 0.8

    def item(self):
        return ['development']

    def location(self, item):
        return reverse(item)