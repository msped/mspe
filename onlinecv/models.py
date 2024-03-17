from django.db import models

# Create your models here.

class Verification(models.Model):
    code = models.CharField(max_length=20)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.code}'

class Resume(models.Model):
    file = models.FileField(upload_to='cv')
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.file.name}'
