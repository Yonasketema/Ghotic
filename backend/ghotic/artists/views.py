from django.shortcuts import get_object_or_404
from products.models import Product
from products.serializer import ProductSerializer
from rest_framework import status
from rest_framework.decorators import api_view, action, permission_classes
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from .models import Artist
from .serializer import ArtistSerializer


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
    serializer = ProductSerializer(product, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def profile_pic(request):
    user_artist_account = get_object_or_404(Artist,
                                            user_id=request.user.id)

    user_artist_account.profile_pic = request.data["profile_pic"]
    user_artist_account.save()

    serializer = ArtistSerializer(user_artist_account, context={'request': request})

    return Response(serializer.data)
