"use client"

import { useEffect } from "react"

// Prefill widget inputs from query params so shared result links reopen the
// exact calculation. Pages are statically generated — params are read client-side.
export default function usePrefillFromUrl(setters: Record<string, (value: string) => void>) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    for (const [key, set] of Object.entries(setters)) {
      const value = params.get(key)
      if (value !== null && value !== "" && !isNaN(Number(value))) set(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
