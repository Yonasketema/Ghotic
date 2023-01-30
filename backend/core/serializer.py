
from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer
from rest_framework import exceptions, serializers


class UserCreateSerializer(BaseUserCreateSerializer):

    # def validate(self, attrs):
    #     password = attrs.get("password")
    #     password_confirm = attrs.get("password_confirm")

    #     if password != password_confirm:
    #         raise exceptions.ValidationError('password are not same')
    #     else:

    #         return super().validate(attrs)

    class Meta(BaseUserCreateSerializer.Meta):
        fields = ['id', 'username', 'email', 'password']
