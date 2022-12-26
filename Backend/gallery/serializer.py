from django.shortcuts import get_object_or_404
from rest_framework import serializers

from gallery.models import Artist, Product, ProductCategory


class ArtistSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        user_id = self.context['user_id']
        return Artist.objects.create(user_id=user_id, **validated_data)

    class Meta:
        model = Artist
        fields = ['id', 'first_name', 'last_name', 'username',
                  'description', 'profile_pic']


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = ['id', 'title']


class ProductSerializer(serializers.ModelSerializer):
    artist = ArtistSerializer(read_only=True)
    likes_number = serializers.SerializerMethodField(method_name='like_count')

    def like_count(self, product: Product):
        return product.likes.count()

    def create(self, validated_data):
        user_id = self.context['user_id']
        artist = get_object_or_404(Artist,
                                   user_id=user_id)  # req.user.id

        return Product.objects.create(artist_id=artist.id, **validated_data)

    class Meta:
        model = Product
        fields = ['id', 'title', 'artist', 'category',
                  'description', 'images', 'likes_number', 'likes']
