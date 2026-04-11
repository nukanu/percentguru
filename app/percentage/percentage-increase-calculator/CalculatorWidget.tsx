"use client"

import { useState } from "react"
import { percentageIncrease } from "@/lib/calculators/percentage"
import { inputError, isValid, fmt } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function PercentageIncreaseWidget() {
  const [original, setOriginal] = useState("")
  const [newValue, setNewValue] = useState("")

  const origError = inputError(original)
  const newError = inputError(newValue)
  const hasInput = isValid(original) && isValid(newValue)

  const result = hasInput ? percentageIncrease(parseFloat(original), parseFloat(newValue)) : null
  const resultFormatted = result !== null ? fmt(result) : null
  const direction = result !== null && result >= 0 ? "increase" : "decrease"
  const absFormatted = result !== null ? fmt(Math.abs(result)) : null
  const quickAnswer = hasInput && result !== null
    ? `From ${original} to ${newValue} is a ${absFormatted}% ${direction}`
    : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Original Value"
          value={original}
          onChange={setOriginal}
          placeholder="e.g. 80"
          autoFocus
          error={origError}
        />
        <InputField
          label="New Value"
          value={newValue}
          onChange={setNewValue}
          placeholder="e.g. 100"
          error={newError}
        />
      </div>
      <div className="mt-5">
        <ResultBlock label="Percentage Increase" value={resultFormatted !== null ? `${resultFormatted}%` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
