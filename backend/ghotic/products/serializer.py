from django.shortcuts import get_object_or_404
from rest_framework import serializers

from artists.serializer import ArtistSerializer
from artists.models import Artist
from .models import Product, ProductCategory

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

        data = validated_data
        del data['likes']
        product = Product.objects.create(artist_id=artist.id, **data)

        return product

    class Meta:
        model = Product
        fields = ['id', 'title', 'artist', 'category',
                  'description', 'images', 'likes_number', 'likes']