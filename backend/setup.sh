# Criar e ativar ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate  # Windows

# Instalar dependências
pip install -r requirements.txt

# Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com as configurações do PostgreSQL

# Inicializar migrações
flask db init
flask db migrate -m "Initial migration"
flask db upgrade

# Executar aplicação
flask run