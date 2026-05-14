"use client"

import { useState } from "react"
import { cagr, totalPercentageChange } from "@/lib/calculators/percentage"
import { inputError, isValid, fmt } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function AnnualChangeWidget() {
  const [startVal, setStartVal] = useState("")
  const [endVal, setEndVal] = useState("")
  const [years, setYears] = useState("")

  const startError = inputError(startVal)
  const endError = inputError(endVal)
  const yearsError = inputError(years)
  const hasInput = isValid(startVal) && isValid(endVal) && isValid(years)

  const cagrResult = hasInput ? cagr(parseFloat(startVal), parseFloat(endVal), parseFloat(years)) : null
  const totalChange = hasInput ? totalPercentageChange(parseFloat(startVal), parseFloat(endVal)) : null

  const cagrFormatted = cagrResult !== null ? fmt(cagrResult) : null
  const totalFormatted = totalChange !== null ? fmt(totalChange) : null

  const quickAnswer =
    hasInput && cagrFormatted !== null
      ? `From ${startVal} to ${endVal} over ${years} years — CAGR ${cagrFormatted}% per year (${totalFormatted}% total)`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-3 gap-4">
        <InputField
          label="Starting Value"
          value={startVal}
          onChange={setStartVal}
          placeholder="e.g. 10000"
          autoFocus
          error={startError}
        />
        <InputField
          label="Ending Value"
          value={endVal}
          onChange={setEndVal}
          placeholder="e.g. 14000"
          error={endError}
        />
        <InputField
          label="Number of Years"
          value={years}
          onChange={setYears}
          placeholder="e.g. 3"
          error={yearsError}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Annual Growth Rate (CAGR)" value={cagrFormatted !== null ? `${cagrFormatted}%` : null} />
        <ResultBlock label="Total Change" value={totalFormatted !== null ? `${totalFormatted}%` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
