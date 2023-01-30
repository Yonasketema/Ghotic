from django.db import models
from django.conf import settings

# Create your models here.


class Artist(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    username = models.CharField(max_length=255, unique=True,null=True)
    description = models.TextField()
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    profile_pic = models.ImageField(
        upload_to='artist-profile/images', default=None, blank=True, null=True)

    def __str__(self) -> str:
        return f'{self.first_name} {self.last_name}'


class ProductCategory(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.title


class Product(models.Model):
    title = models.CharField(max_length=255)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE,related_name="productbyartist")
    category = models.ForeignKey(
        ProductCategory, on_delete=models.PROTECT)
    description = models.TextField()
    images = models.ImageField(upload_to='product/images')
    likes = models.ManyToManyField(
        Artist, related_name='product_like', default=None, blank=True)

    def __str__(self) -> str:
        return self.title
