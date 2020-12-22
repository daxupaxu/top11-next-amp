import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document'


const getStyleTag = sheet => {
  const styleTags = sheet.getStyleElement()
  const styleTagsArray = Array.isArray(styleTags) ? styleTags : [styleTags];
  const inlineCss = styleTagsArray.reduce((inlineStyles, currentStylesheet) => {
    if (currentStylesheet && currentStylesheet.props) {
      return `${inlineStyles}${
        currentStylesheet.props.dangerouslySetInnerHTML.__html
        }`;
    }
    return inlineStyles;
  }, '')

  return (
    <style amp-custom="" dangerouslySetInnerHTML={{ __html: inlineCss }} />
  )
}
class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage((App) => (props) =>
    sheet.collectStyles(<App {...props} />),
  );
  const styleTag = getStyleTag(sheet)
  return { ...page, styleTag};
}
  render() {
    const { styleTag } = this.props;
    return (
      <>
      <Html amp=''>
        <Head>
        {styleTag}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
      </>
    )
  }
}


export default MyDocument