
# Proteus.lab Frontend

Este repositório contém a aplicação frontend em React para a plataforma Proteus.lab de serviços de impressão 3D.

## Visão Geral

Proteus.lab é uma plataforma de e-commerce especializada em serviços de impressão 3D, oferecendo:

- Catálogo de produtos e serviços personalizados
- Sistema de orçamentos para modelos 3D
- Carrinho de compras e checkout
- Exibição de portfólio com integração do Instagram
- Painel administrativo para gerenciamento de conteúdo

## Tecnologias Utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router para navegação
- React Query para gerenciamento de estado e requisições
- Componentes Shadcn/UI

## Requisitos

- Node.js 18 ou superior
- npm ou yarn

## Desenvolvimento Local

1. Clone o repositório:
   ```bash
   git clone https://github.com/cscheidegger/FrontMVP.git
   cd FrontMVP
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

3. Crie um arquivo `.env.local` com as variáveis de ambiente necessárias:
   ```
   VITE_API_URL=http://localhost:8000/api
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Acesse a aplicação em [http://localhost:5173](http://localhost:5173)

## Build para Produção

1. Gere um build de produção:
   ```bash
   npm run build
   # ou
   yarn build
   ```

2. Os arquivos serão gerados na pasta `dist`.

## Docker

Este projeto inclui um Dockerfile para construir e executar a aplicação em um contêiner.

1. Construa a imagem:
   ```bash
   docker build -t proteus-frontend .
   ```

2. Execute o contêiner:
   ```bash
   docker run -p 5173:80 proteus-frontend
   ```

3. Acesse a aplicação em [http://localhost:5173](http://localhost:5173)

## Estrutura do Projeto

```
src/
├── components/    # Componentes reutilizáveis
├── contexts/      # Contextos React (carrinho, autenticação, etc.)
├── hooks/         # Hooks personalizados
├── pages/         # Páginas da aplicação
├── services/      # Serviços de API
└── types/         # Definições de tipos TypeScript
```

## API Endpoints Utilizados

A aplicação se comunica com o backend através dos seguintes endpoints:

- `GET /api/products` - Obter lista de produtos
- `GET /api/products/{id}` - Obter detalhes de um produto
- `POST /api/orders` - Criar um novo pedido
- `PUT /api/orders/{id}` - Atualizar um pedido existente
- `DELETE /api/orders/{id}` - Cancelar um pedido
- `GET /api/instagram/feed` - Obter feed do Instagram para o portfólio

## Integração DevOps

Este projeto frontend é parte de uma arquitetura maior, orquestrada pelo repositório [devopsMVP](https://github.com/cscheidegger/devopsMVP), que integra:

- Frontend (este repositório)
- Backend API ([APIMVP](https://github.com/cscheidegger/APIMVP))
- Banco de dados PostgreSQL
- Cache Redis
- Serviço de integração com Instagram

## Licença

[MIT](LICENSE)
