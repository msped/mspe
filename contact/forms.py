from django import forms 
from captcha.fields import CaptchaField 

class ContactForm(forms.Form):
    name = forms.CharField(max_length=75, required=True)
    email = forms.EmailField(required=True)
    subject = forms.CharField(max_length=50, required=True)
    message = forms.CharField(required=True, widget=forms.Textarea)
    captcha = CaptchaField()