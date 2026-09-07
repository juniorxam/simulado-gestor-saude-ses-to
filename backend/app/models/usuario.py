from datetime import datetime
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from app import db, login_manager

class UserRole:
    ADMIN = 'admin'
    GESTOR = 'gestor'
    TECNICO = 'tecnico'
    USUARIO = 'usuario'
    
    ROLES = {
        ADMIN: 'Administrador',
        GESTOR: 'Gestor',
        TECNICO: 'Técnico',
        USUARIO: 'Usuário'
    }
    
    PERMISSIONS = {
        ADMIN: ['all'],
        GESTOR: ['view_all', 'create', 'edit', 'delete'],
        TECNICO: ['view_all', 'create', 'edit'],
        USUARIO: ['view_own']
    }

class Usuario(UserMixin, db.Model):
    __tablename__ = 'usuarios'
    
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    senha_hash = db.Column(db.String(128), nullable=False)
    role = db.Column(db.String(20), default=UserRole.USUARIO)
    ativo = db.Column(db.Boolean, default=True)
    ultimo_acesso = db.Column(db.DateTime)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def set_password(self, password):
        self.senha_hash = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.senha_hash, password)
    
    def has_permission(self, permission):
        if self.role == UserRole.ADMIN:
            return True
        return permission in UserRole.PERMISSIONS.get(self.role, [])
    
    def __repr__(self):
        return f'<Usuario {self.nome}>'

@login_manager.user_loader
def load_user(user_id):
    return Usuario.query.get(int(user_id))