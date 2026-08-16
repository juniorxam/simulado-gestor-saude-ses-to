# Migração para autenticação e banco em nuvem

- [x] Ler a documentação do projeto full-stack e definir o modelo de dados.
- [x] Adicionar o recurso full-stack com autenticação, backend e banco.
- [x] Criar o modelo de progresso por usuário e as operações de leitura e gravação.
- [x] Integrar login, logout e carregamento do progresso no simulador.
- [x] Migrar o progresso existente do localStorage para a conta do usuário.
- [x] Implementar sincronização segura entre dispositivos.
- [x] Testar sessão, isolamento de dados e recuperação após recarregar.
- [x] Criar checkpoint e orientar o usuário sobre o primeiro acesso.

- [x] Tornar a sincronização em nuvem resistente a conflitos e falhas: comparar updatedAt, evitar sobrescrever remoto quando o get falhar e exibir estado/erro de sincronização.
- [x] Adicionar testes cobrindo sessão autenticada, isolamento por usuário, restauração após reload e cenário de sincronização entre dispositivos/logins distintos.

- [x] Salvar um novo checkpoint após a integração de autenticação/nuvem e entregar instruções de primeiro login e migração.
- [x] Exibir indicador visível de sincronização no cabeçalho e tratar erro no primeiro salvamento quando não houver progresso remoto.
- [x] Adicionar teste de conflito entre duas sessões do mesmo usuário usando precedência baseada em updatedAt.

- [ ] Salvar um novo checkpoint após a integração de autenticação/nuvem.
- [ ] Entregar ao usuário instruções de primeiro login, migração do progresso local e limitações da sincronização.
