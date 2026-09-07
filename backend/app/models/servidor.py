from datetime import datetime
from app import db

class Servidor(db.Model):
    __tablename__ = 'servidores'
    
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(200), nullable=False)
    cpf = db.Column(db.String(14), unique=True, nullable=False)
    rg = db.Column(db.String(20))
    matricula = db.Column(db.String(50), unique=True, nullable=False)
    data_nascimento = db.Column(db.Date)
    cargo = db.Column(db.String(100))
    funcao = db.Column(db.String(100))
    setor = db.Column(db.String(100))
    email = db.Column(db.String(120))
    telefone = db.Column(db.String(20))
    data_admissao = db.Column(db.Date)
    status = db.Column(db.String(20), default='ativo')  # ativo, inativo, afastado
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relacionamentos
    daps = db.relationship('DAP', backref='servidor', lazy=True)
    ppps = db.relationship('PPP', backref='servidor', lazy=True)
    ltcats = db.relationship('LTCAT', backref='servidor', lazy=True)
    afastamentos = db.relationship('Afastamento', backref='servidor', lazy=True)
    exames = db.relationship('Exame', backref='servidor', lazy=True)
    eventos = db.relationship('Evento', backref='servidor', lazy=True)
    
    def __repr__(self):
        return f'<Servidor {self.nome}>'