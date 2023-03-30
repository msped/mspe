import json
from django.test import TestCase
from .apps import OnlinecvConfig
from .models import Verification

# Create your tests here.

class TestOnlineCV(TestCase):

    def app_name(self):
        """Check app name"""
        self.assertEqual("onlinecv", OnlinecvConfig.name)

    def verfication_model(self):
        code = Verification.objects.create(
            code='Hood',
            is_active=True
        )
        code.save()
        self.assertEqual(str(code), 'Hood')

    def get_code(self):
        res = self.client.get('/api/cv/')
        self.assertEqual(res.status_code, 200)
        self.assertEqual(
            json.loads(res.content),
            {
                'code': 'Hood'
            }
        )

    def test(self):
        self.app_name()
        self.verfication_model()
        self.get_code()
