# EP-BACKEND

## Connect your postgre database with docker

1.  Create docker-compose.yml in server directory with herokuu postgres

```
version: "3.9"

services:
  ep-backend:
    build: ./
    volumes:
      - ./:/ep
    working_dir: /ep
    command: npm run start:dev
    links:
      - postgres
    environment:
      DATABASE_URL: postgresql://<user>:<password>@<host>:<port>/ep_db?schema=public
      PRISMA_ENDPOINT: http://localhost:4466,
      SECRET: <SENDGRID_SECRET>
      SENDGRID: <SENDGRID_KEY>
      SENDER_EMAIL: <SENDGRID_EMAIL>
      POSTGRES_USER: <USER>
      POSTGRES_PASSWORD: <PASSWORD>
      POSTGRES_DB: ep_dev
      POSTGRES_HOST: postgres
    ports:
      - 4000:4000
  postgres:
    image: "postgres"
    ports:
      - 5433:5432
    environment:
      POSTGRES_USER: <USER>
      POSTGRES_PASSWORD: <PASSWORD>
      POSTGRES_DB: ep_dev
      POSTGRES_HOST: postgres
```

2.  Run `docker-compose up -d` for first time `docker-compose up --build -d`
3.  Push your updated prisma scheme to db
    `npx prisma db push --preview-feature`
4.  Run `npx prism db seed --preview-feature` for seeding temp data
5.  Run `docker exec -it containerId /bin/bash/` to enter bash
