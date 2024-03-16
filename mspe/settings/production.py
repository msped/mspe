import os
from .base import *
import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration

DEBUG = False

sentry_sdk.init(
    dsn=os.environ.get('sentry_dns'),
    integrations=[DjangoIntegration()],
    traces_sample_rate=1.0,
    send_default_pii=True
)

site_domain = os.environ.get('DOMAIN')
CSRF_TRUSTED_ORIGINS = [
    f'https://{site_domain}',
    f'https://www.{site_domain}'
]
