from datetime import datetime
from app import db

class DAP(db.Model):
    __tablename__ = 'daps'
    
    id = db.Column(db.Integer, primary_key=True)
    servidor_id = db.Column(db.Integer, db.ForeignKey('servidores.id'), nullable=False)
    numero = db.Column(db.String(50), unique=True, nullable=False)
    data_emissao = db.Column(db.Date, nullable=False)
    data_validade = db.Column(db.Date, nullable=False)
    tipo = db.Column(db.String(50))  # civil, militar, etc
    orgao_emissor = db.Column(db.String(100))
    arquivo = db.Column(db.String(200))  # caminho do arquivo
    observacoes = db.Column(db.Text)
    status = db.Column(db.String(20), default='ativo')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)