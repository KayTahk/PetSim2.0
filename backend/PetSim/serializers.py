from rest_framework import serializers
from .models import userPet, petBreed, Employee

class userPetSerializer(serializers.ModelSerializer):
    class Meta:
        model = userPet
        fields = ('petName', 'petBreed')

class petBreedSerializer(serializers.ModelSerializer):
    class Meta:
        model = petBreed
        fields = ('breedName', 'description', 'image')

class employeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('employeeName', 'petBreed','stress', 'xp', 'next_xp', 'level', 'stress_limit', 
        'strength', 'strength_growth', 'dexterity', 'dexterity_growth', 'intelligence', 
        'intelligence_growth', 'charisma', 'charisma_growth')