"use client"

import { useState } from "react"
import { markupAmount, markupPrice } from "@/lib/calculators/finance"
import { inputError, isValid, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function MarkupCalculatorWidget() {
  const [cost, setCost] = useState("")
  const [markup, setMarkup] = useState("")

  const costError = inputError(cost)
  const markupError = inputError(markup)
  const hasInput = isValid(cost) && isValid(markup)

  const added = hasInput ? markupAmount(parseFloat(cost), parseFloat(markup)) : null
  const selling = hasInput ? markupPrice(parseFloat(cost), parseFloat(markup)) : null

  const quickAnswer = hasInput && added !== null && selling !== null
    ? `A ${markup}% markup on $${cost} adds $${fmtMoney(added)} — selling price is $${fmtMoney(selling)}`
    : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Cost Price"
          value={cost}
          onChange={setCost}
          placeholder="e.g. 50"
          suffix="$"
          autoFocus
          error={costError}
        />
        <InputField
          label="Markup (%)"
          value={markup}
          onChange={setMarkup}
          placeholder="e.g. 40 for 40% markup"
          suffix="%"
          error={markupError}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Markup Amount" value={added !== null ? `$${fmtMoney(added)}` : null} />
        <ResultBlock label="Selling Price" value={selling !== null ? `$${fmtMoney(selling)}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
