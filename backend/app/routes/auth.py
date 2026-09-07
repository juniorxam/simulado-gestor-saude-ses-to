from flask import Blueprint, render_template, redirect, url_for, flash, request
from flask_login import login_user, logout_user, login_required, current_user
from app import db
from app.models import Usuario
from app.forms.auth import LoginForm, RegistroForm

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

@auth_bp.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('main.index'))
    
    form = LoginForm()
    if form.validate_on_submit():
        usuario = Usuario.query.filter_by(email=form.email.data).first()
        if usuario and usuario.check_password(form.senha.data):
            login_user(usuario, remember=form.remember.data)
            usuario.ultimo_acesso = db.func.now()
            db.session.commit()
            next_page = request.args.get('next')
            flash('Login realizado com sucesso!', 'success')
            return redirect(next_page) if next_page else redirect(url_for('main.index'))
        flash('Email ou senha inválidos.', 'danger')
    return render_template('auth/login.html', form=form)

@auth_bp.route('/logout')
@login_required
def logout():
    logout_user()
    flash('Logout realizado com sucesso.', 'info')
    return redirect(url_for('auth.login'))

@auth_bp.route('/registro', methods=['GET', 'POST'])
def registro():
    if current_user.is_authenticated:
        return redirect(url_for('main.index'))
    
    form = RegistroForm()
    if form.validate_on_submit():
        usuario = Usuario(
            nome=form.nome.data,
            email=form.email.data
        )
        usuario.set_password(form.senha.data)
        db.session.add(usuario)
        db.session.commit()
        flash('Registro realizado com sucesso!', 'success')
        return redirect(url_for('auth.login'))
    return render_template('auth/registro.html', form=form)