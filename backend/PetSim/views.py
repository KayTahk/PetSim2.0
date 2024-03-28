from django.shortcuts import render

from rest_framework import viewsets
from .serializers import PetSimSerializer
from .models import petSim

# Create your views here.

class PetSimView(viewsets.ModelViewSet):
    serializer_class = PetSimSerializer
    queryset = petSim.objects.all()
