import json
from unittest.mock import patch, MagicMock
from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from .apps import OnlinecvConfig
from .models import Verification, Resume

# Create your tests here.

class TestOnlineCV(TestCase):
    def setUp(self):
        self.client = APIClient()
        Resume.objects.create(
            file=SimpleUploadedFile(
                'CV.pdf',
                b'test file content'
            )
        )


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
        res = self.client.get('/api/cv')
        self.assertEqual(res.status_code, 200)
        self.assertEqual(
            json.loads(res.content),
            {
                'code': 'Hood'
            }
        )

    @patch.object(Resume.objects, 'get')
    def test_download_resume_success(self, mock_get_resume):
        resume_mock = MagicMock()
        resume_mock.file.open.return_value = b'test file content'
        resume_mock.file.size = 1024
        mock_get_resume.return_value = resume_mock
        url = reverse('download')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)

    def test_download_resume_does_exist(self):
        resume = Resume.objects.get(is_active=True)
        resume.is_active = False
        resume.save()
        response = self.client.get('/api/cv/download')
        self.assertEqual(response.status_code, 404)

    def test(self):
        self.app_name()
        self.verfication_model()
        self.get_code()
