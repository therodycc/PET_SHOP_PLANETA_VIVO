import '@/styles/styles.css'
import type { AppProps } from 'next/app'

import { NextPage } from "next"
import { ReactElement, ReactNode, useEffect, useState } from "react"
import Head from 'next/head'
import { LoadingPage } from "@/components/pages/loading"

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
      <title>Pet Shop Planeta Vivo</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/animate.min.css" />
      <link rel="stylesheet" href="/assets/js/bootstrap.bundle.min.js" />

      <meta name="description" content="Ofrecemos productos y servicios agroveterinaria y control de plagas." />
      <meta
        name="keywords"
        content="Pet Shop Planeta Vivo, Ofrecemos productos y servicios agroveterinaria y control de plagas."
      />
      <link rel="canonical" href="https://phoneclinic.netlify.app/" />
      <meta name="author" content="Rody Castro" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://phoneclinic.netlify.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Pet Shop Planeta Vivo" />
      <meta property="og:description" content="Ofrecemos productos y servicios agroveterinaria y control de plagas." />
      <meta property="og:image" content="https://phoneclinic.netlify.app/assets/imgs/back-2.jpg" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="phoneclinic.netlify.app" />
      <meta property="twitter:url" content="https://phoneclinic.netlify.app/" />
      <meta name="twitter:title" content="Pet Shop Planeta Vivo" />
      <meta name="twitter:description" content="Ofrecemos productos y servicios agroveterinaria y control de plagas." />
      <meta name="twitter:image" content="https://phoneclinic.netlify.app/assets/imgs/back-2.jpg" />
    </Head >

    {/* <LoadingPage /> */}

    {getLayout(<Component {...pageProps} />)}
  </>
}