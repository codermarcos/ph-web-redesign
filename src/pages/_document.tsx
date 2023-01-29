import { ServerStyleSheet } from 'styled-components';

import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

export async function getInitialProps(ctx: DocumentContext) {

  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
    });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        sheet.getStyleElement(),
      ],
    };

  } finally {

    sheet.seal();

  }

}

const DocumentCustom = () => (
  <Html lang="en">
    <Head>

      <link
        href="/favicon.ico"
        rel="icon"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Nunito&display=optional"
        rel="stylesheet"
      />

    </Head>

    <body>
      <Main />

      <NextScript />
    </body>
  </Html>
);

export default DocumentCustom;
