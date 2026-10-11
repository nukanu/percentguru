"use client"

import { useState } from "react"
import { markupPrice, markupPercent, costFromMarkup, profitMargin } from "@/lib/calculators/finance"
import { inputError, isValid, fmt, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import ShareResultButton from "@/components/calculator/ShareResultButton"
import usePrefillFromUrl from "@/components/calculator/usePrefillFromUrl"

export default function MarkupCalculatorWidget() {
  const [cost, setCost] = useState("")
  const [markup, setMarkup] = useState("")
  const [price, setPrice] = useState("")

  usePrefillFromUrl({ c: setCost, m: setMarkup, p: setPrice })

  const filled = [cost, markup, price].filter(isValid).length
  const allValid = [cost, markup, price].every((v) => v.trim() === "" || isValid(v))

  // Any two of the three fields give the third.
  let c: number | null = null
  let m: number | null = null
  let p: number | null = null
  if (allValid && filled === 2) {
    if (isValid(cost) && isValid(markup)) {
      c = parseFloat(cost)
      m = parseFloat(markup)
      p = markupPrice(c, m)
    } else if (isValid(cost) && isValid(price) && parseFloat(cost) > 0) {
      c = parseFloat(cost)
      p = parseFloat(price)
      m = markupPercent(c, p)
    } else if (isValid(markup) && isValid(price) && parseFloat(markup) > -100) {
      m = parseFloat(markup)
      p = parseFloat(price)
      c = costFromMarkup(p, m)
    }
  }

  const solved = c !== null && m !== null && p !== null
  const profit = solved ? p! - c! : null
  const margin = solved && p !== 0 ? profitMargin(p!, c!) : null

  const quickAnswer = solved && profit !== null
    ? `Cost $${fmtMoney(c!)} with a ${fmt(m!, 2)}% markup sells for $${fmtMoney(p!)} — $${fmtMoney(profit)} profit${margin !== null ? `, a ${fmt(margin, 2)}% margin` : ""}`
    : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-3 gap-4">
        <InputField
          label="Cost"
          value={cost}
          onChange={setCost}
          placeholder="e.g. 50"
          suffix="$"
          autoFocus
          error={inputError(cost)}
        />
        <InputField
          label="Markup"
          value={markup}
          onChange={setMarkup}
          placeholder="e.g. 40"
          suffix="%"
          error={inputError(markup)}
        />
        <InputField
          label="Selling Price"
          value={price}
          onChange={setPrice}
          placeholder="e.g. 70"
          suffix="$"
          error={inputError(price)}
        />
      </div>
      <p className="text-xs text-gray-500 mt-3">
        {filled === 3
          ? "Clear one field — the calculator works out the third from any two."
          : "Fill in any two fields. Leave the one you want to find empty."}
      </p>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Selling Price" value={solved ? `$${fmtMoney(p!)}` : null} />
        <ResultBlock label="Markup" value={solved ? `${fmt(m!, 2)}%` : null} />
        <ResultBlock label="Profit per Sale" value={profit !== null ? `$${fmtMoney(profit)}` : null} />
        <ResultBlock label="Profit Margin" value={margin !== null ? `${fmt(margin, 2)}%` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
      {quickAnswer && <ShareResultButton params={{ c: cost, m: markup, p: price }} />}
    </div>
  )
}
