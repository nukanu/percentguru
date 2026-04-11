"use client"

import { useState } from "react"
import { whatIsXPercentOfY } from "@/lib/calculators/percentage"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function PercentageCalculatorWidget() {
  const [x, setX] = useState("")
  const [y, setY] = useState("")

  const xNum = parseFloat(x)
  const yNum = parseFloat(y)
  const hasInput = !isNaN(xNum) && !isNaN(yNum)
  const result = hasInput ? whatIsXPercentOfY(xNum, yNum) : null
  const resultFormatted =
    result !== null
      ? Number.isInteger(result)
        ? result.toString()
        : result.toFixed(4).replace(/\.?0+$/, "")
      : null

  const quickAnswer =
    hasInput && result !== null
      ? `${x}% of ${y} is ${resultFormatted}`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField label="Percentage (%)" value={x} onChange={setX} placeholder="e.g. 25" suffix="%" />
        <InputField label="Number" value={y} onChange={setY} placeholder="e.g. 200" />
      </div>
      <ResultBlock label="Result" value={resultFormatted} />
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
