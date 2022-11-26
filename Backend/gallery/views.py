from django.shortcuts import render
from rest_framework.viewsets import ReadOnlyModelViewSet

from gallery.models import Product, Artist
from gallery.serializer import ProductSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.


class ProductViewSet(ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


@api_view()
def artist(request, artist_name):
    product = Product.objects.filter(artist__username=artist_name)
    if not product:
        return Response("no artist with is name", status.HTTP_404_NOT_FOUND)
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)
