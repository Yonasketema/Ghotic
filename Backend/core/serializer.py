
from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer
from rest_framework import exceptions, serializers


class UserCreateSerializer(BaseUserCreateSerializer):

    class Meta(BaseUserCreateSerializer.Meta):
        fields = ['id', 'email', 'password']
