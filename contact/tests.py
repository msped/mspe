from django.test import TestCase
from .apps import ContactConfig

# Create your tests here.

class Contact(TestCase):

    def test_app_name(self):
        """Check app name"""
        self.assertEqual("contact", ContactConfig.name)

    def test_contact_page_response(self):
        """Check response of contact page, should return 200"""
        response = self.client.get('/contact/')
        self.assertEqual(response.status_code, 200)

    def test_contact_page_content(self):
        """Test content in page response"""
        response = self.client.get('/contact/')
        self.assertIn(b'<h1 class="staal weight-700">Contact</h1>', response.content)
