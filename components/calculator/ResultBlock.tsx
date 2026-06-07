"use client"

import { useLayoutEffect, useRef, useState } from "react"

type ResultBlockProps = {
  label: string
  value: string | null
}

export default function ResultBlock({ label, value }: ResultBlockProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const [scale, setScale] = useState(1)

  // Shrink the value to fit its column when it would otherwise overflow.
  useLayoutEffect(() => {
    const wrap = wrapRef.current
    const text = textRef.current
    if (!wrap || !text) return

    const fit = () => {
      text.style.transform = "none"
      const available = wrap.clientWidth
      const needed = text.scrollWidth
      setScale(needed > available && needed > 0 ? available / needed : 1)
    }

    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(wrap)
    return () => ro.disconnect()
  }, [value])

  return (
    <div className="col-span-full flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 px-5 py-4 bg-blue-600 rounded-xl">
      <p className="text-xs font-semibold text-blue-200 uppercase tracking-wide sm:shrink-0">{label}</p>
      <div ref={wrapRef} className="min-w-0 sm:flex-1 sm:text-right overflow-hidden">
        <span
          ref={textRef}
          key={value ?? "__empty"}
          className="inline-block origin-left sm:origin-right text-2xl sm:text-3xl font-bold text-white result-animate whitespace-nowrap leading-tight tabular-nums"
          style={{ transform: `scale(${scale})` }}
        >
          {value ?? <span className="text-blue-300 text-4xl">—</span>}
        </span>
      </div>
    </div>
  )
}
