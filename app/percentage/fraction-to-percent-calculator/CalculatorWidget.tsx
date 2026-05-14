"use client"

import { useState } from "react"
import { fractionToPercent } from "@/lib/calculators/percentage"
import { inputError, isValid, fmt } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function FractionToPercentWidget() {
  const [numerator, setNumerator] = useState("")
  const [denominator, setDenominator] = useState("")

  const numError = inputError(numerator)
  const denError = inputError(denominator)
  const hasInput = isValid(numerator) && isValid(denominator)

  const pct = hasInput ? fractionToPercent(parseFloat(numerator), parseFloat(denominator)) : null
  const decimal = hasInput && parseFloat(denominator) !== 0 ? parseFloat(numerator) / parseFloat(denominator) : null

  const quickAnswer =
    hasInput && pct !== null
      ? `${numerator}/${denominator} = ${fmt(pct)}%`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <InputField
            label="Numerator (top)"
            value={numerator}
            onChange={setNumerator}
            placeholder="e.g. 3"
            autoFocus
            error={numError}
          />
        </div>
        <span className="text-2xl text-gray-400 mt-5">/</span>
        <div className="flex-1">
          <InputField
            label="Denominator (bottom)"
            value={denominator}
            onChange={setDenominator}
            placeholder="e.g. 8"
            error={denError}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Percentage" value={pct !== null ? `${fmt(pct)}%` : null} />
        <ResultBlock label="Decimal" value={decimal !== null ? fmt(decimal) : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
