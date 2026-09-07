# Backend Flask

Este diretório contém o sistema Flask organizado a partir dos arquivos exportados da conversa do DeepSeek. O frontend TypeScript/React existente no repositório foi preservado na raiz.

## Execução local

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Ajuste DATABASE_URL e SECRET_KEY no .env
python run.py
```

Para uma execução rápida sem PostgreSQL, use `DATABASE_URL=sqlite:///test.db` apenas em ambiente local de teste.

## Testes

```bash
cd backend
python tests/smoke_test.py
```

## Produção

O ponto de entrada WSGI é `run:app`. Um servidor compatível, como Gunicorn, pode iniciar o backend com:

```bash
gunicorn --bind 0.0.0.0:${PORT:-8000} run:app
```

Antes de publicar, altere a senha administrativa padrão criada pelo código e configure uma `SECRET_KEY` forte e uma URL PostgreSQL real.
