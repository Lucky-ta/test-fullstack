# Back-End

Este é o back-end do aplicativo, desenvolvido com **Express**, **SQLite** e **TypeScript**. Ele fornece rotas para gerenciar clientes e status, utilizando um banco de dados SQLite.

## Tecnologias

- **Express**: Framework web minimalista para Node.js.
- **SQLite**: Banco de dados leve e fácil de configurar.
- **TypeScript**: Superset do JavaScript para adicionar tipagem estática.
- **CORS**: Middleware para gerenciar solicitações de diferentes origens.
- **SQLite3**: Interface de driver para o SQLite.

## Pré-requisitos

Certifique-se de ter o **Node.js** e **npm** instalados. Se não os tiver, você pode instalá-los a partir do [site oficial do Node.js](https://nodejs.org/).

## Instalação após clonagem do repositório

### Passo 1: Instale as dependências
npm install
# ou
npm i


### Passo 2: Inicie o servidor
npm run dev
Isso iniciará o servidor de desenvolvimento, e você poderá acessar as rotas da API em: http://localhost:3000


## Rotas Disponíveis

### GET /client:
Retorna todos os clientes com seus dados e status.

[
  {
    "id": 1,
    "name": "João Silva",
    "email": "joao@example.com",
    "cpf": "123.456.789-00",
    "phone": "(11) 91234-5678",
    "status": {
      "id": 1,
      "text": "Ativo",
      "color": "green"
    }
  },
  ...
]


### GET /client/:id:
Retorna os dados de um cliente específico pelo ID.

{
  "id": 1,
  "name": "João Silva",
  "email": "joao@example.com",
  "cpf": "123.456.789-00",
  "phone": "(11) 91234-5678",
  "status": {
    "id": 1,
    "text": "Ativo",
    "color": "green"
  }
}

### POST /client:
Cria um novo cliente. É necessário enviar no corpo da requisição os seguintes dados:

{
  "name": "João Silva",
  "email": "joao@example.com",
  "cpf": "123.456.789-00",
  "phone": "(11) 91234-5678",
  "statusId": 1
}

Exemplo de resposta:
{
  "message": "Usuário criado com sucesso!"
}


### PUT /client/:id:
Atualiza os dados de um cliente específico. É necessário enviar no corpo da requisição os seguintes dados:

{
  "name": "João Silva",
  "email": "joao@example.com",
  "cpf": "123.456.789-00",
  "phone": "(11) 91234-5678",
  "statusId": 1
}

Exemplo de resposta:

{
  "message": "Cliente atualizado com sucesso!"
}


### GET /status:
Retorna todos os status disponíveis no sistema.

Exemplo de resposta:

[
  {
    "id": 1,
    "text": "Ativo",
    "color": "green"
  },
  {
    "id": 2,
    "text": "Inativo",
    "color": "red"
  },
  ...
]