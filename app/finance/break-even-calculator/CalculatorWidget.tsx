"use client"

import { useState } from "react"
import { breakEvenUnits } from "@/lib/calculators/finance"
import { inputError, isValid, fmt, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function BreakEvenCalculatorWidget() {
  const [fixedCosts, setFixedCosts] = useState("")
  const [sellingPrice, setSellingPrice] = useState("")
  const [variableCost, setVariableCost] = useState("")

  const fixedError = inputError(fixedCosts)
  const sellingError = inputError(sellingPrice)
  const variableError = inputError(variableCost)
  const hasInput = isValid(fixedCosts) && isValid(sellingPrice) && isValid(variableCost)

  const units = hasInput ? breakEvenUnits(parseFloat(fixedCosts), parseFloat(sellingPrice), parseFloat(variableCost)) : null
  const revenue = hasInput && units !== null && isFinite(units) ? units * parseFloat(sellingPrice) : null
  const unitsFormatted = units !== null && isFinite(units) ? fmt(Math.ceil(units)) : null
  const revenueFormatted = revenue !== null ? fmtMoney(revenue) : null

  const contribution = hasInput ? parseFloat(sellingPrice) - parseFloat(variableCost) : null
  const isNegativeContribution = contribution !== null && contribution <= 0

  const quickAnswer =
    isNegativeContribution
      ? "Selling price must exceed variable cost per unit to reach break-even"
      : hasInput && unitsFormatted !== null && revenueFormatted !== null
      ? `Break-even at ${unitsFormatted} units — $${revenueFormatted} in revenue`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-3 gap-4">
        <InputField
          label="Fixed Costs ($)"
          value={fixedCosts}
          onChange={setFixedCosts}
          placeholder="e.g. 5000"
          suffix="$"
          autoFocus
          error={fixedError}
        />
        <InputField
          label="Selling Price / Unit ($)"
          value={sellingPrice}
          onChange={setSellingPrice}
          placeholder="e.g. 50"
          suffix="$"
          error={sellingError}
        />
        <InputField
          label="Variable Cost / Unit ($)"
          value={variableCost}
          onChange={setVariableCost}
          placeholder="e.g. 20"
          suffix="$"
          error={variableError}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Break-even Units" value={unitsFormatted ?? null} />
        <ResultBlock label="Break-even Revenue" value={revenueFormatted !== null ? `$${revenueFormatted}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
