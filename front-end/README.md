# Front-End

Este é o aplicativo front-end desenvolvido com **Next.js 15**, **Axios**, **Styled-Components**, **TypeScript**, **ESLint**, **Formik** e **Yup**. Ele se comunica com uma API backend e oferece uma interface interativa e responsiva.

## Tecnologias

- **Next.js 15**: Framework React para renderização do lado do servidor e navegação baseada em páginas.
- **Axios**: Cliente HTTP para fazer requisições à API.
- **Styled-Components**: Biblioteca para estilizar componentes utilizando CSS-in-JS.
- **TypeScript**: Superset do JavaScript para adicionar tipagem estática.
- **ESLint**: Ferramenta para manter a qualidade e a consistência do código.
- **Formik**: Biblioteca para gerenciar formulários.
- **Yup**: Validador de schema para objetos JavaScript, utilizado junto ao Formik.

## Pré-requisitos

Certifique-se de ter o **Node.js** e **npm** instalados. Se não os tiver, você pode instalá-los a partir do [site oficial do Node.js](https://nodejs.org/).

## Instalação após clonagem do repositório


### Passo 1: Instale as dependências
npm install
# ou
npm i

### Passo 2: Crie um arquivo .env
No diretório raiz do seu projeto, crie um arquivo .env com a chave da sua API. O conteúdo deve ser algo como:
api=http://sua-api-url-aqui

### Passo 3: Inicie o servidor de desenvolvimento
npm run dev

Isso iniciará o servidor de desenvolvimento, e você poderá acessar o aplicativo em: http://localhost:3030
