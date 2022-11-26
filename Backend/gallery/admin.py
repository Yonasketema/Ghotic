from django.contrib import admin
from . import models
# Register your models h@ere.


@admin.register(models.Artist)
class ArtistAdmin(admin.ModelAdmin):
    pass


@admin.register(models.ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(models.ProductProduct)
class ProductAdmin(admin.ModelAdmin):
    pass
