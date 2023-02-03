from rest_framework import serializers

from .models import Artist


class ArtistSerializer(serializers.ModelSerializer):
    artist_works = serializers.SerializerMethodField(method_name='works')
    user_email = serializers.SerializerMethodField(method_name='email')

    def works(self, artist: Artist):
        return artist.productbyartist.count()

    def email(self, artist: Artist):
        return artist.user.email

    def create(self, validated_data):
        user_id = self.context['user_id']
        return Artist.objects.create(user_id=user_id, **validated_data)

    class Meta:
        model = Artist
        fields = ['id', 'first_name', 'last_name', 'username',
                  'description', 'profile_pic', 'artist_works', 'user_email']
