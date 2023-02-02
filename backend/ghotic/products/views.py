from django.shortcuts import render, get_object_or_404
from rest_framework.viewsets import ReadOnlyModelViewSet, GenericViewSet, ModelViewSet


from .models import Product
from .serializer import  ProductSerializer

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
