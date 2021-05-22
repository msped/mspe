from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class ContactSitemap(Sitemap):
    priority = 0.6

    def items(self):
        return ['contact']
    
    def location(self, item):
        return reverse(item)