import { ApolloClient } from '@apollo/client';

import cache from '@/graphql/cache';

const apolloClient = new ApolloClient({
  cache,
  uri: '/api/graphql',
});

export default apolloClient;
