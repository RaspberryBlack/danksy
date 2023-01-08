import { AppProps } from "next/app"
import Head from "next/head"
import { Layout } from "components/layout"

import "styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  //const title = pageProps.node.title;
  const title = `Danksy art${pageProps.node?.title && (' | ' + pageProps.node.title.replace(/[ |]/g, " "))}`

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Portfolio of Danial Bradford as Dansky. Abstract art, photo & video."
        />
        <meta name="color-scheme" content="light"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
