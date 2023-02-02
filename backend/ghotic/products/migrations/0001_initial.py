# Generated by Django 4.1.5 on 2023-02-02 17:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('artists', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('images', models.ImageField(upload_to='product/images')),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='productbyartist', to='artists.artist')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='products.productcategory')),
                ('likes', models.ManyToManyField(blank=True, default=None, related_name='product_like', to='artists.artist')),
            ],
        ),
    ]
