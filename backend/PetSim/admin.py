from django.contrib import admin
from .models import userPet, petBreed, Employee


# Register your models here.
class PetBreedAdmin(admin.ModelAdmin):
    list_display = ('breedName', 'description', 'image')

admin.site.register(petBreed, PetBreedAdmin)

class PetSimAdmin(admin.ModelAdmin):
    list_display = ('petName', 'petBreed', 'userInfo')

admin.site.register(userPet, PetSimAdmin)

class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('employeeName', 'petBreed','stress', 'xp', 'next_xp', 'level', 'stress_limit', 
    'strength', 'strength_growth', 'dexterity', 'dexterity_growth', 'intelligence', 
    'intelligence_growth', 'charisma', 'charisma_growth')

admin.site.register(Employee, EmployeeAdmin)