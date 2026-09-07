from flask_wtf import FlaskForm
from wtforms import StringField, DateField, SubmitField
from wtforms.validators import DataRequired, Email, Length, Optional

class ServidorForm(FlaskForm):
    nome = StringField('Nome', validators=[DataRequired(), Length(max=200)])
    cpf = StringField('CPF', validators=[DataRequired(), Length(min=11, max=14)])
    rg = StringField('RG', validators=[Optional()])
    matricula = StringField('Matrícula', validators=[DataRequired(), Length(max=50)])
    data_nascimento = DateField('Data de Nascimento', validators=[Optional()])
    cargo = StringField('Cargo', validators=[Optional(), Length(max=100)])
    funcao = StringField('Função', validators=[Optional(), Length(max=100)])
    setor = StringField('Setor', validators=[Optional(), Length(max=100)])
    email = StringField('Email', validators=[Optional(), Email(), Length(max=120)])
    telefone = StringField('Telefone', validators=[Optional(), Length(max=20)])
    data_admissao = DateField('Data de Admissão', validators=[Optional()])
    submit = SubmitField('Salvar')