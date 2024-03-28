from rest_framework import serializers
from .models import petSim

class PetSimSerializer(serializers.ModelSerializer):
    class Meta:
        model = petSim
        fields = ('petName', 'petBreed')