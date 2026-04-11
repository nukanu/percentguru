import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

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
      <body className={`${geist.className} bg-white text-gray-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
