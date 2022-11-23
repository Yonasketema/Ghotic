from django.db import models

# Create your models here.


class Artist(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    description = models.TextField()


class Art(models.Model):
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    description = models.TextField()
