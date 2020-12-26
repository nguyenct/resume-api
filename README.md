## Description
This is my resume API built off of the [NestJS](https://github.com/nestjs/nest) framework.

I wrote this project with NestJS to learn more about the framework and how it could help keep API documentation maintainable and close to the source code with [NestJS Swagger](https://github.com/nestjs/swagger) and [NestJS Redoc](https://github.com/mxarc/nestjs-redoc)
This project has a specific purpose of serving one and only one resume using the [Json Resume Schema](https://jsonresume.org/).
Resume details and information are stored in MongoDB.

## TL;DR
View my resume here: https://nguyenct.duckdns.org/resume/render?access_token={YOUR_TOKEN}

## Roles & Users
To keep personal information safe from the public internet, There are two hard-coded roles/users:
  - Admin (All Access)
  - User (Read Only)

These endpoints are secured with an authentication token. No need for user management or anything because that's overkill.

There is a `USER_API_TOKEN` for all read only users (potential employers).
  - This token should be shared alongside your PDF flavor of resume.

There is an `ADMIN_API_TOKEN` for the owner of the resume.
  - This token should _never_ be shared unless you want others to modify your information.

## Notes
There could be way less endpoints and it is possible to just have on single document (Resume) that follows the JsonResume Schema. This would allow us to have multiple resumes, also. However, that's not fun and pretty simple. The point of this project was see how easily we could flesh out Swagger docs for multiple endpoints.

## Hosting
Personally, I am hosting this on my "HomeLab" server (currently a Raspberry Pi 😂) which also hosts:
  - [Home Assistant](https://www.home-assistant.io/)
  - [PiHole](https://pi-hole.net/)
  - [Mosquitto](https://mosquitto.org/)

I am using [NGINX](https://www.nginx.com/) reverse proxy to serve the different services on a [DuckDNS](http://www.duckdns.org/) domain.

I debated hosting this project on AWS resources provisioned with Terraform, but I felt that it was overkill for a few resources (EC2, Load Balancer, Route53, Certs, SecurityGroups). Additionally, I have the option to host it locally, so I would rather do that vs a Cloud Service for something relatively simple.

## Installation
Docker (Recommended)
```bash
$ npm install
$ docker-compose up -d
```
The app should automatically start within a docker container along with the MongoDB instance.

Local
```bash
$ npm install
```

## Configuration
The following environment variable should be set in your `.env` file
```
NODE_ENV=development
PAGE_TITLE=
PROFILE_URL=
GITHUB_URL=
ROOT_URI=
PORT=3000
USER_API_TOKEN=
ADMIN_API_TOKEN=
MONGO_INITDB_ROOT_USERNAME=
MONGO_INITDB_ROOT_PASSWORD=
DATABASE_URI=mongodb://{username}:{password}@mongo/{database_name}?authSource=admin
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
