from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from wagtail.admin import urls as wagtailadmin_urls
from wagtail import urls as wagtail_urls
from wagtail.documents import urls as wagtaildocs_urls
from blog.api import api_router

api_urlpattern = [
    path('v2/', api_router.urls),
    path('core/', include('core.urls')),
    path('calendar/', include('pink_flag_calendar.urls'))
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cms/', include(wagtailadmin_urls)),
    path('documents/', include(wagtaildocs_urls)),
    path('pages/', include(wagtail_urls)),
    path('api/', include(api_urlpattern)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
