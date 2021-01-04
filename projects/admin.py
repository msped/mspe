from django.contrib import admin
from .models import Project, Issue, Task, IssueTypes

# Register your models here.

admin.site.register(Project)
admin.site.register(Task)
admin.site.register(Issue)
admin.site.register(IssueTypes)