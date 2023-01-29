import type { AppProps } from 'next/app';

import GlobalsCss from '@/styles/globals';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <GlobalsCss />

      <Component {...pageProps} />
    </>
  );

}
