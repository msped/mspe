from django.db import models

# Create your models here.

class Verification(models.Model):
    code = models.CharField(max_length=20)

    def __str__(self):
        return self.code
