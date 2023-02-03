from artists.models import Artist
from django.db import models


class ProductCategory(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.title


class Product(models.Model):
    title = models.CharField(max_length=255)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name="productbyartist")
    category = models.ForeignKey(
        ProductCategory, on_delete=models.PROTECT)
    description = models.TextField()
    images = models.ImageField(upload_to='product/images')
    likes = models.ManyToManyField(
        Artist, related_name='product_like', default=None, blank=True)

    def __str__(self) -> str:
        return self.title
