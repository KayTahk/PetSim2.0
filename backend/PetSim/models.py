from django.db import models

# Create your models here.

BREED_CHOICES = (
    ('green','GREEN'),
    ('blue', 'BLUE'),
    ('pink','PINK'),
)

class petSim(models.Model):
    petName = models.CharField(max_length=120)
    petBreed = models.CharField(max_length=6, choices=BREED_CHOICES, default='pink')

    def _str_(self):
        return self.petName