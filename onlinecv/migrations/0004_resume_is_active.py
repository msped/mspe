# Generated by Django 4.0.4 on 2022-06-02 16:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('onlinecv', '0003_resume'),
    ]

    operations = [
        migrations.AddField(
            model_name='resume',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]