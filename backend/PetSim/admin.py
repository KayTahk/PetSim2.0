from django.contrib import admin
from .models import userPet, petBreed
# Register your models here.

class PetBreedAdmin(admin.ModelAdmin):
    list_display = ('breedName', 'description', 'image')

admin.site.register(petBreed, PetBreedAdmin)

class PetSimAdmin(admin.ModelAdmin):
    list_display = ('petName', 'petBreed', 'userInfo')

# Register your models here.

admin.site.register(userPet, PetSimAdmin)