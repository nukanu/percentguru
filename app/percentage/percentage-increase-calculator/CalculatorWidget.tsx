"use client"

import { useState } from "react"
import { percentageIncrease } from "@/lib/calculators/percentage"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function PercentageIncreaseWidget() {
  const [original, setOriginal] = useState("")
  const [newValue, setNewValue] = useState("")

  const origNum = parseFloat(original)
  const newNum = parseFloat(newValue)
  const hasInput = !isNaN(origNum) && !isNaN(newNum)
  const result = hasInput ? percentageIncrease(origNum, newNum) : null
  const resultFormatted =
    result !== null
      ? Number.isInteger(result)
        ? result.toString()
        : result.toFixed(4).replace(/\.?0+$/, "")
      : null

  const quickAnswer =
    hasInput && result !== null
      ? `${original} increased to ${newValue} is a ${resultFormatted}% increase`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField label="Original Value" value={original} onChange={setOriginal} placeholder="e.g. 80" />
        <InputField label="New Value" value={newValue} onChange={setNewValue} placeholder="e.g. 100" />
      </div>
      <ResultBlock label="Percentage Increase" value={resultFormatted !== null ? `${resultFormatted}%` : null} />
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
