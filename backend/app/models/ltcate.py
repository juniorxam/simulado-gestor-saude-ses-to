from datetime import datetime
from app import db

class LTCAT(db.Model):
    __tablename__ = 'ltcats'
    
    id = db.Column(db.Integer, primary_key=True)
    servidor_id = db.Column(db.Integer, db.ForeignKey('servidores.id'), nullable=False)
    numero = db.Column(db.String(50), unique=True, nullable=False)
    data_emissao = db.Column(db.Date, nullable=False)
    data_validade = db.Column(db.Date, nullable=False)
    tipo_risco = db.Column(db.String(100))
    nivel_risco = db.Column(db.String(20))  # baixo, medio, alto
    arquivo = db.Column(db.String(200))
    observacoes = db.Column(db.Text)
    status = db.Column(db.String(20), default='ativo')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)