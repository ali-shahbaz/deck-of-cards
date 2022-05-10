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
I tried to added TDD and BDD testing
```sh
npm test
```
