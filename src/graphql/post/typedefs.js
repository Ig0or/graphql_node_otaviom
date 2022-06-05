import { gql } from 'apollo-server';

const postTypeDefs = gql`
    type Query {
        post(postId: String!): Post!
        posts: [Post]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        # user: User!
        indexRef: Int!
        createdAt: String!
    }
`;

export { postTypeDefs };
