// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage((App) => (props) =>
    sheet.collectStyles(<App {...props} />),
  );
  const styleTags = sheet.getStyleElement();
  return { ...page, styleTags, ...initialProps };
}

  render() {
    return (
      <Html lang="en">
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument