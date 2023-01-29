import type { AppProps } from 'next/app';

import { ApolloProvider } from '@apollo/client';

import apolloClient from '@/graphql/client';

import GlobalsCss from '@/styles/globals';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalsCss />

      <Component {...pageProps} />
    </ApolloProvider>
  );

}
