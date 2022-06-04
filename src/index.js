import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hi: String
    }
  `,
  resolvers: {
    Query: {
      hello: async () => {
        return 'hello world';
      },
      hi: () => {
        return 'hi';
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listing on URL ${url}`);
});
