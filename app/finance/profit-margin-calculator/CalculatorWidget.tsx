"use client"

import { useState } from "react"
import { profitMargin } from "@/lib/calculators/finance"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

function fmt(n: number): string {
  return Number.isInteger(n) ? n.toString() : n.toFixed(4).replace(/\.?0+$/, "")
}

export default function ProfitMarginWidget() {
  const [revenue, setRevenue] = useState("")
  const [cost, setCost] = useState("")

  const revNum = parseFloat(revenue)
  const costNum = parseFloat(cost)
  const hasInput = !isNaN(revNum) && !isNaN(costNum)

  const margin = hasInput ? profitMargin(revNum, costNum) : null
  const profit = hasInput ? revNum - costNum : null
  const marginFormatted = margin !== null ? fmt(margin) : null
  const profitFormatted = profit !== null ? (Number.isInteger(profit) ? profit.toString() : profit.toFixed(2).replace(/\.?0+$/, "")) : null

  const quickAnswer =
    hasInput && margin !== null && profit !== null
      ? `Gross profit is $${profitFormatted} — a ${marginFormatted}% profit margin`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField label="Revenue (Selling Price)" value={revenue} onChange={setRevenue} placeholder="e.g. 150" suffix="$" />
        <InputField label="Cost" value={cost} onChange={setCost} placeholder="e.g. 100" suffix="$" />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-4">
        <ResultBlock label="Profit Margin" value={marginFormatted !== null ? `${marginFormatted}%` : null} />
        <ResultBlock label="Gross Profit" value={profitFormatted !== null ? `$${profitFormatted}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
