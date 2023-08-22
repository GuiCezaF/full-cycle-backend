<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## BackEnd da Imersão Fullcycle 14 - Sistema de rastreamento de veículos
#### Backend project made with nestJs using the google maps API
  
## Installation

Docker:

```
docker-compose up
```

In another terminal run the command to enter the Docker container:
```bash
docker compose exec app bash
```

And configure the initial dependencies (run only inside the Docker container):
```
npm install
npx prisma generate
```

Run the application (only run inside the Docker container):
```bash
npm run start:dev
```
