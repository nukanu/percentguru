"use client"

import { useState } from "react"
import { percentageError } from "@/lib/calculators/percentage"
import { inputError, isValid, fmt } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function PercentageErrorWidget() {
  const [experimental, setExperimental] = useState("")
  const [theoretical, setTheoretical] = useState("")

  const expError = inputError(experimental)
  const theoError = inputError(theoretical)
  const hasInput = isValid(experimental) && isValid(theoretical)

  const result = hasInput ? percentageError(parseFloat(experimental), parseFloat(theoretical)) : null
  const resultFormatted = result !== null ? fmt(result) : null
  const quickAnswer = hasInput && result !== null
    ? `The percentage error is ${resultFormatted}%`
    : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Experimental Value"
          value={experimental}
          onChange={setExperimental}
          placeholder="e.g. 9.8 (measured)"
          autoFocus
          error={expError}
        />
        <InputField
          label="Theoretical Value"
          value={theoretical}
          onChange={setTheoretical}
          placeholder="e.g. 10 (expected)"
          error={theoError}
        />
      </div>
      <div className="mt-5">
        <ResultBlock label="Percentage Error" value={resultFormatted !== null ? `${resultFormatted}%` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
