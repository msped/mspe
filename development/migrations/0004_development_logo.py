# Generated by Django 3.1.4 on 2021-03-27 00:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('development', '0003_auto_20210325_2130'),
    ]

    operations = [
        migrations.AddField(
            model_name='development',
            name='logo',
            field=models.ImageField(blank=True, default='default.jpg', null=True, upload_to='development_logos'),
        ),
    ]
