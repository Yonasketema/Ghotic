from rest_framework.routers import SimpleRouter
from . import views

routers = SimpleRouter()
routers.register('products', views.ProductViewSet)

urlpatterns = routers.urls
