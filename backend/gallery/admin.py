from django.contrib import admin
from . import models
# Register your models h@ere.


@admin.register(models.Artist)
class ArtistAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'username']


@admin.register(models.ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):
    # inlines = [ProductImageInline]
    list_display = ['title', 'artist']
