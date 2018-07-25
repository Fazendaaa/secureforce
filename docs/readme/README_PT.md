# Secure Force

<div align="center">
    <br>
    <br>
    <img src="../../others/img/logo/logo.png" height=260>
    <br>

[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg?longCache=true&style=for-the-badge)](https://saythanks.io/to/Fazendaaa)

[![English README](https://img.shields.io/badge/Language-EN-blue.svg?longCache=true&style=for-the-badge)](./README.md)
[![Portuguese README](https://img.shields.io/badge/Linguagem-PT-green.svg?longCache=true&style=for-the-badge)](./docs/readme/README_PT.md)

</div>

## Sobre
Código para um processo seletivo que consta de duas aplicações básicas:
* [API](#api)
* [Worker](#worker)

# API
Criar uma API em [node.js](http://nodejs.org/) que deve funcionar na porta 3001, salvando as imagens enviadas.

## GET
O método deverá servir o seguintes campos:

```ts
{
    user: string;
    email: string;
    image: Buffer;
}
```

## POST
O método deve receber os dados desse formulário e salvar a imagem no dir **img**.

# Worker
Consumindo, através do [redis](https://redis.io/), o e-mail da API, se deve enviar um email avisando que o arquivo será processado.

O [Ethereal](https://ethereal.email/) é o serviço de SMTP email escolhido para a tarefa.

# Instalação
Os projetos dependem de [Node](https://nodejs.org/) e do [npm](https://www.npmjs.com/) para funcionar, então basta instalar eles e rodar em seguida no diretório contendo os arquivos o seguinte comando no terminal:

```bash
npm install
```

Se algum erro for reportado durante este processo relacionado com dependências utilizadas e você gostaria de ver como lidar com elas, leia mais em [Segurança](#Segurança).

# Como utilizar

Para rodar os programas, antes de tudo, compile os arquivos, uma vez que foram feitos com TS e devem rodar JS; para tal, abrar seu terminal no diretório raíz deste projeto e digite:

```bash
npm run build
```

## API
Caso queira rodar o projeto de API basta rodar:

```bash
npm run api
```

## Worker
Caso queira rodar o projeto de Worker basta rodar:

```bash
npm run worker
```

Apenas um aviso, se lembre de iniciar o redis antes de rodar:

```bash
redis-server
```

# Construído com
* [cors](https://www.npmjs.com/package/cors)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [express](https://www.npmjs.com/package/express)
* [multer](https://www.npmjs.com/package/multer)
* [nodemailer](https://www.npmjs.com/package/nodemailer)
* [redis](https://www.npmjs.com/package/redis)

## Código
Simples [TS](http://typescriptlang.org/) com o padrão de escrita [immutable](https://github.com/jonaskello/tslint-immutable) como base. Como há a utilização do TS em si em ambos os projetos, o arquivo _.tsconfig.json_ foi configurado para aceitar apenas o formato [ECMA Script 6](http://es6-features.org).

Adicionei também uma revisão de código através do [Codacy](http://codacy.com/).

## Testes
Testes foram escritos com [Jest](https://facebook.github.io/jest/) atavés do pacote [ts-jest](https://www.npmjs.com/package/ts-jest) e há uma integração com [Travis CI](http://travis-ci.org/) e [Codecov](https://codecov.io/). Para rodar todos os testes basta rodar:

Para rodar os testes não precisa "buildar" antes os arquivos de TS para JS, apenas os TS serão necessários.

```bash
npm test
```

Se algum erro for reportado durante este processo relacionado com dependências utilizadas e você gostaria de ver como lidar com elas, leia mais em [Segurança](#Segurança).

# Segurança
Eu adicinei uma integração com [Snyk](https://snyk.io/) para garantir que todas as dependências utilizadas não tenham erros ou bugs não concertados antes da Integração Contínua (CI) para garantir o Desenvolvimento Contínuo (CD).

## Errors/Bugs em Dependência
Se o Snyk reportar algum error ou bugs que podem ser corrigidos, apenas siga os passos da ferramenta em como lidar com tais problemas -- para mais ajuda, leia a [documentação](https://github.com/snyk/snyk#cli) deles.

# Contribuindo
Converse comigo através de uma _issue_ sobre isso e analizarei o pedido.

# Versionamento
Não há nenhum sistema de versionamento a ser utilizado devido a natureza efêmera do projeto e devido a não utilização de bibliotecas com uma alta taxa de atualizações.

# Autores
* Apenas [eu](https://github.com/Fazendaaa).

# Licença
Como muitos projetos open source, a licença MIT é utilizada, mais sobre isso em [LICENSE](https://github.com/Fazendaaa/secureforce/blob/master/LICENSE).
