# deck-of-cards

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies
```sh
npm install
```
## Run the application
I followed this link https://stackoverflow.com/questions/54691759/how-to-watch-for-file-changes-in-loopback-4 to get help for "detect changes and restart the server"
```sh
npm run start:watch
```
Server should run at http://127.0.0.1:3001

There are three REST API endpoints available, you can use postman to test the endpoints.
I used **Thunder Client** VS Code extension to test the APIs.

1- [POST] http://127.0.0.1:3001/deck/create **(create a new Deck)**
*following is the request body*
```sh
{
  "type": "FULL",
  "shuffled": true
}
```
`Note: request body is required, 'type' can only have 'FULL' or 'SHORT' value and 'shuffled' can only have boolean value otherwise it will throw exception.`

2- [GET] http://127.0.0.1:3001/deck/open/{deckId} **(Open a Deck)**
3- [GET] http://127.0.0.1:3001/deck/drawcards/{deckId}/{count} **(Draw a Card)**

`Note: I have uploaded data file (/data/db.json) with some data, following are some deck IDs to test above two GET endpoints`
```sh
308efb3d-3207-4fec-a38d-fb7d4f589be0
d451e7ca-ce7f-4a9d-99d8-dac57fa2aa70
4bef9af3-3382-47d9-a6b6-6c0bd26c8700
895c0f2a-ff82-45e3-8376-d62e5fa853c7
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests
I have tried to added TDD and BDD testing, to run tests, please run following command
```sh
npm test
```
