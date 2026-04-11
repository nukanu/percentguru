"use client"

import { useState } from "react"
import { roi } from "@/lib/calculators/finance"
import { inputError, isValid, fmt, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function ROICalculatorWidget() {
  const [initial, setInitial] = useState("")
  const [final, setFinal] = useState("")

  const initialError = inputError(initial)
  const finalError = inputError(final)
  const hasInput = isValid(initial) && isValid(final)

  const roiValue = hasInput ? roi(parseFloat(initial), parseFloat(final)) : null
  const netGain = hasInput ? parseFloat(final) - parseFloat(initial) : null
  const roiFormatted = roiValue !== null ? fmt(roiValue) : null
  const gainFormatted = netGain !== null ? fmtMoney(Math.abs(netGain)) : null
  const direction = netGain !== null && netGain >= 0 ? "gain" : "loss"

  const quickAnswer = hasInput && roiValue !== null && netGain !== null
    ? `$${initial} invested → $${final} returned — a ${Math.abs(parseFloat(roiFormatted!))}% ROI (${direction} of $${gainFormatted})`
    : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Initial Investment"
          value={initial}
          onChange={setInitial}
          placeholder="e.g. 1000"
          suffix="$"
          autoFocus
          error={initialError}
        />
        <InputField
          label="Final Value"
          value={final}
          onChange={setFinal}
          placeholder="e.g. 1500"
          suffix="$"
          error={finalError}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="ROI" value={roiFormatted !== null ? `${roiFormatted}%` : null} />
        <ResultBlock label="Net Gain / Loss" value={gainFormatted !== null ? `${netGain! >= 0 ? "+" : "-"}$${gainFormatted}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
