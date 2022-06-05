import { ApolloServer } from 'apollo-server';
import fetch from 'node-fetch';

import { postTypeDefs } from './graphql/post/typedefs';
import { postResolvers } from './graphql/post/resolvers';
import { userResolvers } from './graphql/user/resolvers';
import { userTypeDefs } from './graphql/user/typedefs';

const server = new ApolloServer({
    typeDefs: [userTypeDefs, postTypeDefs],
    resolvers: [userResolvers, postResolvers],
    context: () => {
        return {
            fetch,
        };
    },
});

server.listen(4003).then(({ url }) => {
    console.log(`Server listing on URL ${url}`);
});
