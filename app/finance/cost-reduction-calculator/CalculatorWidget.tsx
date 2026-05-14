"use client"

import { useState } from "react"
import { costReductionPct } from "@/lib/calculators/percentage"
import { inputError, isValid, fmt, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function CostReductionWidget() {
  const [original, setOriginal] = useState("")
  const [newCost, setNewCost] = useState("")

  const origError = inputError(original)
  const newError = inputError(newCost)
  const hasInput = isValid(original) && isValid(newCost)

  const savings = hasInput ? parseFloat(original) - parseFloat(newCost) : null
  const reductionPct = hasInput ? costReductionPct(parseFloat(original), parseFloat(newCost)) : null

  const pctFormatted = reductionPct !== null ? fmt(reductionPct) : null

  const quickAnswer =
    hasInput && savings !== null && pctFormatted !== null
      ? `Reduced from $${original} to $${newCost} — saving $${fmtMoney(savings)} (${pctFormatted}% reduction)`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Original Cost"
          value={original}
          onChange={setOriginal}
          placeholder="e.g. 5000"
          suffix="$"
          autoFocus
          error={origError}
        />
        <InputField
          label="New Cost"
          value={newCost}
          onChange={setNewCost}
          placeholder="e.g. 3800"
          suffix="$"
          error={newError}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Savings" value={savings !== null ? `$${fmtMoney(savings)}` : null} />
        <ResultBlock label="Cost Reduction" value={pctFormatted !== null ? `${pctFormatted}%` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
