# Generated by Django 3.1.4 on 2021-03-25 21:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('development', '0002_developmenttech_technologies'),
    ]

    operations = [
        migrations.RenameField(
            model_name='developmenttech',
            old_name='developement',
            new_name='development',
        ),
    ]
