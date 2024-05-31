from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

class petBreed(models.Model):
    breedName = models.CharField(max_length=120, unique=True, primary_key=True)
    description = models.CharField(max_length=120)
    image = models.ImageField(upload_to ='uploads/')

class userPet(models.Model):
    petName = models.CharField(max_length=120)
    petBreed = models.ForeignKey(petBreed, on_delete=models.CASCADE, to_field='breedName', blank=True)
    userInfo = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_pet')

    def _str_(self):
        return f"{self.username}'s pet - {self.petName} ({self.petBreed})"

class Employee(models.Model):
    employeeName = models.CharField(max_length=120)
    petBreed = models.ForeignKey(petBreed, on_delete=models.CASCADE, to_field='breedName')
    stress = models.IntegerField()
    xp = models.IntegerField(default=0)
    next_xp = models.IntegerField(default=128)
    level = models.IntegerField(default=1)
    stress_limit = models.IntegerField()
    strength = models.IntegerField()
    strength_growth = models.IntegerField()
    dexterity = models.IntegerField()
    dexterity_growth = models.IntegerField()
    intelligence = models.IntegerField()
    intelligence_growth = models.IntegerField()
    charisma = models.IntegerField()
    charisma_growth = models.IntegerField()

class Facility(models.Model):
    charisma_mod = models.FloatField(default=1)
    charisma_boost = models.IntegerField(default=0)
    strength_mod = models.FloatField(default=1)
    strength_boost = models.IntegerField(default=0)
    dexterity_mod = models.FloatField(default=1)
    dexterity_boost = models.IntegerField(default=0)
    intelligence_mod = models.FloatField(default=1)
    intelligence_boost = models.IntegerField(default=0)

class Task(models.Model):
    name = models.CharField(max_length=100, unique=True)
    progress = models.IntegerField()
    progress_needed = models.IntegerField()
    difficulty = models.IntegerField()
    skillset = models.ForeignKey(petBreed, on_delete=models.CASCADE, to_field='breedName')
    stat1 = models.CharField(max_length=100, blank=True, null=True)
    stat2 = models.CharField(max_length=100, blank=True, null=True)
    condition = models.CharField(max_length=100, blank=True, null=True)

@receiver(post_save, sender=User)
def create_user_pet(sender, instance, created, **kwargs):
    if created and not hasattr(instance, 'userpet'):
        user_pet_instance = userPet(userInfo=instance)
        user_pet_instance.save()

@receiver(post_save, sender=User)
def save_user_pet(sender, instance, **kwargs):
    try:
        instance.user_pet.save()
    except userPet.DoesNotExist:
        # Handle the case where userPet instance doesn't exist yet
        pass
