"use client"

import { useState } from "react"
import { xIsWhatPercentOfY } from "@/lib/calculators/percentage"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function XIsWhatPercentOfYWidget() {
  const [x, setX] = useState("")
  const [y, setY] = useState("")

  const xNum = parseFloat(x)
  const yNum = parseFloat(y)
  const hasInput = !isNaN(xNum) && !isNaN(yNum)
  const result = hasInput ? xIsWhatPercentOfY(xNum, yNum) : null
  const resultFormatted =
    result !== null
      ? Number.isInteger(result)
        ? result.toString()
        : result.toFixed(4).replace(/\.?0+$/, "")
      : null

  const quickAnswer =
    hasInput && result !== null
      ? `${x} is ${resultFormatted}% of ${y}`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField label="Value (X)" value={x} onChange={setX} placeholder="e.g. 30" />
        <InputField label="Total (Y)" value={y} onChange={setY} placeholder="e.g. 200" />
      </div>
      <ResultBlock label="Percentage" value={resultFormatted !== null ? `${resultFormatted}%` : null} />
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
