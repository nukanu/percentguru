"use client"

import { useState } from "react"
import { xIsWhatPercentOfY } from "@/lib/calculators/percentage"
import { inputError, isValid, fmt } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function XIsWhatPercentOfYWidget() {
  const [x, setX] = useState("")
  const [y, setY] = useState("")

  const xError = inputError(x)
  const yError = inputError(y)
  const hasInput = isValid(x) && isValid(y)

  const result = hasInput ? xIsWhatPercentOfY(parseFloat(x), parseFloat(y)) : null
  const resultFormatted = result !== null ? fmt(result) : null
  const quickAnswer = hasInput && result !== null
    ? `${x} is ${resultFormatted}% of ${y}`
    : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Value (X)"
          value={x}
          onChange={setX}
          placeholder="e.g. 30"
          autoFocus
          error={xError}
        />
        <InputField
          label="Total (Y)"
          value={y}
          onChange={setY}
          placeholder="e.g. 200"
          error={yError}
        />
      </div>
      <div className="mt-5">
        <ResultBlock label="Answer" value={resultFormatted !== null ? `${resultFormatted}%` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
