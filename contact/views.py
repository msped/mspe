from django.shortcuts import redirect, render
from django.views.generic import View
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
            message =+ f'\n\n\n From: {name}'
            send_mail(
                subject=subject,
                message=message,
                from_email=email,
                recipient_list=['matt@mspe.me',],
                fail_silently=True
            )
        # Leaving until deployment to create gsuite email
        print(form.errors)
        return redirect('contact')