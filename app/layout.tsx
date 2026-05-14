import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CookieBanner from "@/components/layout/CookieBanner"
import ConditionalAnalytics from "@/components/layout/ConditionalAnalytics"

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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7433380127486100"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geist.className} bg-white text-gray-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <ConditionalAnalytics />
      </body>
    </html>
  )
}
