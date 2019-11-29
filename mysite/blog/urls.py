from django.conf.urls import url
from django.urls import path
from . import views



urlpatterns = [
    path('', views.Index, name='Index'),
    path('Registro.html', views.Registro, name='Registro'),
    path('Ingreso.html', views.Ingreso, name='Ingreso'),
    path('Animes.html', views.Animes, name='Animes'),
    path('post_list', views.post_list, name='post_list'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
    path('post/new', views.post_new, name='post_new'),
    path('post/<int:pk>/edit/', views.post_edit, name='post_edit'),
]
