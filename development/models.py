from django.db import models

# Create your models here.

class Development(models.Model):
    """Model for development projects"""
    name = models.CharField(max_length=50)
    description = models.TextField()
    url = models.URLField(blank=True, null=True)
    github_link = models.URLField(blank=True, null=True)
    created_date = models.DateField()

    def __str__(self):
        return self.name
