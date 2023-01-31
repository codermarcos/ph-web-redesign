import type { AppProps } from 'next/app';

import { Nunito } from '@next/font/google';

import { ApolloProvider } from '@apollo/client';

import apolloClient from '@/graphql/client';

import GlobalsCss from '@/styles/globals';

import Header from '@/components/Header/Header.component';

// eslint-disable-next-line new-cap
const fontNunito = Nunito({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalsCss />

      <Header />

      <main className={fontNunito.className}>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );

}
