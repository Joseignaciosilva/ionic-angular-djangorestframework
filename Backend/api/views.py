from django.shortcuts import render

from .models import Producto
from .serializer import ProductoSerializer
from rest_framework import viewsets
# Create your views here.

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
