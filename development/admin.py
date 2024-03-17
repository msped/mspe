from django.contrib import admin
from .models import Development, DevelopmentTech, Technologies

# Register your models here.

class DevelopmentTechInlineAdmin(admin.TabularInline):
    model = DevelopmentTech

@admin.register(Development)
class DevelopmentAdmin(admin.ModelAdmin):
    inlines = [DevelopmentTechInlineAdmin]

    class Meta:
        model = Development

admin.site.register(Technologies)
admin.site.register(DevelopmentTech)
