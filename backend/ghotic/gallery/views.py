from django.shortcuts import render, get_object_or_404
from rest_framework.viewsets import ReadOnlyModelViewSet, GenericViewSet, ModelViewSet
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin, UpdateModelMixin

from gallery.models import Product, Artist
from gallery.serializer import ArtistSerializer, ProductSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, action, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_serializer_context(self):
        return {'user_id': self.request.user.id, 'request': self.request}


class ArtistViewSet(CreateModelMixin, UpdateModelMixin, RetrieveModelMixin, GenericViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
    permission_classes = [IsAuthenticated]

    def get_serializer_context(self):
        return {'user_id': self.request.user.id, 'request': self.request}

    @action(detail=False, methods=['GET', 'PUT'])
    def me(self, request):

        (artist, created) = Artist.objects.get_or_create(user_id=request.user.id)

        if request.method == 'GET':
            serializer = ArtistSerializer(artist, context={'request': request})
            return Response(serializer.data)
        elif request.method == 'PUT':
            serializer = ArtistSerializer(
                artist, data=request.data, context={'request': request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)


@api_view()
def artist(request, artist_name):
    product = Product.objects.filter(artist__username=artist_name)
    if not product:
        return Response("no artist with is name", status.HTTP_404_NOT_FOUND)
    serializer = ProductSerializer(product, many=True,context={'request': request})
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def product_like(request):
    product = get_object_or_404(Product, id=request.data['product_id'])
    artist = get_object_or_404(Artist,
            user_id=request.user.id)

    if product.likes.filter(id=artist.id).exists():
        product.likes.remove(artist)
    else:
        product.likes.add(artist)

    return Response(ProductSerializer(product, context={'request': request}).data,)


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def profile_pic(request):
    artist = get_object_or_404(Artist,
            user_id=request.user.id)

    artist.profile_pic = request.data["profile_pic"]
    artist.save()
    
    serializer = ArtistSerializer(artist, context={'request': request})
    
    return Response(serializer.data) 

    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_likes_products(request):
    artist = get_object_or_404(Artist,
            user_id=request.user.id)
    queryset=artist.product_like.all()
    serializer = ProductSerializer(queryset, many=True)
    
    return Response(serializer.data)

  