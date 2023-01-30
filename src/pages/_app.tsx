import type { AppProps } from 'next/app';

import { useMemo } from 'react';

import { Nunito } from '@next/font/google';

import { ApolloProvider } from '@apollo/client';

import apolloClient from '@/graphql/client';

import GlobalsCss from '@/styles/globals';

import Header from '@/components/Header/Header.component';

// eslint-disable-next-line new-cap
const fontNunito = Nunito({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {

  const memoHeader = useMemo(() => <Header />, []);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalsCss />

      {memoHeader}

      <main className={fontNunito.className}>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );

}
