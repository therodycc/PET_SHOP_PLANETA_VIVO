import type { Metadata } from "next";
import Script from "next/script";
import { Comfortaa } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "@/styles/styles.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Epagricula RD - Productos y servicios agroveterinarios | Tienda de mascotas",
  description:
    "Ofrecemos productos y servicios agroveterinaria y control de plagas.",
  keywords:
    "agroveterinaria, control de plagas, productos agrícolas, servicios agrícolas, epagricula, tienda veterinaria, veterinarias santo domingo este, tienda de mascotas",
  authors: [{ name: "Rody Castro" }],
  alternates: {
    canonical: "https://www.epagriculard.com",
  },
  openGraph: {
    title: "Epagricula RD",
    description: "Productos y servicios agroveterinarios y control de plagas.",
    url: "https://www.epagriculard.com",
    siteName: "Epagricula RD",
    images: [
      {
        url: "https://www.epagriculard.com/assets/imgs/logo.png",
        width: 1200,
        height: 630,
        alt: "Epagricula RD",
      },
    ],
    locale: "es_DO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epagricula RD",
    description: "Tienda agroveterinaria y control de plagas.",
    images: ["https://www.epagriculard.com/assets/imgs/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "j_W21-wd34lYOK8M-LpI4gILrZ7_JPcAoO0oOm43NKE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Epagricula RD" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        <link rel="apple-touch-icon" href="/assets/logo-rounded.ico" />
      </head>

      <body className={comfortaa.className}>
        {children}

        {/* JS externos */}
        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
        <Analytics/>
      </body>
    </html>
  );
}
