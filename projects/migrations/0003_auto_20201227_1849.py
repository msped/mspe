# Generated by Django 3.1.4 on 2020-12-27 18:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_auto_20201227_1844'),
    ]

    operations = [
        migrations.AlterField(
            model_name='issue',
            name='notes',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='notes',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='notes',
            field=models.TextField(blank=True, null=True),
        ),
    ]