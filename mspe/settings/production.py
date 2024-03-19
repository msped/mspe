import os
from .base import *
import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration

DEBUG = False

sentry_sdk.init(
    dsn=os.environ.get('SENTRY_DNS'),
    integrations=[DjangoIntegration()],
    traces_sample_rate=1.0,
    send_default_pii=True
)

site_domain = os.environ.get('DOMAIN')

CORS_ALLOWED_ORIGINS = [
    'http://localhost',
    'http://127.0.0.1',
]

CSRF_TRUSTED_ORIGINS = [
    f'https://{site_domain}',
    f'https://www.{site_domain}'
]
