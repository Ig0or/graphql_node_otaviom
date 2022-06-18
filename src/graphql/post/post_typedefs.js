import { gql } from 'apollo-server';

const postTypeDefs = gql`
    type Post {
        id: ID!
        title: String!
        body: String!
        user: User!
        indexRef: Int!
        createdAt: String!
    }

    type Query {
        post(postId: String!): Post
        posts(input: ApiFiltersInput): [Post]!
    }
`;

export { postTypeDefs };
