import express from 'express';
const { graphqlHTTP } = require('express-graphql');
import { schema } from './data/schema';

const app = express();


// mounting a GraphQL API server on the “/” HTTP endpoint
app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true, //GraphiQL tool enables us to manually provide GraphQL queries
}))

app.listen(8080, () => console.log('Running server on port localhost:8080'));