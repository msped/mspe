from django.shortcuts import render

# Create your views here.

def handler400View(request, exception):
    return render(request, "400.html", status=400)

def handler403View(request, exception):
    return render(request, "403.html", status=403)

def handler404View(request, exception):
    return render(request, "404.html", status=404)

def handler500View(request, *args, **argv):
    return render(request, "500.html", status=500)
