"use client"

import { useState } from "react"
import { percentagePointChange, percentageChange } from "@/lib/calculators/percentage"
import { inputError, isValid, fmt } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function PercentagePointsWidget() {
  const [oldPct, setOldPct] = useState("")
  const [newPct, setNewPct] = useState("")

  const oldError = inputError(oldPct)
  const newError = inputError(newPct)
  const hasInput = isValid(oldPct) && isValid(newPct)

  const ppChange = hasInput ? percentagePointChange(parseFloat(oldPct), parseFloat(newPct)) : null
  const relativeChange = hasInput ? percentageChange(parseFloat(oldPct), parseFloat(newPct)) : null

  const ppFormatted = ppChange !== null ? fmt(Math.abs(ppChange)) : null
  const relFormatted = relativeChange !== null ? fmt(Math.abs(relativeChange)) : null
  const direction = ppChange !== null ? (ppChange >= 0 ? "increase" : "decrease") : ""

  const quickAnswer =
    hasInput && ppChange !== null && relativeChange !== null
      ? `From ${oldPct}% to ${newPct}% is a ${ppFormatted} percentage point ${direction} — but a ${relFormatted}% relative ${direction}`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Original Value (%)"
          value={oldPct}
          onChange={setOldPct}
          placeholder="e.g. 4"
          suffix="%"
          autoFocus
          error={oldError}
        />
        <InputField
          label="New Value (%)"
          value={newPct}
          onChange={setNewPct}
          placeholder="e.g. 6"
          suffix="%"
          error={newError}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock
          label="Percentage Point Change"
          value={ppFormatted !== null ? `${ppChange! >= 0 ? "+" : "−"}${ppFormatted} pp` : null}
        />
        <ResultBlock
          label="Relative % Change"
          value={relFormatted !== null ? `${relativeChange! >= 0 ? "+" : "−"}${relFormatted}%` : null}
        />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
