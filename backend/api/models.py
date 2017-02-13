from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Citation(models.Model):

    dateuploaded = models.DateTimeField(auto_now_add=True)
    authors = models.CharField(max_length=300, default='Unknown')
    doi = models.CharField(max_length=300, default='Unknown')
    datepublished = models.CharField(max_length=300, default='Unknown')
    name = models.CharField(max_length=300, default='Unknown')


    def __str__(self):
        return self.name
