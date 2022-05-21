# The Typescript Base Project

The project is configured with useful plugins.
Also, You can develop project in docker dev environment with Devcontainer offerd at VSCode.

# Cofigured Plugins

- typescript
- eslint, prettier
- husky, lint-staged
- mocha
- typedoc
- devcontainer

# NPM Command

## Run typescript automatically when source is changed

```bash
npm run dev
```

## Build typedoc automatically when source is changed

```bash
npm run dev:typedoc
```

## Run javasript built on development env

```bash
npm run start:dev
```

## Build typescript into javascript on `/dist` dir

```bash
npm run build
```

## Build typedoc into html on `/docs` dir

```bash
npm run build:typedoc
```

## Test typescript with Mocha

```bash
npm run test
```

## Check problem and wrong format in source code with ESlint

```bash
npm run lint
```

## Fix problem and wrong format in source code with ESlint

```bash
npm run lint:fix
```
