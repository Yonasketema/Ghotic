from artists.models import Artist
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .models import Product
from .serializer import ProductSerializer


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


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def product_like(request):
    product = get_object_or_404(Product, id=request.data['product_id'])
    user_artist_account = get_object_or_404(Artist, user_id=request.user.id)

    if product.likes.filter(id=user_artist_account.id).exists():
        product.likes.remove(user_artist_account)
    else:
        product.likes.add(user_artist_account)

    return Response(ProductSerializer(product, context={'request': request}).data, )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_likes_products(request):
    user_artist_account = get_object_or_404(Artist,
                                            user_id=request.user.id)
    queryset = user_artist_account.product_like.all()
    serializer = ProductSerializer(queryset, many=True)

    return Response(serializer.data)
