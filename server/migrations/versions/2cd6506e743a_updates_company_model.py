"""Updates Company model

Revision ID: 2cd6506e743a
Revises: b0cd6f933466
Create Date: 2024-08-24 15:20:30.190703

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2cd6506e743a'
down_revision = 'b0cd6f933466'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('companies', schema=None) as batch_op:
        batch_op.add_column(sa.Column('mission_statement', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('companies', schema=None) as batch_op:
        batch_op.drop_column('mission_statement')

    # ### end Alembic commands ###
