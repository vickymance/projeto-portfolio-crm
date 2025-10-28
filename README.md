# Projeto: API Rest - Carteira de Corretor de Imóveis

## Descrição
Esta API permite o acompanhamento de clientes de uma carteira de corretor de imóveis, possibilitando o registro de corretores, clientes, imóveis, regiões de interesse e atualizações de contato (follow up). O sistema utiliza autenticação JWT e separa permissões entre corretores (acesso total) e clientes (apenas consulta de imóveis).

## Funcionalidades
- Registro e login de corretores
- Registro e login de clientes
- Cadastro de imóveis disponíveis
- Registro de regiões de interesse dos clientes
- Registro de atualizações de contato (follow up) com clientes
- Consulta de imóveis disponíveis (clientes e corretores)
- Documentação Swagger disponível em `resources/swagger.yaml`

## Estrutura do Projeto
- `src/routes`: Definição das rotas da API
- `src/controllers`: Lógica dos controllers
- `src/services`: Regras de negócio
- `src/models`: Modelos de dados (em memória)
- `src/middleware`: Middlewares de autenticação e autorização
- `resources`: Documentação Swagger

## Autenticação
- JWT via middleware
- Corretores: acesso total
- Clientes: apenas consulta de imóveis

## Como executar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie a API:
   ```bash
   npm start
   ```
3. Acesse a documentação Swagger em `/docs` (após rodar a API)

## Tecnologias
- Node.js
- Express
- JWT
- Swagger (OpenAPI)

## Observações
- O banco de dados é em memória (os dados são perdidos ao reiniciar a aplicação).
