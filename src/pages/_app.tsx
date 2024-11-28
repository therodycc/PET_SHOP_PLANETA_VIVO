import '@/styles/styles.css'
import type { AppProps } from 'next/app'

import { NextPage } from "next"
import Head from 'next/head'
import { ReactElement, ReactNode } from "react"

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return <>
    <Head>
      {/* <!-- HTML Meta Tags --> */}
      <title>Epagricula RD</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/animate.min.css" />
      <link rel="stylesheet" href="/assets/js/bootstrap.bundle.min.js" />
      <link rel="stylesheet" href="/assets/js/main.js" />

      <meta name="description" content="Ofrecemos productos y servicios agroveterinaria y control de plagas." />
      <meta
        name="keywords"
        content="Pet Shop Epagricula RD, Ofrecemos productos y servicios agroveterinaria y control de plagas."
      />
      <link rel="canonical" href="https://www.instagram.com/epagriculard" />
      <meta name="author" content="Rody Castro" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://www.instagram.com/epagriculard" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Epagricula RD" />
      <meta property="og:description" content="Ofrecemos productos y servicios agroveterinaria y control de plagas." />
      <meta property="og:image" content="https://petshopplanetavivo-production.up.railway.app/assets/imgs/logo.jpeg" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="https://petshopplanetavivo-production.up.railway.app" />
      <meta property="twitter:url" content="https://www.instagram.com/epagriculard" />
      <meta name="twitter:title" content="Epagricula RD" />
      <meta name="twitter:description" content="Ofrecemos productos y servicios agroveterinaria y control de plagas." />
      <meta name="twitter:image" content="https://petshopplanetavivo-production.up.railway.app/assets/imgs/logo.jpeg" />
    </Head >

    {/* <LoadingPage /> */}

    {getLayout(<Component {...pageProps} />)}
  </>
}