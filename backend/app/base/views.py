from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Blog 
from .serializers import BlogSerializer
from rest_framework import status 
from rest_framework.pagination import PageNumberPagination
from django.core.paginator import Paginator
# Create your views here.


@api_view(['GET'])
def getBlogs(request):
    paginator = PageNumberPagination()
    paginator.page_size = 2
    blog = Blog.objects.all()
    result_page = paginator.paginate_queryset(blog, request)
    serializer = BlogSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET'])
def getBlog(request, pk):
    try:
        blog = Blog.objects.get(id=pk)
        serializer = BlogSerializer(blog, many=False)
        return Response(serializer.data)
    except:
        return Response({"detail":"Blog does not exist"}, status= status.HTTP_400_BAD_REQUEST)



