"use client"

import { useState } from "react"
import { whatIsXPercentOfY } from "@/lib/calculators/percentage"
import { inputError, isValid, fmt } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function WhatIsXPercentOfYWidget() {
  const [x, setX] = useState("")
  const [y, setY] = useState("")

  const xError = inputError(x)
  const yError = inputError(y)
  const hasInput = isValid(x) && isValid(y)

  const result = hasInput ? whatIsXPercentOfY(parseFloat(x), parseFloat(y)) : null
  const resultFormatted = result !== null ? fmt(result) : null
  const quickAnswer = hasInput && result !== null
    ? `${x}% of ${y} is ${resultFormatted}`
    : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Percentage (%)"
          value={x}
          onChange={setX}
          placeholder="e.g. 25 for 25%"
          suffix="%"
          autoFocus
          error={xError}
        />
        <InputField
          label="Number"
          value={y}
          onChange={setY}
          placeholder="e.g. 200"
          error={yError}
        />
      </div>
      <div className="mt-5">
        <ResultBlock label="Answer" value={resultFormatted} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
