# Generated by Django 3.2.7 on 2022-01-06 19:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('onlinecv', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='verification',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]
