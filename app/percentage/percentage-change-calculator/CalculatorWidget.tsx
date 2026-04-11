"use client"

import { useState } from "react"
import { percentageChange } from "@/lib/calculators/percentage"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function PercentageChangeWidget() {
  const [original, setOriginal] = useState("")
  const [newValue, setNewValue] = useState("")

  const origNum = parseFloat(original)
  const newNum = parseFloat(newValue)
  const hasInput = !isNaN(origNum) && !isNaN(newNum)
  const result = hasInput ? percentageChange(origNum, newNum) : null
  const resultFormatted =
    result !== null
      ? Number.isInteger(result)
        ? result.toString()
        : result.toFixed(4).replace(/\.?0+$/, "")
      : null

  const isIncrease = result !== null && result >= 0
  const quickAnswer =
    hasInput && result !== null
      ? `From ${original} to ${newValue} is a ${resultFormatted}% ${isIncrease ? "increase" : "decrease"}`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField label="Original Value" value={original} onChange={setOriginal} placeholder="e.g. 50" />
        <InputField label="New Value" value={newValue} onChange={setNewValue} placeholder="e.g. 75" />
      </div>
      <ResultBlock label="Percentage Change" value={resultFormatted !== null ? `${resultFormatted}%` : null} />
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
