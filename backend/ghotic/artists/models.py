from django.conf import settings
from django.db import models


class Artist(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    username = models.CharField(max_length=255, unique=True, null=True)
    description = models.TextField()
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    profile_pic = models.ImageField(
        upload_to='artist-profile/images', default=None, blank=True, null=True)

    def __str__(self) -> str:
        return f'{self.first_name} {self.last_name}'
