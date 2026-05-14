"use client"

import { useState } from "react"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import { fmt } from "@/lib/calculators/utils"

export default function DecimalToPercentWidget() {
  const [decimal, setDecimal] = useState("")

  const num = parseFloat(decimal)
  const isValid = decimal.trim() !== "" && !isNaN(num)
  const pct = isValid ? num * 100 : null

  const quickAnswer = pct !== null ? `${decimal} = ${fmt(pct)}%` : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <InputField
        label="Decimal"
        value={decimal}
        onChange={setDecimal}
        placeholder="e.g. 0.75"
        autoFocus
      />
      <div className="mt-5">
        <ResultBlock label="Percentage" value={pct !== null ? `${fmt(pct)}%` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
