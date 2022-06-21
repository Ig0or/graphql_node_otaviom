import { ApolloServer } from 'apollo-server';

import { apiFiltersTypeDefs } from './graphql/api-filters/filters_typedefs';
import { apiFiltersResolvers } from './graphql/api-filters/filters_resolvers';
import { postTypeDefs } from './graphql/post/post_typedefs';
import { postResolvers } from './graphql/post/post_resolvers';
import { userResolvers } from './graphql/user/users_resolvers';
import { userTypeDefs } from './graphql/user/users_typedefs';
import { context } from './graphql/context';
import { PostsApi } from './graphql/post/datasources';

const server = new ApolloServer({
    typeDefs: [apiFiltersTypeDefs, userTypeDefs, postTypeDefs],
    resolvers: [userResolvers, postResolvers, apiFiltersResolvers],
    context,
    dataSources: () => {
        return {
            postApi: new PostsApi(),
        };
    },
});

server.listen(4003).then(({ url }) => {
    console.log(`Server listing on URL ${url}`);
});
