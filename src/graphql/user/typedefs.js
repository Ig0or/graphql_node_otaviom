import { gql } from 'apollo-server';

const userTypeDefs = gql`
  type Query {
    user: User!
    users: [User]!
  }

  type User {
    name: String!
    age: Int!
  }
`;

export { userTypeDefs };
