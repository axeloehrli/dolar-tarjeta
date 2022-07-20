import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='es'>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <script dangerouslySetInnerHTML={{
          __html: `
        (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-4127654850827260",
            enable_page_level_ads: true
            });
            `,
        }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;800&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}