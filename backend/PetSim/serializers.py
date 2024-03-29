from rest_framework import serializers
from .models import userPet, petBreed

class userPetSerializer(serializers.ModelSerializer):
    class Meta:
        model = userPet
        fields = ('petName', 'petBreed')

class petBreedSerializer(serializers.ModelSerializer):
    class Meta:
        model = petBreed
        fields = ('breedName', 'description', 'image')