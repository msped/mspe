from django.shortcuts import render
from django.views.generic import View
from django.http import HttpResponse
from django.template.loader import render_to_string
from django.contrib import messages
from django.core.mail import send_mail
from .forms import ContactForm

# Create your views here.

class ContactView(View):
    """CBV for contact page"""
    template_name = "contact.html"
    def get(self, request):
        context = {'form': ContactForm}
        return render(request, self.template_name, context)

    def post(self, request):
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            message += f'\n \n \n From: {name} \n Email: {email}'
            send_mail(
                subject=subject,
                message=message,
                from_email=email,
                recipient_list=['matt@mspe.me',],
                fail_silently=False
            )
            template = render_to_string('message_sent.html')
            
        else:
            name = form['name'].value()
            email = form['email'].value()
            subject = form['subject'].value()
            message = form['message'].value()
            template = render_to_string(
                'form_with_errors.html',
                request=request,
                context={
                    'form': ContactForm(initial={
                        'name': name,
                        'email': email,
                        'subject': subject,
                        'message': message
                    }),
                    'form': form
                }
            )

        return HttpResponse(template)