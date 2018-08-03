const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

const resolvers = require('./resolvers');

const RoleType = new GraphQLObjectType({
    name: 'Role',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});

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
        },
        roles: {
            type: new GraphQLList(RoleType),
            resolve: resolvers.userRoles
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