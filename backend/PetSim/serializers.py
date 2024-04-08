from rest_framework import serializers
from .models import userPet, petBreed, Employee, Task

class userPetSerializer(serializers.ModelSerializer):
    class Meta:
        model = userPet
        fields = ('petName', 'petBreed')

class petBreedSerializer(serializers.ModelSerializer):
    class Meta:
        model = petBreed
        fields = ('breedName', 'description', 'image')

class employeeSerializer(serializers.ModelSerializer):
    petBreed_image = serializers.ImageField(source='petBreed.image')
    class Meta:
        model = Employee
        fields = ('employeeName', 'petBreed', 'petBreed_image','stress', 'xp', 'next_xp', 'level', 
        'stress_limit', 'strength', 'strength_growth', 'dexterity', 'dexterity_growth', 'intelligence', 
        'intelligence_growth', 'charisma', 'charisma_growth')

class taskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('name', 'progress', 'progress_needed', 'difficulty', 'skillset', 'stat1', 'stat2', 
        'condition')