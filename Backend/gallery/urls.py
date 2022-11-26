from django.urls import path
from rest_framework.routers import SimpleRouter
from . import views

routers = SimpleRouter()
routers.register('products', views.ProductViewSet)


# urlpatterns =

urlpatterns = [
    path('artist/<artist_name>/', views.artist)
] + routers.urls
