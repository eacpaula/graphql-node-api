import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
    {
        id: 1,
        name: 'Jon',
        email: 'jon@jon.com.br'
    },
    {
        id: 2,
        name: 'Bob',
        email: 'bob@bob.com.br'
    }
];

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User!]!
    }

    type Mutation {
        createUser(name: String!, email: String!): User
    }
`;

const resolvers = {
    User: {
        id: (parent, args, context, info) => {
            return parent.id;
        },
        name: (parent, args, context, info) => {
            return parent.name;
        },
        email: (parent, args, context, info) => {
            return parent.email;
        }
    },
    Query: {
        allUsers: () => users
    },
    Mutation: {
        createUser: (parent, args, context, info) => {
            const newUser = Object.assign({id: users.length + 1}, args);

            users.push(newUser);

            return newUser;
        }
    }
}

export default makeExecutableSchema({typeDefs, resolvers});