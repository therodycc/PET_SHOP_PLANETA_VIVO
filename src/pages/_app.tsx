import "@/styles/styles.css";
import type { AppProps } from "next/app";
import Script from "next/script";

import { NextPage } from "next";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
  };
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const {
    title = "Epagricula RD - Productos y servicios agroveterinarios",
    description = "Ofrecemos productos y servicios agroveterinaria y control de plagas.",
    keywords = "agroveterinaria, control de plagas, productos agrícolas, servicios agrícolas",
    canonical = "https://www.epagriculard.com",
    ogImage = "https://www.epagriculard.com/assets/imgs/logo.png",
  } = Component.seo || {};

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/js/bootstrap.bundle.min.js" />
        <link rel="stylesheet" href="/assets/js/main.js" />
        <link rel="icon" type="image/x-icon" href="/assets/logo-rounded.ico" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Rody Castro" />

        <link rel="canonical" href={canonical} />
        <link rel="icon" href="/favicon.ico" />

        {/* Facebook Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={canonical} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <Script
        src="/assets/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/main.js" strategy="lazyOnload" />

      {/* <LoadingPage /> */}

      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
