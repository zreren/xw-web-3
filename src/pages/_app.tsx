import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ErrorBoundary from '@/components/ErrorBoundary'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"
        />
      </Head>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  )
}
