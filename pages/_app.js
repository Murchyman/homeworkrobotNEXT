import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import Script from 'next/script'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
config.autoAddCss = false



function MyApp({ Component, pageProps }) {
  return (
    <>

      <Script id="Adsense-id" data-ad-client="ca-pub-6052671390695750"
        async strategy="afterInteractive"
        onError={(e) => { console.error('Script failed to load', e) }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />

      <Head>
        <title>HomeWork Robot</title>
        <meta name="description" content="With HomeWork Robot, get instant answers to questions or writing prompts" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

    </>
  )

}

export default MyApp
