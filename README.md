# Secure Force

<div align="center">
    <br>
    <br>
    <img src="./others/img/logo/logo.png" height=260>
    <br>

[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg?longCache=true&style=for-the-badge)](https://saythanks.io/to/Fazendaaa)

[![English README](https://img.shields.io/badge/Language-EN-blue.svg?longCache=true&style=for-the-badge)](./README.md)
[![Portuguese README](https://img.shields.io/badge/Linguagem-PT-green.svg?longCache=true&style=for-the-badge)](./docs/readme/README_PT.md)

</div>

## About
Code for a job application that comprehends the following:
* [API](#api)
* [Worker](#worker)

# API
Make an API in [node.js](http://nodejs.org/) which must work on the 3001 port, saving it all the images sent.

## GET
The method must serve the following data:

```ts
{
    user: string;
    email: string;
    image: Buffer;
}
```

## POST
The method must receive the previous data and then save the image at the __img__ directory.

# Worker
Consuming, trough [redis](https://redis.io/), the e-mail address sent trough the API, sending an e-mail
to this address notifying the address about the currently image processing.

The [Ethereal](https://ethereal.email/) service is used in this task as the SMTP email.

# Installing
The projects are written in [Node](https://nodejs.org/) and the help of [npm](https://www.npmjs.com/) to work. Once they are installed, just open the project directory and run the following command to install the dependencies:

```bash
npm install
```

If you ran into some errors related to package dependencies and want to know how to handle it, read the [Security](#Security) info.

# How to use it
To run the projects, before all of that, compile the files. Since they are written in TypeScript (TS) and Node runs JS to do so, run the following command:

```bash
npm run build
```

## API
To run the API project, just:

```bash
npm run api
```

## Worker
To run the Worker project, just:

```bash
npm run worker
```

Just a little reminder, just remember of starting up the redis before handed:

```bash
redis-server
```

# Built with
* [cors](https://www.npmjs.com/package/cors)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [express](https://www.npmjs.com/package/express)
* [multer](https://www.npmjs.com/package/multer)
* [nodemailer](https://www.npmjs.com/package/nodemailer)
* [redis](https://www.npmjs.com/package/redis)

## Code
Plain and simple [TS](http://typescriptlang.org/) with the [immutable](https://github.com/jonaskello/tslint-immutable) linter standards as base. As there's use of TS in both projects, the  _.tsconfig.json_ file was configured to accept only [ECMA Script 6](http://es6-features.org) format.

I've added also a code review through [Codacy](http://codacy.com/).

## Testing
Tests are written with [Jest](https://facebook.github.io/jest/) through [ts-jest](https://www.npmjs.com/package/ts-jest) and integrated with [Travis CI](http://travis-ci.org/) and [Codecov](https://codecov.io/).

When running the tests, there's no need of previously building it; the TS files only are needed.

To run all tests just:

```bash
npm test
```

If you ran into some errors related to package dependencies and want to know how to handle it, read the [Security](#Security) info.

# Security
I've added a integration with [Snyk](https://snyk.io/) to ensure that all of my dependencies have no bugs or errors reported without fixing it first before Continuos integration (CI) to ensure the Continuos Development (CD).

## Errors/Bugs in Dependencies
When Snyk report some errors or bugs that can be fixed, just follow the CLI command to fix them before running -- more info at their [docs](https://github.com/snyk/snyk#cli).

# Contributing
Just talk to me through an _issue_.

# Versioning
There's no versioning system being used here due to the ephemeral nature of this project. 

# Authors
* Just [me](https://github.com/Fazendaaa).

# License
Like many Open-Source Software (OSS) the MIT license is used, more about it in  [LICENSE](https://github.com/Fazendaaa/secureforce/blob/master/LICENSE).
