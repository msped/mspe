import shutil
import tempfile
from django.test import TestCase, override_settings
from django.core.files.uploadedfile import SimpleUploadedFile
from django.urls import reverse
from development.models import Development
from .apps import HomeConfig

# Create your tests here.

MEDIA_ROOT = tempfile.mkdtemp()

@override_settings(MEDIA_ROOT=MEDIA_ROOT)
class TestHomepage(TestCase):

    def setUp(self):
        image = SimpleUploadedFile(
            "test.png",
            b'abunchofbytes'
        )
        dev = Development.objects.create(
            name='Development Story',
            logo=image,
            description="Here's what I built",
            url='https://autoskunk.works/',
            github_link='https://github.com/msped/autoskunkworks',
            created_date='2020-09-10'
        )

    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(MEDIA_ROOT, ignore_errors=True)
        super().tearDownClass()
        

    def test_app_name(self):
        """Check app name"""
        self.assertEqual("home", HomeConfig.name)

    def test_homepage_response(self):
        """Check response of contact page, should return 200"""
        url = reverse('home')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertIn(
            b'<h1 class="staal weight-700">Hi, I\'m Matt! <br> A Full Stack Developer.</h1>',
            response.content
        )