# Generated by Django 4.1.3 on 2022-12-01 11:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0002_artist_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='product/images')),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='gallery.product')),
            ],
        ),
        migrations.CreateModel(
            name='ArtistImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='artist/images')),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='gallery.artist')),
            ],
        ),
    ]
