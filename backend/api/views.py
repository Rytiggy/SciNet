from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from api.serializers import UserSerializer, GroupSerializer, CitationSerializer
from rest_framework.decorators import api_view
from rest_framework import generics
from api.models import Citation
from rest_framework.response import Response
from rest_framework.reverse import reverse


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer



@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'citations': reverse('citation-list', request=request, format=format),
    })

class CitationList(generics.ListCreateAPIView):
    queryset = Citation.objects.all()
    serializer_class = CitationSerializer


class CitationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Citation.objects.all()
    serializer_class = CitationSerializer
