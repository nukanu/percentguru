import type { Metadata } from "next"
import { Geist } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CookieBanner from "@/components/layout/CookieBanner"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PercentGuru — Free Percentage & Finance Calculators",
  description:
    "Free, fast, and accurate percentage calculators. Calculate percentages, discounts, markup, profit margin, and more.",
  metadataBase: new URL("https://percentguru.com"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className={`${geist.className} bg-white text-gray-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7FZ05NRKFG" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7FZ05NRKFG');
        `}</Script>
      </body>
    </html>
  )
}
