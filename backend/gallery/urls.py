from django.urls import path
from rest_framework.routers import SimpleRouter
from . import views

routers = SimpleRouter()
routers.register('products', views.ProductViewSet)
routers.register('artists', views.ArtistViewSet)

urlpatterns = [
    path('artist/<artist_name>/', views.artist),
    path('like', views.product_like),
    path('profile_pic', views.profile_pic),
    path('user_likes_products', views.user_likes_products)

    

] + routers.urls
