import { gql } from 'apollo-server';

const userTypeDefs = gql`
    type Query {
        user(userId: String!): User!
        users: [User!]!
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        userName: String!
        indexRef: Int!
        createdAt: String!
    }
`;

export { userTypeDefs };
