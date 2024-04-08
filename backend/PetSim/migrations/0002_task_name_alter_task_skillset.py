# Generated by Django 5.0.3 on 2024-04-07 22:01

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PetSim', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='name',
            field=models.CharField(default='Error', max_length=100, unique=True),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='task',
            name='skillset',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PetSim.petbreed'),
        ),
    ]
