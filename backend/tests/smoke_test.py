import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
os.chdir(ROOT)
sys.path.insert(0, str(ROOT))
Path('instance/test.db').unlink(missing_ok=True)
os.environ['DATABASE_URL'] = 'sqlite:///test.db'
os.environ['SECRET_KEY'] = 'ci-secret'

from app import create_app

app = create_app()
app.config.update(TESTING=True, WTF_CSRF_ENABLED=False)
client = app.test_client()

assert client.get('/auth/login').status_code == 200
assert client.get('/').status_code == 302
with client:
    assert client.post('/auth/login', data={'email': 'admin@admin.com', 'senha': 'admin123'}).status_code == 302
    assert client.get('/').status_code == 200
    assert client.get('/equipe/').status_code == 200
    assert client.get('/equipe/cadastrar').status_code == 200

print('Backend smoke test passed')
