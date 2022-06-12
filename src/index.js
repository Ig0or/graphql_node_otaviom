import { ApolloServer } from 'apollo-server';

import { apiFiltersTypeDefs } from './graphql/api-filters/typedefs';
import { apiFiltersResolvers } from './graphql/api-filters/resolvers';
import { postTypeDefs } from './graphql/post/typedefs';
import { postResolvers } from './graphql/post/resolvers';
import { userResolvers } from './graphql/user/resolvers';
import { userTypeDefs } from './graphql/user/typedefs';
import { context } from './graphql/context';

const server = new ApolloServer({
    typeDefs: [apiFiltersTypeDefs, userTypeDefs, postTypeDefs],
    resolvers: [userResolvers, postResolvers, apiFiltersResolvers],
    context,
});

server.listen(4003).then(({ url }) => {
    console.log(`Server listing on URL ${url}`);
});
