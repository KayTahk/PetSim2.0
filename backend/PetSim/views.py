from django.shortcuts import render

from rest_framework import viewsets
from .serializers import userPetSerializer, petBreedSerializer
from .models import userPet, petBreed

# Create your views here.

class userPetView(viewsets.ModelViewSet):
    serializer_class = userPetSerializer
    queryset = userPet.objects.all()

class petBreedView(viewsets.ModelViewSet):
    serializer_class = petBreedSerializer
    queryset = petBreed.objects.all()
