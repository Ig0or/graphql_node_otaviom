import { gql } from 'apollo-server';

const postTypeDefs = gql`
    interface PostError {
        statusCode: Int!
        message: String!
    }

    union PostResult = Post | PostNotFoundError | PostTimeoutError

    type PostNotFoundError implements PostError {
        statusCode: Int!
        message: String!
        postId: String!
    }

    type PostTimeoutError implements PostError {
        statusCode: Int!
        message: String!
        timeout: Int!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        indexRef: Int!
        createdAt: String!
    }

    type Query {
        post(postId: String!): PostResult
        posts(input: ApiFiltersInput): [Post]!
    }
`;

export { postTypeDefs };
