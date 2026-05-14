"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="mx-auto max-w-4xl px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
        <p className="text-sm text-gray-600">
          We use cookies for analytics and to show relevant ads. See our{" "}
          <Link href="/privacy-policy/" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="text-sm text-gray-500 hover:text-gray-700 px-3 py-1.5 border border-gray-300 rounded-lg transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-lg font-medium transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
