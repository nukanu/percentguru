"use client"

import { useState } from "react"
import { compoundInterestTotal, compoundInterestEarned } from "@/lib/calculators/finance"
import { inputError, isValid, fmtMoney, fmt } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

const FREQUENCIES = [
  { label: "Annually", value: 1 },
  { label: "Quarterly", value: 4 },
  { label: "Monthly", value: 12 },
  { label: "Daily", value: 365 },
]

export default function CompoundInterestWidget() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [years, setYears] = useState("")
  const [compounds, setCompounds] = useState(12)

  const principalError = inputError(principal)
  const rateError = inputError(rate)
  const yearsError = inputError(years)
  const hasInput = isValid(principal) && isValid(rate) && isValid(years)

  const total = hasInput
    ? compoundInterestTotal(parseFloat(principal), parseFloat(rate), compounds, parseFloat(years))
    : null
  const earned = hasInput
    ? compoundInterestEarned(parseFloat(principal), parseFloat(rate), compounds, parseFloat(years))
    : null
  const growthPct = hasInput && earned !== null
    ? fmt((earned / parseFloat(principal)) * 100)
    : null

  const freqLabel = FREQUENCIES.find((f) => f.value === compounds)?.label.toLowerCase() ?? ""

  const quickAnswer =
    hasInput && total !== null && earned !== null
      ? `$${principal} at ${rate}% compounded ${freqLabel} for ${years} years — $${fmtMoney(earned)} interest, $${fmtMoney(total)} total`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-3 gap-4">
        <InputField
          label="Principal ($)"
          value={principal}
          onChange={setPrincipal}
          placeholder="e.g. 10000"
          suffix="$"
          autoFocus
          error={principalError}
        />
        <InputField
          label="Annual Rate (%)"
          value={rate}
          onChange={setRate}
          placeholder="e.g. 7"
          suffix="%"
          error={rateError}
        />
        <InputField
          label="Time (years)"
          value={years}
          onChange={setYears}
          placeholder="e.g. 10"
          error={yearsError}
        />
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Compounding frequency</p>
        <div className="flex gap-2 flex-wrap">
          {FREQUENCIES.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setCompounds(f.value)}
              className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                compounds === f.value
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mt-5">
        <ResultBlock label="Interest Earned" value={earned !== null ? `$${fmtMoney(earned)}` : null} />
        <ResultBlock label="Total Amount" value={total !== null ? `$${fmtMoney(total)}` : null} />
        <ResultBlock label="Total Growth" value={growthPct !== null ? `${growthPct}%` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
