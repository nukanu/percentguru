"use client"

import { useState } from "react"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import { fmt } from "@/lib/calculators/utils"

export default function PercentToDecimalWidget() {
  const [percent, setPercent] = useState("")

  const num = parseFloat(percent)
  const isValid = percent.trim() !== "" && !isNaN(num)
  const decimal = isValid ? num / 100 : null

  const quickAnswer = decimal !== null ? `${percent}% = ${fmt(decimal)}` : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <InputField
        label="Percentage"
        value={percent}
        onChange={setPercent}
        placeholder="e.g. 75"
        suffix="%"
        autoFocus
      />
      <div className="mt-5">
        <ResultBlock label="Decimal" value={decimal !== null ? fmt(decimal) : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
