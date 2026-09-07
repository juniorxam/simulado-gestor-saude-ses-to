from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from dotenv import load_dotenv
import os

load_dotenv()

db = SQLAlchemy()
migrate = Migrate()
login_manager = LoginManager()
login_manager.login_view = 'auth.login'
login_manager.login_message_category = 'info'

def create_app(config_name='default'):
    app = Flask(__name__)
    
    # Carregar configuração
    from app.config import config
    app.config.from_object(config[config_name])
    
    # Inicializar extensões
    db.init_app(app)
    migrate.init_app(app, db)
    login_manager.init_app(app)
    
    # Registrar blueprints
    from app.routes import equipe_bp, auth_bp, main_bp
    app.register_blueprint(equipe_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(main_bp)
    
    # Criar tabelas
    with app.app_context():
        db.create_all()
        
        # Criar usuário admin se não existir
        from app.models import Usuario
        admin = Usuario.query.filter_by(email='admin@admin.com').first()
        if not admin:
            admin = Usuario(
                nome='Administrador',
                email='admin@admin.com',
                role='admin'
            )
            admin.set_password('admin123')
            db.session.add(admin)
            db.session.commit()
    
    return app