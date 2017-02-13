from api import views
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = format_suffix_patterns([
    url(r'^$', views.api_root),
    url(r'citations$', views.CitationList.as_view(),
        name='citation-list'),
    url(r'^citations/(?P<pk>[0-9]+)$',
        views.CitationDetail.as_view(),
        name='citation-detail'),
])
