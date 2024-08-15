# Dibimbing Notes App - Backend
Notes application backend built with ExpressJS and GraphQL.

## Installation
First, install required dependencies using `npm install`.

After the dependencies are installed, create a `.env` file which contains environment variables:
- `DATABASE_URL`: URI to postgres database. Example: `postgresql://postgres:postgres@localhost:5432/dibimbing`.

For the example, you can look at `.env.example` file.

After envs are set, generate Prisma Client using:
```bash
npx prisma generate
```

Then migrate the database using:
```bash
npx prisma migrate dev
```

To run the application, run:
```bash
npm run start
```
