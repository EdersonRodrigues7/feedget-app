## Feedget App
![Badge MIT License](https://img.shields.io/github/license/EdersonRodrigues7/feedget-app) ![Badge em desenvolvimento](https://img.shields.io/badge/status-em%20desenvolvimento-green)

![Capa](./docs/images/feedget-capa.png)

## 💻 Projeto

Aplicação desenvolvida com o objetivo de fornecer um formulário simples de feedback para produtos e serviços em ambientes web e mobile. Além do comentário por escrito, o cliente pode tirar um screenshot da tela, enviando automaticamente as informaçõesao banco de dados e ao e-mail do responsável pelo produto/serviço.

Projeto desenvolvido durante a Next Level Week, evento organizado pela [Rocketseat](https://github.com/rocketseat-education/).

Link do projeto: [Feedget App](https://feedget-app-weld.vercel.app/).

## 💡 Features

- 👍 Envio rápido e intuitivo de feedback por parte do usuário;
- 📷 Botão personalizado para o envio de screenshots;
- 📩 Recebimento das informações do feedback pelo dono da aplicação por e-mail.

## 👨🏽‍💻 Tecnologias

- ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
- <img src="https://icons-for-free.com/download-icon-vscode+icons+type+light+prisma-1324451365475006031_256.png" width=20 height=20/> <strong>Prisma</strong>
- <img src="https://cdn.iconscout.com/icon/free/png-256/jest-3521517-2945020.png" width=20 height=20/> <strong>Jest</strong>
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

Mais informações sobre o uso de cada ferramenta na [documentação](./docs/feedget-documentation.md).

## ⚙ Executando o projeto

Clone o repositório e acesse a pasta:

```cl
$ git clone https://github.com/EdersonRodrigues7/feedget-app
$ cd feedget-app
```

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, faça a migração do banco de dados (criação das tabelas) e inicie o projeto em ambiente de desenvolvimento.
Usando npm:

```cl
$ npm install
$ npm prisma migrate dev
$ npm run dev
```

Usando yarn:

```cl
$ yarn install
$ yarn prisma migrate dev
$ yarn run dev
```

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/AIsF3iohbA66ROHjmNArvv/Feedget-App?node-id=142%3A1270). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

<br />
