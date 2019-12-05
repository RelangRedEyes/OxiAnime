from django.conf.urls import url
from django.urls import path
from . import views
from django.contrib.auth import views as views_auth



urlpatterns = [
    path('', views.Index, name='Index'),
    path('Registro.html', views.Registro, name='Registro'),
    path('Ingreso.html', views.Ingreso, name='Ingreso'),
    path('Animes.html', views.Animes, name='Animes'),
    path('post_list.html', views.post_list, name='post_list'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
    path('post/new', views.post_new, name='post_new'),
    path('post/<int:pk>/edit/', views.post_edit, name='post_edit'),
    path('Login/', views_auth.LoginView.as_view(template_name='blog/Login.html'), name='Login'),
    path('Perfil/', views.Registro, name='Perfil'),
    path('Logout/', views_auth.LogoutView.as_view(next_page='Inicio'), name='Logout'),
    #========================================================
    path('Login/', views_auth.LoginView.as_view(template_name='blog/Login.html'), name='Login'),
    path('Logout/', views_auth.LogoutView.as_view(next_page='Inicio'), name='Logout'),
]
