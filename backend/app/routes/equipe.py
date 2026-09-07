from flask import Blueprint, render_template, request, flash, redirect, url_for
from flask_login import login_required, current_user
from app import db
from app.models import Servidor
from app.forms.equipe import ServidorForm

equipe_bp = Blueprint('equipe', __name__, url_prefix='/equipe')

@equipe_bp.route('/')
@login_required
def listar():
    servidores = Servidor.query.all()
    return render_template('equipe/listar.html', servidores=servidores)

@equipe_bp.route('/cadastrar', methods=['GET', 'POST'])
@login_required
def cadastrar():
    form = ServidorForm()
    if form.validate_on_submit():
        servidor = Servidor(
            nome=form.nome.data,
            cpf=form.cpf.data,
            rg=form.rg.data,
            matricula=form.matricula.data,
            data_nascimento=form.data_nascimento.data,
            cargo=form.cargo.data,
            funcao=form.funcao.data,
            setor=form.setor.data,
            email=form.email.data,
            telefone=form.telefone.data,
            data_admissao=form.data_admissao.data
        )
        db.session.add(servidor)
        db.session.commit()
        flash('Servidor cadastrado com sucesso!', 'success')
        return redirect(url_for('equipe.listar'))
    return render_template('equipe/cadastrar.html', form=form)