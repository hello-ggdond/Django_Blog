from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('index', views.index, name='index'),
    path('blog/<int:blog_id>', views.blog_detail, name='blog_detail'),
    path('blog/pub', views.blog_pub, name='blog_pub'),
    path('blog/comment', views.comment_pub, name='comment_pub'),
    path('blog/search', views.search_blog, name='search_blog'),
]