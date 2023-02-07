from django.urls import path
from rest_framework.routers import SimpleRouter

from . import views

routers = SimpleRouter()
routers.register('', views.ArtistViewSet)

urlpatterns = [
                  path('go/<artist_name>/', views.artist),
                  path('go/profile_pic', views.profile_pic),
              ] + routers.urls
