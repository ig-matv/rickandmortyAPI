# API com Playwright

Projeto de testes automatizados para a API pública do Rick and Morty usando Playwright 


## Funcionalidades dos testes

O arquivo de testes valida os seguintes endpoints da API do Rick and Morty:

1. `GET /api/character` - busca lista de personagens.
2. `GET /api/character/1` - busca personagem específico.
3. `GET /api/location` - busca lista de localizações.
4. `GET /api/location/1` - busca localização específica.
5. `GET /api/episode` - busca lista de episódios.
6. `GET /api/episode/1` - busca episódio específico.
7. `GET /api` - valida os endpoints disponíveis.

## Relatório de testes

Após a execução, o Playwright gera um relatório HTML em:

```text
playwright-report/index.html
```

Você pode abrir esse arquivo no navegador para revisar resultados detalhados.



