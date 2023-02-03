from django.contrib import admin
from . import models


@admin.register(models.ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'artist']
