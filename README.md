# API BANK EXAMPLE

## Index

-   [Core Stack](#markdown-header-core-stack)
-   [Environment Setup](#markdown-header-environment-setup)
-   [Running the Project](#markdown-header-running-the-project)
-   [Tests](#markdown-header-tests)
-   [Project Structure](#markdown-header-project-structure)
-   [API Docs](#markdown-header-api-docs)

---

## Core Stack

Currently the project uses the following core stack:

-   Node.JS 14.x
-   NPM 6.x - Package Manager
-   ExpressJS 4.x - Web Framework
-   Mongoose 5.4.x - ORM
-   Docker Compose

---

## Environment Setup

This project uses Docker to containerize the Development Environment, if you do not have Docker and Docker Compose up and running, please follow the instructions [here](https://docs.docker.com/compose/install/)

**Note** \*  
Before starting the server you need to create `.env` at the root of the project and make the environment variables configuration.
The .env structure can be seen at [env.sample](./.env.sample).

---

# Environment Setup

This project uses Docker to containerize the Development Environment, if you do not have Docker and Docker Compose up and running, please follow the instructions [here](https://docs.docker.com/compose/install/)

**Note** Before starting the server a `.env` file needs to be created at the root of the project, [see below](#markdown-header-environment-schema)

#### Environment Schema

**Note** `example.env` is available following the scheme below:

| Key                     | Description                                                                                                     | Default | Required |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| NODE_ENV                | Node.JS Environment                                                                                             |         | Yes      |
| DB_URL                  | DB Url Environment                                                                                              |         | Yes      |
| PORT                    | HTTP Server Port                                                                                                | 3000    | No       |

## Running the Project

Run the following command to run the server in `development` mode with [change watch](https://www.npmjs.com/package/nodemon):

**Note** Before starting the server make sure that the environment has been set up correctly.

```sh
$ docker-compose up
```

After the docker is done you can use this API on `http://localhost:3000.`

---

## Tests

**Note** Always check the `.env.dev` file before running the commands bellow

Run coverage test in the NodeJS container:

```
$ docker-compose run --rm starter npm run test
```

All the files and subfolders related to `test` should be placed here.

```
tests
└───helpers // All helper business related to unit and integration tests
└───integration
└───unit
    setup.js
```

---

## Project Structure

**Note** The HTTP server is initiated at `server.js`

The project is divided in the following folders:

```
root folder
└───app
└───config
└───coverage
└───tests
    server.js
```

#### APP Folder:

This folder contains subfolders related to the application

###### API Subfolder

This folder contains subfolders with files related to the business model specific to each version of the API.

> `*_controller.js` defines the presentation model by invoking Service and Error Handling functions.

> `*_model.js` represents a collection of the database.

> `*_routes.js` is responsible to expose the presentation model defined by the Controller through HTTP. This layer is also responsible to define middleware behaviors such as session and user input Validations.

> `*_service.js` encapsulates how data is manipulated.

> `*_validations.js` defines schemas to ensure validation of key information.

> `*_error_handler.js` defines specific error handling for this business model

###### main Subfolder

This folder contains all the main files related to the application.

**Note** The `Routes` setup and general HTTP configurations are made in `app/main/app.js`

```
app
└───main
    └───app.js
```

**Note** All specfic `ExpressJS` middlewares are defined on `middlewares` folder

```
app/main
    └───middlewares
```

###### utils Subfolder

Here are general functions .

#### CONFIG Folder:

This folder contains files related to environment configurations

**Note** This project uses the [config package](https://www.npmjs.com/package/config) for environment specific configuration.

---

## API Docs

The postman is used to test and document this API.
```
/docs
    └─── BANK_TEST.postman_collection
```
