Put your HTML text here<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Management System</title>
</head>
<body>

<h1>Movie Management System</h1>

<h2>Project Overview</h2>
<p>The Movie Management System is a web application built using the NestJS framework. It allows users to manage movies, showtimes, tickets, and user information. The system includes authentication and authorization mechanisms, allowing only authorized users to perform certain actions.</p>

<h2>How to Run the Project</h2>
<ol>
    <li>Clone the repository: <code>git clone &lt;repository_url&gt;</code></li>
    <li>Navigate to the project directory: <code>cd movie-management-nestjs</code></li>
    <li>Install dependencies: <code>npm install</code></li>
    <li>Set up the environment variables by creating a <code>.env</code> file in the root directory. Include the necessary database connection settings and other configuration values.
        <code>
        <ul>ENVIRONMENT=DEV</ul>
        <ul>JWT_SECRET=your_jwt_secret_key</ul>
        <ul>DB_HOST=your_db_host></ul>
        <ul>DB_PORT=your_db_port</ul>
        <ul>DB_USERNAME=your_db_username</ul>
        <ul>DB_PASSWORD=your_db_password</ul>
        <ul>DB_NAME=your_db_name</ul>
        </code></li>
    <li>Start the development server: <code>npm run start:dev</code></li>
    <li>The server should now be running on <code>http://localhost:3000</code></li>
</ol>

<h2>Endpoints</h2>
<h3>Authentication</h3>
<ul>
    <li><strong>Register:</strong> <code>POST /auth/register</code> - Registers a new user.</li>
    <li><strong>Login:</strong> <code>POST /auth/login</code> - Authenticates a user and returns a JWT token.</li>
</ul>

<h3>Users</h3>
<ul>
    <li><strong>Get All Users:</strong> <code>GET /users</code> - Retrieves a list of all users. Requires BearerToken.</li>
    <li><strong>Get User by ID:</strong> <code>GET /users/:id</code> - Retrieves a specific user by ID. Requires BearerToken.</li>
</ul>

<h3>Movies</h3>
<ul>
    <li><strong>Get All Movies:</strong> <code>GET /movies</code> - Retrieves a list of all movies.</li>
    <li><strong>Get Movie by ID:</strong> <code>GET /movies/:id</code> - Retrieves a specific movie by ID.</li>
    <li><strong>Create Movie (Managers Only):</strong> <code>POST /movies</code> - Creates a new movie. Requires BearerToken and Manager role.</li>
</ul>

<h3>Showtimes</h3>
<ul>
    <li><strong>Get All Showtimes:</strong> <code>GET /shows</code> - Retrieves a list of all showtimes.</li>
    <li><strong>Create Showtime:</strong> <code>POST /shows</code> - Creates a new showtime.</li>
</ul>

<h3>Tickets</h3>
<ul>
    <li><strong>Purchase Ticket:</strong> <code>POST /tickets</code> - Purchases a ticket for a show.</li>
    <li><strong>View Watch History:</strong> <code>GET /tickets/history</code> - Retrieves the watch history for a user.</li>
    <li><strong>Watch Movie:</strong> <code>POST /tickets/watch</code> - Marks a movie as watched for a user.</li>
</ul>

<h2>BearerToken Usage</h2>
<p>For endpoints that require authentication, include a BearerToken in the request header. After logging in, you will receive a JWT token. Use this token in the Authorization header for subsequent requests:</p>
<pre>
<code>
Authorization: Bearer &lt;your_jwt_token&gt;
</code>
</pre>

<h2>Swagger API</h2>
<p>To see API documentation presented by Swagger, use the URL below.</p>
<pre>
<code>
Swagger API Document: http://localhost:3000/api;
</code>
</pre>

</body>
</html>

<br>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
#   m o v i e - m a n a g e m e n t - n e s t j s 
 
 