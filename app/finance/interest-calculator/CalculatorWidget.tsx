"use client"

import { useState } from "react"
import { simpleInterest } from "@/lib/calculators/finance"
import { inputError, isValid, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function InterestCalculatorWidget() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [years, setYears] = useState("")

  const principalError = inputError(principal)
  const rateError = inputError(rate)
  const yearsError = inputError(years)
  const hasInput = isValid(principal) && isValid(rate) && isValid(years)

  const interest = hasInput ? simpleInterest(parseFloat(principal), parseFloat(rate), parseFloat(years)) : null
  const total = hasInput && interest !== null ? parseFloat(principal) + interest : null

  const quickAnswer = hasInput && interest !== null && total !== null
    ? `$${principal} at ${rate}% for ${years} year${parseFloat(years) === 1 ? "" : "s"} earns $${fmtMoney(interest)} in interest — total $${fmtMoney(total)}`
    : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-3 gap-4">
        <InputField
          label="Principal ($)"
          value={principal}
          onChange={setPrincipal}
          placeholder="e.g. 1000"
          suffix="$"
          autoFocus
          error={principalError}
        />
        <InputField
          label="Annual Rate (%)"
          value={rate}
          onChange={setRate}
          placeholder="e.g. 5"
          suffix="%"
          error={rateError}
        />
        <InputField
          label="Time (years)"
          value={years}
          onChange={setYears}
          placeholder="e.g. 3"
          error={yearsError}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Interest Earned" value={interest !== null ? `$${fmtMoney(interest)}` : null} />
        <ResultBlock label="Total Amount" value={total !== null ? `$${fmtMoney(total)}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
