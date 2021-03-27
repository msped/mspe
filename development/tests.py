import shutil
import tempfile
from django.test import TestCase, override_settings
from django.core.files.uploadedfile import SimpleUploadedFile
from .models import Development, Technologies, DevelopmentTech
from .apps import DevelopmentConfig

# Create your tests here.

MEDIA_ROOT = tempfile.mkdtemp()

@override_settings(MEDIA_ROOT=MEDIA_ROOT)
class TestDevelopementApp(TestCase):

    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(MEDIA_ROOT, ignore_errors=True)
        super().tearDownClass()
    
    def test_app_config(self):
        self.assertEqual('development', DevelopmentConfig.name)

    def test_development_page_response(self):
        """Test response of the developement page, should return 200"""
        response = self.client.get('/dev/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'<h1 class="staal weight-700">Development</h1>', response.content)

    def development_model(self):
        """Test the developement model, working"""
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
        self.assertEqual(dev.name, 'Development Story')
        self.assertEqual(dev.description, "Here's what I built")
        self.assertEqual(dev.url, 'https://autoskunk.works/')
        self.assertEqual(dev.github_link, 'https://github.com/msped/autoskunkworks')
        self.assertEqual(dev.created_date, '2020-09-10')
    
    def technologies_model(self):
        """Test the technologies model"""
        tech = Technologies.objects.create(
            name='Django',
            more_info="https://www.djangoproject.com/"
        )
        self.assertEqual(tech.name, 'Django')
        self.assertEqual(tech.more_info, 'https://www.djangoproject.com/')

    def developmenttech_model(self):
        """Test relationship between development projects and tech used"""
        dev = Development.objects.get(name='Development Story')
        tech = Technologies.objects.get(name="Django")
        devtech = DevelopmentTech.objects.create(
            development=dev,
            tech=tech
        )
        self.assertEqual(str(devtech), 'Development Story - Django')

    def get_project_request(self):
        """Test the response from the get request for
        more information on a project"""
        response = self.client.get('/dev/get-project/1')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Development Story', response.content)
        self.assertIn(b'Here&#x27;s what I built', response.content)

    def test_in_order(self):
        self.development_model()
        self.technologies_model()
        self.developmenttech_model()
        self.get_project_request()
