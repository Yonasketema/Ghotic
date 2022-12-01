from django.contrib import admin
from . import models
# Register your models h@ere.


class ArtistImageInline(admin.TabularInline):
    model = models.ArtistImage


@admin.register(models.Artist)
class ArtistAdmin(admin.ModelAdmin):
    inlines = [ArtistImageInline]
    list_display = ['first_name', 'last_name', 'username']


@admin.register(models.ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
    pass


class ProductImageInline(admin.TabularInline):
    model = models.ProductImage


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline]
    list_display = ['title', 'artist']
