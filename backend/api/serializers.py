from django.contrib.auth.models import User, Group
from rest_framework import serializers
from models import Citation


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class CitationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Citation
        fields = ('pk', 'name', 'authors', 'datepublished','dateuploaded','doi')
        readonly_fields = ('file_link')

    class JSONAPIMeta:
        resource_name = "citations"