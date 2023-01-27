# InStock 🌱

Instock is an Agile project to deliver a full stack Inventory Management System with a modern React and SCSS front-end communicating with back-end, that was build with Node.js (Express.js). Knex.js was used as an SQL query builder in Node.js., it was used for model schema creation, table migrations, connection pooling and seeding.

The website is fully responsive for mobile, tablet, and desktop viewing and users can add, edit or delete both warehouses and inventory items (full CRUD operations).

## Demo 🌱

https://user-images.githubusercontent.com/97055104/214982067-40802963-5775-4c3e-8579-26239a854757.mp4

My contribution to the project:
Lakpa and me were fully responsible for setting beckend part and database.

## The Team

This project was built with the collaboration of: <br>
Su (https://github.com/Su0112) <br>
Lakpa (https://github.com/ldietz08) <br>
Caty (https://github.com/Caty115)<br>

## Tech Stack and Tools

- HTML, SASS, JavaScript, React.js, Node.js, Express.js, API's , MySQL, Knex.js, Axios

## Installation:

1. To install and run the project you will need to clone or dowload the Frontend file - [instock-dunkan](https://github.com/Awatanka/instock-duncan), and the Backend file - [instock-api-dunkan](https://github.com/Awatanka/instock-api-duncan/tree/main);

2. Run `nmp i` to install all the required packages for the app;

## Environment Variables

\*\*\* Frontend:
Add the following variables in .env file:

`REACT_APP_API_URL=https://localhost:8080`

\*\*\* Backend:

`PORT = 8080`
`DB_LOCAL_DBNAME="Warehouse"`<br>
`DB_LOCAL_USER="YOUR DB USER NAME"`<br>
`DB_LOCAL_PASSWORD="YOUR DB PASSWORD"`<br>
\*\*In case of problems check dependencies
"dependencies": {
"cors": "^2.8.5",
"dotenv": "^16.0.3",
"express": "^4.18.2",
"knex": "^2.3.0",
"moment": "^2.29.4",
"mysql": "^2.18.1",
"uuid": "^9.0.0"
},

3. First run server use command `npm start`. When you will see message 'Server is running on port 8080 🚀', do next step.

4. To start the Frontend run the command `npm start`;

## How to work with Knex.js

Knex is a SQL query builder, mainly used for Node.js applications with built in model schema creation, table migrations, connection pooling and seeding.

### Install Knex and Knex Command Line Tool

Install `knex` **globally** on your local computer.

```bash
$ npm install knex -g
```

This will allow us to use `knex` as a command line tool that helps you create and manage your knex files.

In addition, you will need to also install the `knex` module **locally** to use in your project.

```bash
$ npm install knex --save
```

## Configuring your database

We're going to be connecting to a MySQL database, we'll need to install the `mysql` module.

```
$ npm install mysql --save
```

We can start by creating a `knexfile.js` in the root of your project which will act as our configuration for different environments, (e.g. – local development vs production).

```
$ knex init
```

This will create a `knexfile.js` with the different configurations for the different environments.
