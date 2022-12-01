from django.db import models

# Create your models here.


class Artist(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self) -> str:
        return f'{self.first_name} {self.last_name}'


class ArtistImage(models.Model):
    artist = models.ForeignKey(
        Artist, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='artist/images')


class ProductCategory(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.title


class Product(models.Model):
    title = models.CharField(max_length=255)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    category = models.ForeignKey(
        ProductCategory, on_delete=models.PROTECT)
    description = models.TextField()

    def __str__(self) -> str:
        return self.title


class ProductImage(models.Model):
    artist = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='product/images')
