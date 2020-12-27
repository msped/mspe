from django.db import models

# Create your models here.

class Project(models.Model):
    """Model for a project"""
    name = models.CharField(max_length=100)
    github_link = models.URLField(max_length=250, blank=True, null=True)
    live_link = models.URLField(max_length=250, blank=True, null=True)
    description = models.TextField()
    notes = models.TextField()

    def __str__(self):
        return self.name

class Task(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    closed = models.BooleanField(default=False)
    description = models.TextField()
    notes = models.TextField()

    def __str__(self):
        return self.name

class Issue(models.Model):

    class IssueTypes(models.TextChoices):
        BUG = '1', 'Bug'
        DOCS = '2', 'Documentation'
        ENHANCEMENT = '3', 'Enchancement'
        WONTFIX = '4', 'Wont Fix'
        ERROR = '5', 'Error'

    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    issue_type = models.CharField(max_length=12, choices=IssueTypes.choices, default='1')
    closed = models.BooleanField(default=False)
    description = models.TextField()
    notes = models.TextField()

    def __str__(self):
        if self.closed:
            return f'{self.id} - {self.issue_type} - Closed'
        else:
            return f'{self.id} - {self.issue_type} - Open'