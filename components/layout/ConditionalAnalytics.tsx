"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

const GA_ID = "G-7FZ05NRKFG"

export default function ConditionalAnalytics() {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    const check = () => {
      setConsented(localStorage.getItem("cookie-consent") === "accepted")
    }
    check()
    window.addEventListener("cookie-consent-accepted", check)
    return () => window.removeEventListener("cookie-consent-accepted", check)
  }, [])

  if (!consented) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}</Script>
    </>
  )
}
