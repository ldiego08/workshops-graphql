const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

const resolvers = require('./resolvers');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        login: {
            type: new GraphQLNonNull(GraphQLString)
        },
        firstName: {
            type: new GraphQLNonNull(GraphQLString) 
        },
        lastName: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});

const RootType = new GraphQLObjectType({
    name: 'Root',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve: resolvers.users
        },
        user: {
            type: UserType,
            resolve: resolvers.user,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLInt)
                }
            } 
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootType
});