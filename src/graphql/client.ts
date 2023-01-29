import { ApolloClient } from '@apollo/client';

import cache from '@/graphql/cache';

const apolloClient = new ApolloClient({
  uri: '/api/graphql',
  cache,
});

export default apolloClient;
