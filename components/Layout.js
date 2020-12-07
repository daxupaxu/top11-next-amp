import NextHead from 'next/head'
import { AmpIncludeAmpInstallServiceworker } from './amp/AmpCustomElement'
import Header from './header'
import Footer from './footer'
import { createGlobalStyle } from 'styled-components';

const Main = createGlobalStyle`
    body {
        margin: 0px;
        font-family: 'Indie Flower', cursive;
    }
`

const Layout = (props) => (
  <>
    <NextHead>
      <title>{props.title || 'Top11'}</title>
      <meta name="description" content={props.description || ''} />
      <link rel="icon" sizes="192x192" href="/static/images/icons-192.png" />
      <link rel="apple-touch-icon" href="/static/images/icons-192.png" />
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </NextHead>
    
    <Header />
    <Main />
      {props.children}
    <Footer />

    <AmpIncludeAmpInstallServiceworker />
    <amp-install-serviceworker
      src="/serviceworker.js"
      data-iframe-src="/install-serviceworker.html"
      layout="nodisplay"
    />
  </>
)

export default Layout
