import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return <>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2203570267369097"
     crossOrigin="anonymous"></Script>
<Script async src={`https://www.googletagmanager.com/gtag/js?id=G-FGWNPBN1HZ`}></Script>
<Script id="google-analytics" strategy='afterInteractive'>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-FGWNPBN1HZ);
  `}
</Script>
  <Component {...pageProps} />
  </>
}
