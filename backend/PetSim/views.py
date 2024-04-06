from django.shortcuts import render

from rest_framework import viewsets
from .serializers import userPetSerializer, petBreedSerializer, employeeSerializer
from .models import userPet, petBreed, Employee

class userPetView(viewsets.ModelViewSet):
    serializer_class = userPetSerializer
    queryset = userPet.objects.all()

class petBreedView(viewsets.ModelViewSet):
    serializer_class = petBreedSerializer
    queryset = petBreed.objects.all()

class employeeView(viewsets.ModelViewSet):
    serializer_class = employeeSerializer
    queryset = Employee.objects.all()