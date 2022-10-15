
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('content_ui', '0003_alter_footer_copyright_alter_footer_email_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Footer',
        ),
    ]
