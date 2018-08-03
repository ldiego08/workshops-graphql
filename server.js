const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    "The root of it all"
    type Query {
        "Returns a greeting"
        hello: String
    }
`);

const root = {
    hello: () => {
        return 'Hello World!';
    }
}

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4001);

console.log("Running a GraphQL API server at localhost:4001/graphql");