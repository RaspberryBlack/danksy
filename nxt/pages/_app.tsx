import { AppProps } from "next/app"
import Head from "next/head"
import { Layout } from "components/layout"
import {useEffect} from "react";
import { Merriweather_Sans, Archivo } from '@next/font/google'
import "styles/globals.css"
import { stripTitle } from "@lib/utils";

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
})

const merriweatherSans = Merriweather_Sans({
  subsets: ['latin'],
  variable: '--font-merriweather',
})

export default function App({ Component, pageProps }: AppProps) {
  const title = `Danksy art${pageProps.node?.title && (' | ' + stripTitle(pageProps.node.title))}`

  useEffect(() => {
    document.querySelector("body").classList.add(`${archivo.variable}`, `${merriweatherSans.variable}`);
  });

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
