from django.db import models

# Create your models here.

class Project(models.Model):
    """Model for a project"""
    name = models.CharField(max_length=100)
    github_link = models.URLField(max_length=250, blank=True, null=True)
    live_link = models.URLField(max_length=250, blank=True, null=True)
    description = models.TextField()
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Task(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    closed = models.BooleanField(default=False)
    description = models.TextField()
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class IssueTypes(models.Model):
    option = models.CharField(max_length=50)

    def __str__(self):
        return self.option

class Issue(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    issue_type = models.ForeignKey(IssueTypes, on_delete=models.CASCADE)
    closed = models.BooleanField(default=False)
    description = models.TextField()
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        if self.closed:
            return f'{self.id} - {self.issue_type} - Closed'
        else:
            return f'{self.id} - {self.issue_type} - Open'