from django.db import models

# Create your models here.

class Technologies(models.Model):
    name = models.CharField(max_length=50)
    more_info = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name

class Development(models.Model):
    """Model for development projects"""
    name = models.CharField(max_length=50)
    description = models.TextField()
    url = models.URLField(blank=True, null=True)
    github_link = models.URLField(blank=True, null=True)
    created_date = models.DateField()

    def __str__(self):
        return self.name
        
class DevelopmentTech(models.Model):
    """Link Tech to Development projects"""
    development = models.ForeignKey(Development, on_delete=models.CASCADE)
    tech = models.ForeignKey(Technologies, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.Developement} - {self.Tech}'
