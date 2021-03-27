import os
from django.conf import settings
from django.db.models.signals import pre_delete, pre_save
from django.dispatch import receiver
from .models import Development


@receiver(pre_delete, sender=Development)
def auto_delete_file_on_delete(sender, instance, **kwargs):
    if instance:
        print(os.path.join(settings.MEDIA_ROOT, instance.logo.name))
        os.remove(os.path.join(settings.MEDIA_ROOT, instance.logo.name))

@receiver(pre_save, sender=Development)
def auto_delete_file_on_change(sender, instance, **kwargs):
    if not instance.pk:
        return False
    try:
        old_file = Development.objects.get(pk=instance.pk).logo
    except Development.DoesNotExist:
        return False
    
    new_file = instance.logo
    if not old_file == new_file:
        if os.path.isfile(old_file.path):
            os.remove(os.path.join(settings.MEDIA_ROOT, old_file.name))