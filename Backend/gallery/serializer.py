from rest_framework import serializers

from gallery.models import Artist, Product


class ArtistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Artist
        fields = ['id', 'first_name', 'last_name', 'description']


class ProductSerializer(serializers.ModelSerializer):
    artist = ArtistSerializer()
    category = serializers.StringRelatedField()

    class Meta:
        model = Product
        fields = ['id', 'title', 'artist', 'category', 'description']
