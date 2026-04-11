"use client"

import { useState } from "react"
import { reversePercentage } from "@/lib/calculators/percentage"
import { inputError, isValid, fmt } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function ReversePercentageWidget() {
  const [percentage, setPercentage] = useState("")
  const [result, setResult] = useState("")

  const pctError = inputError(percentage)
  const resError = inputError(result)
  const hasInput = isValid(percentage) && isValid(result)

  const original = hasInput ? reversePercentage(parseFloat(percentage), parseFloat(result)) : null
  const originalFormatted = original !== null ? fmt(original) : null
  const quickAnswer = hasInput && original !== null
    ? `${result} is ${percentage}% of ${originalFormatted}`
    : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Percentage (%)"
          value={percentage}
          onChange={setPercentage}
          placeholder="e.g. 20 for 20%"
          suffix="%"
          autoFocus
          error={pctError}
        />
        <InputField
          label="Known Result"
          value={result}
          onChange={setResult}
          placeholder="e.g. 50"
          error={resError}
        />
      </div>
      <div className="mt-5">
        <ResultBlock label="Original Value" value={originalFormatted} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
