"use client"

import { useState } from "react"
import { reversePercentage } from "@/lib/calculators/percentage"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function ReversePercentageWidget() {
  const [percentage, setPercentage] = useState("")
  const [result, setResult] = useState("")

  const pctNum = parseFloat(percentage)
  const resNum = parseFloat(result)
  const hasInput = !isNaN(pctNum) && !isNaN(resNum)
  const original = hasInput ? reversePercentage(pctNum, resNum) : null
  const originalFormatted =
    original !== null
      ? Number.isInteger(original)
        ? original.toString()
        : original.toFixed(4).replace(/\.?0+$/, "")
      : null

  const quickAnswer =
    hasInput && original !== null
      ? `${result} is ${percentage}% of ${originalFormatted}`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField label="Percentage (%)" value={percentage} onChange={setPercentage} placeholder="e.g. 20" suffix="%" />
        <InputField label="Result (known value)" value={result} onChange={setResult} placeholder="e.g. 50" />
      </div>
      <ResultBlock label="Original Value" value={originalFormatted} />
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
