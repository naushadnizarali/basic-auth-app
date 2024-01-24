## Scaffolding commands

- nx g @nx/react:application --name=portal-web --projectNameAndRootFormat=as-provided --routing=true

- nx g @nx/nest:library --name=filters --buildable=true --publishable=true --directory=/libs/backend/utility --global=true --importPath=@backend/utility/filters --projectNameAndRootFormat=derived --simpleName=true
- nx g @nx/nest:library --name=database --buildable=true --publishable=true --directory=/libs/backend/utility --global=true --importPath=@backend/utility/database --projectNameAndRootFormat=derived --simpleName=true
- nx g @nx/nest:library --name=helpers --buildable=true --publishable=true --directory=/libs/backend/utility --global=true --importPath=@backend/utility/helpers --projectNameAndRootFormat=derived --simpleName=true
- nx g @nx/nest:library --name=users --buildable=true --controller=true --directory=/libs/backend/kernel --importPath=@backend/kernel/users --projectNameAndRootFormat=derived --service=true --simpleName=true
- nx g @nx/nest:library --name=auth --buildable=true --controller=true --directory=/libs/backend/kernel --importPath=@backend/kernel/auth --projectNameAndRootFormat=derived --service=true --simpleName=true
- nx g @nx/nest:library --name=data-transfer-objects --directory=/libs/shared --buildable=true --importPath=@shared/data-transfer-objects --projectNameAndRootFormat=derived --simpleName=true

- nx g @nx/js:library --name=interfaces --unitTestRunner=jest --directory=/libs/shared/interfaces --importPath=@shared/interfaces --projectNameAndRootFormat=derived --simpleName=true
- nx g @nx/js:library --name=enums --unitTestRunner=jest --directory=/libs/shared/enums --importPath=@shared/enums --projectNameAndRootFormat=derived --simpleName=true

## ORM Helper

- The first step to adopt Prisma is to install the Prisma CLI in your project:

```bash
pnpm add -D prisma
```

- Run the following command in your terminal to create a basic Prisma schema file:

```bash
npx prisma init
```

- With your connection URL in place, you can introspect your database to generate your Prisma models:

```bash
npx prisma db pull
```

- First, create a migrations directory and add a directory inside with your preferred name for the migration. In this example, we will use 0_init as the migration name:

```bash
mkdir -p prisma/migrations
```

- Next, generate the migration file with prisma migrate diff. Use the following arguments:

  - `--from-empty`: assumes the data model you're migrating from is empty
  - `--to-schema-datamodel`: the current database state using the URL in the datasource block
  - `--script`: output a SQL script

```bash
npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/init.sql
```

- Next, mark the migration as applied using prisma migrate resolve with the --applied argument.

```bash
npx prisma migrate resolve --applied prisma/migrations/init.sql
```

- Finally, apply the migration using prisma migrate up:

```bash
npx prisma migrate up
```
