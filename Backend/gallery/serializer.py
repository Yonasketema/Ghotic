from rest_framework import serializers

from gallery.models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['title', 'artist_id', 'category', 'description']
