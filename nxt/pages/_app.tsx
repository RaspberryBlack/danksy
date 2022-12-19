import { AppProps } from "next/app"
import Head from "next/head"
import { Layout } from "components/layout"

import "styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Danksy</title>
        <meta
          name="description"
          content="Danksy's home"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
