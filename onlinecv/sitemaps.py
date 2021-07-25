from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class CVSitemap(Sitemap):
    priority = 0.9

    def items(self):
        return ['cv']
    
    def location(self, item):
        return reverse(item)