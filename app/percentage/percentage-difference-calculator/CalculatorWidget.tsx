"use client"

import { useState } from "react"
import { percentageDifference } from "@/lib/calculators/percentage"
import { inputError, isValid, fmt } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function PercentageDifferenceWidget() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")

  const aError = inputError(a)
  const bError = inputError(b)
  const hasInput = isValid(a) && isValid(b)

  const result = hasInput ? percentageDifference(parseFloat(a), parseFloat(b)) : null
  const resultFormatted = result !== null ? fmt(result) : null
  const quickAnswer = hasInput && result !== null
    ? `The percentage difference between ${a} and ${b} is ${resultFormatted}%`
    : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Value A"
          value={a}
          onChange={setA}
          placeholder="e.g. 40"
          autoFocus
          error={aError}
        />
        <InputField
          label="Value B"
          value={b}
          onChange={setB}
          placeholder="e.g. 60"
          error={bError}
        />
      </div>
      <div className="mt-5">
        <ResultBlock label="Percentage Difference" value={resultFormatted !== null ? `${resultFormatted}%` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
