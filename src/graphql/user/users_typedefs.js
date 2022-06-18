import { gql } from 'apollo-server';

const userTypeDefs = gql`
    type Query {
        user(userId: String!): User!
        users(input: ApiFiltersInput): [User!]!
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        userName: String!
        indexRef: Int!
        createdAt: String!
        posts: [Post!]!
    }
`;

export { userTypeDefs };
