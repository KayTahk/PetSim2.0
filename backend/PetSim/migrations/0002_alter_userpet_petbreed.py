# Generated by Django 5.0.3 on 2024-03-29 05:09

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PetSim', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userpet',
            name='petBreed',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='PetSim.petbreed'),
        ),
    ]
