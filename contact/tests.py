from django.test import TestCase
from .apps import ContactConfig

class Contact(TestCase):

    def test_app_name(self):
        """Check app name"""
        self.assertEqual("contact", ContactConfig.name)

    def test_working_post(self):
        response = self.client.post(
            '/api/contact/send/',
            {
                "name": "Matt Edwards",
                "email": "matt@mspe.me",
                "subject": "test",
                "message": "test message",
            }
        )
        self.assertEqual(response.status_code, 200)

    def test_post_with_error(self):
        response = self.client.post(
            '/api/contact/send/',
            {
                "name": "",
                "email": "matt@mspe.me",
                "subject": "test",
                "message": "test message",
            }
        )
        self.assertEqual(response.status_code, 400)
