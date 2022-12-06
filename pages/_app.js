import '../styles/globals.css'
import Layout from '../components/Layout'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4127654850827260"
        crossOrigin="anonymous">
      </script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-RZK9G9W5ER`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RZK9G9W5ER');
        `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
