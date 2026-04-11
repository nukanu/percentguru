"use client"

import { useState } from "react"
import { markupAmount, markupPrice } from "@/lib/calculators/finance"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

function fmt(n: number): string {
  return Number.isInteger(n) ? n.toString() : n.toFixed(2).replace(/\.?0+$/, "")
}

export default function MarkupCalculatorWidget() {
  const [cost, setCost] = useState("")
  const [markup, setMarkup] = useState("")

  const costNum = parseFloat(cost)
  const markupNum = parseFloat(markup)
  const hasInput = !isNaN(costNum) && !isNaN(markupNum)

  const added = hasInput ? markupAmount(costNum, markupNum) : null
  const selling = hasInput ? markupPrice(costNum, markupNum) : null

  const quickAnswer =
    hasInput && added !== null && selling !== null
      ? `A ${markup}% markup on $${cost} adds $${fmt(added)} — selling price is $${fmt(selling)}`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField label="Cost Price" value={cost} onChange={setCost} placeholder="e.g. 50" suffix="$" />
        <InputField label="Markup (%)" value={markup} onChange={setMarkup} placeholder="e.g. 40" suffix="%" />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-4">
        <ResultBlock label="Markup Amount" value={added !== null ? `$${fmt(added)}` : null} />
        <ResultBlock label="Selling Price" value={selling !== null ? `$${fmt(selling)}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
