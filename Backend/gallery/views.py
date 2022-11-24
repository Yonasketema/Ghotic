from django.shortcuts import render
from rest_framework.viewsets import ReadOnlyModelViewSet

from gallery.models import Product
from gallery.serializer import ProductSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view


# Create your views here.


class ProductViewSet(ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
