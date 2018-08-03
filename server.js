const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = require('./schema');
const root = require('./resolvers');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4001);

console.log("Running a GraphQL API server at localhost:4001/graphql");