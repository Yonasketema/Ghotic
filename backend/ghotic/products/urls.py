from django.urls import path
from rest_framework.routers import SimpleRouter

from . import views

routers = SimpleRouter()
routers.register('', views.ProductViewSet)

urlpatterns = [
                  path('like', views.product_like),
                  path('user_likes_products/', views.user_likes_products),

              ] + routers.urls
