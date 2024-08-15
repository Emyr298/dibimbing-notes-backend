import express from 'express';
import cors from 'cors';
import { createHandler } from 'graphql-http/lib/use/express';
import { buildSchema } from 'graphql';
import { NOTE_SCHEMA, noteResolvers } from './notes';

const schema = buildSchema(NOTE_SCHEMA);

const app = express();
app.use(cors());
app.all(
  '/graphql',
  createHandler({
    schema: schema,
    rootValue: {
      ...noteResolvers,
    },
  }),
);

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
