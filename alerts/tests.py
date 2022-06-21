import json
from rest_framework.test import APITestCase
from rest_framework import status
from .models import Alert

# Create your tests here.

class TestAlert(APITestCase):

    def setUp(self):
        alert_1 = Alert.objects.create(
            id=1,
            message='This is a test.',
            severity='2',
            active=True
        )
        alert_1.save()

    def test_alert_model_str(self):
        alert_2 = Alert.objects.create(
            id=2,
            message='I got the job!',
            severity='4',
            active=False
        )
        alert_2.save()
        self.assertEqual(
            '4 - I got the job!',
            str(alert_2)
        )

    def test_get_alert(self):
        response = self.client.get("/api/alerts/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            json.loads(response.content),
            [{
                'id': 1,
                'severity_display': 'warning',
                'message': 'This is a test.'
            }]
        )

    def test_204_no_content(self):
        alert_1 = Alert.objects.get(active=True)
        alert_1.active = False
        alert_1.save()
        response = self.client.get("/api/alerts/")
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
