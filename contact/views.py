from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.core.mail import send_mail
from .serializers import FormSerializer

class SendMessage(APIView):
    def post(self, request):
        serializer = FormSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.data['name']
            email = serializer.data['email']
            subject = serializer.data['subject']
            message = serializer.data['message']
            message += f'\n \n \n From: {name} \n Email: {email}'
            send_mail(
                subject=subject,
                message=message,
                from_email=email,
                recipient_list=['matt@mspe.me',],
                fail_silently=False
            )
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
