# EP-BACKEND

## Connect your postgre database with docker

1.  Create docker-compose.yml in server directory

```
version:  "3"
services:
    prisma:
        image:  prismagraphql/prisma:1.34
        restart:  always
        ports:
            -  "4466:4466"
        environment:
            PRISMA_CONFIG:  |
                port: 4466
                # uncomment the next line and provide the env var PRISMA_MANAGEMENT_API_SECRET=my-secret to activate cluster security
                # managementApiSecret: my-secret
                databases:
                    default:
                    connector: postgres
                    host:
                    database:
                    user:
                    password:
                    ssl: true
                    rawAccess: true
                    port: '5432'
                    migrations: true
```

2.  Run `docker-compose up -d`
3.  Push your updated prisma scheme to db
    `nnpx prisma db push --preview-feature`

## Generate types and schema for your api's with graphql-codegen

1.  Update sample.env endpoint & secret
2.  Run `yarn run codegen`
3.  Generated types and scheme will be available inside `src/generated`
