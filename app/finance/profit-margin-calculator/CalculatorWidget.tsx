"use client"

import { useState } from "react"
import { profitMargin } from "@/lib/calculators/finance"
import { inputError, isValid, fmt, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function ProfitMarginWidget() {
  const [revenue, setRevenue] = useState("")
  const [cost, setCost] = useState("")

  const revError = inputError(revenue)
  const costError = inputError(cost)
  const hasInput = isValid(revenue) && isValid(cost)

  const margin = hasInput ? profitMargin(parseFloat(revenue), parseFloat(cost)) : null
  const profit = hasInput ? parseFloat(revenue) - parseFloat(cost) : null
  const marginFormatted = margin !== null ? fmt(margin) : null
  const profitFormatted = profit !== null ? fmtMoney(profit) : null

  const quickAnswer = hasInput && margin !== null && profit !== null
    ? `Gross profit is $${profitFormatted} — a ${marginFormatted}% profit margin`
    : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Revenue (Selling Price)"
          value={revenue}
          onChange={setRevenue}
          placeholder="e.g. 150"
          suffix="$"
          autoFocus
          error={revError}
        />
        <InputField
          label="Cost"
          value={cost}
          onChange={setCost}
          placeholder="e.g. 100"
          suffix="$"
          error={costError}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Profit Margin" value={marginFormatted !== null ? `${marginFormatted}%` : null} />
        <ResultBlock label="Gross Profit" value={profitFormatted !== null ? `$${profitFormatted}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
