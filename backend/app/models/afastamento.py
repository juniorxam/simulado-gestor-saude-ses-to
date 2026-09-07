from datetime import datetime
from app import db

class Afastamento(db.Model):
    __tablename__ = 'afastamentos'
    
    id = db.Column(db.Integer, primary_key=True)
    servidor_id = db.Column(db.Integer, db.ForeignKey('servidores.id'), nullable=False)
    tipo = db.Column(db.String(50), nullable=False)  # ferias, licenca_medica, etc
    data_inicio = db.Column(db.Date, nullable=False)
    data_fim = db.Column(db.Date, nullable=False)
    motivo = db.Column(db.Text)
    documento = db.Column(db.String(200))
    status = db.Column(db.String(20), default='ativo')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)