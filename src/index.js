import { ApolloServer } from 'apollo-server';
import { userResolvers } from './graphql/user/resolvers';
import { userTypeDefs } from './graphql/user/typedefs';

const server = new ApolloServer({
  typeDefs: [userTypeDefs],
  resolvers: [userResolvers],
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listing on URL ${url}`);
});
