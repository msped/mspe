from django.db import models

# Create your models here.

class Alert(models.Model):
    class SeverityChoices(models.TextChoices):
        """Options for Alerts"""
        ERROR = "1", "error"
        WARNING = "2", "warning"
        INFO = "3", "info"
        SUCCESS = "4", "success"

    message = models.CharField(max_length=255)
    severity = models.CharField(
        max_length=8, 
        choices=SeverityChoices.choices, 
        default="1"
    )

    def __str__(self):
        return f'{self.severity} - {self.message}'
