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

      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id='ga-analytics'>
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `
        }
      </Script>

      <Head>
        <title>HomeWork Robot</title>
        <meta name="description" content="Automaticaly get instant answers to homework questions or writing prompts" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

    </>
  )

}

export default MyApp
