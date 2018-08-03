const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Query {
        users: [User]
    }

    type User {
        id: Int!
        login: String!
        firstName: String!
        lastName: String! 
    }
`);