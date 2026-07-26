"use client"

import { useState } from "react"

type ShareResultButtonProps = {
  params: Record<string, string>
}

export default function ShareResultButton({ params }: ShareResultButtonProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    const filtered = Object.fromEntries(
      Object.entries(params).filter(([, v]) => v.trim() !== "")
    )
    const qs = new URLSearchParams(filtered).toString()
    const url = `${window.location.origin}${window.location.pathname}?${qs}`
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable — leave the button as-is rather than break
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
    >
      {copied ? "Link copied ✓" : "Copy link to this result"}
    </button>
  )
}
