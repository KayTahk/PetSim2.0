from django.contrib import admin
from .models import petSim
# Register your models here.

class PetSimAdmin(admin.ModelAdmin):
    list_display = ('petName', 'petBreed')

# Register your models here.

admin.site.register(petSim, PetSimAdmin)