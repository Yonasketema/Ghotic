from rest_framework import serializers

from gallery.models import Artist, ArtistImage, Product, ProductImage


class ProductImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductImage
        fields = ['id', 'image']


class ArtistImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ArtistImage
        fields = ['id', 'image']


class ArtistSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Artist
        fields = ['id', 'first_name', 'last_name', 'description', 'images']


class ProductSerializer(serializers.ModelSerializer):
    artist = ArtistSerializer()
    category = serializers.StringRelatedField()
    images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'title', 'artist', 'category', 'description', 'images']
