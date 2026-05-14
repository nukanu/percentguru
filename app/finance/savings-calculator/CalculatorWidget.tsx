"use client"

import { useState } from "react"
import { savingsFutureValue } from "@/lib/calculators/finance"
import { inputError, isValid, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function SavingsCalculatorWidget() {
  const [principal, setPrincipal] = useState("")
  const [monthly, setMonthly] = useState("")
  const [rate, setRate] = useState("")
  const [years, setYears] = useState("")

  const principalError = inputError(principal)
  const monthlyError = inputError(monthly)
  const rateError = inputError(rate)
  const yearsError = inputError(years)

  const hasInput = isValid(principal) && isValid(monthly) && isValid(rate) && isValid(years)

  const futureValue = hasInput
    ? savingsFutureValue(
        parseFloat(principal),
        parseFloat(monthly),
        parseFloat(rate),
        parseFloat(years)
      )
    : null

  const totalContributions = hasInput
    ? parseFloat(principal) + parseFloat(monthly) * parseFloat(years) * 12
    : null

  const interestEarned =
    futureValue !== null && totalContributions !== null
      ? futureValue - totalContributions
      : null

  const quickAnswer =
    futureValue !== null && interestEarned !== null
      ? `$${principal} initial, $${monthly}/month at ${rate}% for ${years} years — $${fmtMoney(futureValue)} total ($${fmtMoney(interestEarned)} interest earned)`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Initial Deposit ($)"
          value={principal}
          onChange={setPrincipal}
          placeholder="e.g. 5000"
          suffix="$"
          autoFocus
          error={principalError}
        />
        <InputField
          label="Monthly Contribution ($)"
          value={monthly}
          onChange={setMonthly}
          placeholder="e.g. 200"
          suffix="$"
          error={monthlyError}
        />
        <InputField
          label="Annual Rate (%)"
          value={rate}
          onChange={setRate}
          placeholder="e.g. 4"
          suffix="%"
          error={rateError}
        />
        <InputField
          label="Years"
          value={years}
          onChange={setYears}
          placeholder="e.g. 10"
          error={yearsError}
        />
      </div>
      <div className="grid sm:grid-cols-3 gap-3 mt-5">
        <ResultBlock label="Future Value" value={futureValue !== null ? `$${fmtMoney(futureValue)}` : null} />
        <ResultBlock label="Total Contributions" value={totalContributions !== null ? `$${fmtMoney(totalContributions)}` : null} />
        <ResultBlock label="Interest Earned" value={interestEarned !== null ? `$${fmtMoney(interestEarned)}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
