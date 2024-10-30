from django.db import models

# Create your models here.
class CaptchaModel(models.Model):
    email = models.EmailField(unique=True)
    captcha = models.TextField(max_length=20)
    create_time = models.DateTimeField(auto_now_add=True)

