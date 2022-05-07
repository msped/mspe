from rest_framework import serializers

from .models import Development, DevelopmentTech

class DevelopmentTechSerializer(serializers.ModelSerializer):
    name = serializers.ReadOnlyField(source="tech.name")
    info = serializers.ReadOnlyField(source="tech.more_info")

    class Meta:
        model = DevelopmentTech
        fields = [
            'name',
            'info'
        ]

class DevelopmentListSerializer(serializers.ModelSerializer):
    tech = serializers.SerializerMethodField()

    def get_tech(self, obj):
        tech = DevelopmentTech.objects.filter(development_id=obj.id)
        serializer = DevelopmentTechSerializer(tech, many=True)
        return serializer.data

    class Meta:
        model = Development
        fields = [
            'id',
            'name',
            'logo',
            'description',
            'url',
            'github_link',
            'created_date',
            'tech'
        ]
