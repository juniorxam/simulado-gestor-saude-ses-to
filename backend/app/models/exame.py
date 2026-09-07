from datetime import datetime
from app import db

class Exame(db.Model):
    __tablename__ = 'exames'
    
    id = db.Column(db.Integer, primary_key=True)
    servidor_id = db.Column(db.Integer, db.ForeignKey('servidores.id'), nullable=False)
    tipo = db.Column(db.String(50), nullable=False)  # admissional, periodico, etc
    data_realizacao = db.Column(db.Date, nullable=False)
    data_validade = db.Column(db.Date)
    medico = db.Column(db.String(100))
    resultado = db.Column(db.String(50))  # apto, inapto, etc
    arquivo = db.Column(db.String(200))
    observacoes = db.Column(db.Text)
    status = db.Column(db.String(20), default='ativo')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)