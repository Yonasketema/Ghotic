
from pprint import pprint
from django.shortcuts import render
from rest_framework.viewsets import ReadOnlyModelViewSet, GenericViewSet, ModelViewSet
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin, UpdateModelMixin

from gallery.models import Product, Artist
from gallery.serializer import ArtistSerializer, ProductSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from rest_framework.permissions import IsAuthenticated, AllowAny


# Create your views here.


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_serializer_context(self):
        return {'user_id': self.request.user.id}


class ArtistViewSet(CreateModelMixin, UpdateModelMixin, RetrieveModelMixin, GenericViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
    permission_classes = [IsAuthenticated]

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_serializer_context(self):
        return {'user_id': self.request.user.id}

    @action(detail=False, methods=['GET', 'PUT'])
    def me(self, request):

        (artist, created) = Artist.objects.get_or_create(user_id=request.user.id)
        if request.method == 'GET':
            serializer = ArtistSerializer(artist)
            return Response(serializer.data)
        elif request.method == 'PUT':
            serializer = ArtistSerializer(artist, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)


@api_view()
def artist(request, artist_name):
    product = Product.objects.filter(artist__username=artist_name)
    if not product:
        return Response("no artist with is name", status.HTTP_404_NOT_FOUND)
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)
