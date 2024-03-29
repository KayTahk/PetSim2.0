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
