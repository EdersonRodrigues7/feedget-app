## Backend (Servidor + Banco de Dados)

Para a construção do Backend da aplicação foram usadas as seguintes tecnologias:

- NodeJs;
- TypeScript;
- Prisma;
- Express;
- PostgreSQL

### TypeScript

O Typescript foi utilizado para ajudar na tipagem das variáveis e na criação de interfaces. Além disso, é importante ressaltar que a configuração permaneceu simples e próxima do padrão, com pequenas adaptações ao projeto. Segue abaixo os trechos mais relevantes:

```cl
// tsconfig.json
  "target": "es2020" //O bundle irá traduzir Ts para Js no formato Es2020. Trocar para versões mais antigas conforme a necessidade!
  "module": "commonjs"
  "rootDir": "./src" // diretório base com os arquivos a serem lidos e convertidos
  "outDir": "./dist" // endereço onde vai ficar o código JS
  "include": ["src"] // TS ignora arquivos de fora da src, como os arquivos de teste
```

### Servidor com Express

O servidor foi montado com o uso do express para criar rotas e lidar com as chamadas HTTP. No arquivo "server.ts" se encontram a importação do express, o uso da política CORS e a definição da porta que será "ouvida" pelo servidor, ou seja, o endereço que irá receber os pedidos do Frontend (requests).
Sempre que o servidor rodar com sucesso, a mensagem "HTTP server running!" será exibida no console.

### Prisma + PostgreSQL para Banco de Dados

O [Prisma](https://www.prisma.io/) é uma ferramenta de [ORM (Object Relational Mapping)](https://www.devmedia.com.br/orm-object-relational-mapper/19056) que auxilia na integração do projeto com o banco de dados, permitindo o mapeamento dos objetos definidos em linguagem Javascript/TypeScript para as tabelas em SQL.

No arquivo "schema.prisma", estão elencadas as informações sobre o tipo de banco de dados (nesse caso, o PostgreSQL) e quais tabelas (models) devem ser criadas:

```cl
  datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
  }

  model Feedback {
    id         String  @id @default(uuid())
    type       String
    comment    String
    screenshot String?

    @@map("feedbacks")
  }
```

- O "?" indica um campo opcional (nullable)
- @id indica a primary key, ou seja, a coluna de valores únicos
- "uuid" é um modelo de chave única, comum para a atribuição de id's não sequenciais

No Feedget App apenas uma tabela é utilizada para receber o conjunto de feedback que vem do frontend. Também há um arquivo TypeScript para o Prisma emitir um relatório de cada query(operação) que for feita pelo programa:

```cl
  //prisma.ts
  import { PrismaClient } from '@prisma/client';
  export const prisma = new PrismaClient({
    log: ['query']
  });
```

### Rotas com Express + Prisma

### Envio automático de e-mails com Mailtrap

### Testes Unitários com Jest
