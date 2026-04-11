"use client"

import { useState } from "react"
import { monthlyPayment } from "@/lib/calculators/finance"
import { inputError, isValid, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function LoanPaymentCalculatorWidget() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [months, setMonths] = useState("")

  const principalError = inputError(principal)
  const rateError = inputError(rate)
  const monthsError = inputError(months)
  const hasInput = isValid(principal) && isValid(rate) && isValid(months)

  const monthly = hasInput ? monthlyPayment(parseFloat(principal), parseFloat(rate), parseFloat(months)) : null
  const totalPaid = hasInput && monthly !== null ? monthly * parseFloat(months) : null
  const totalInterest = hasInput && totalPaid !== null ? totalPaid - parseFloat(principal) : null

  const quickAnswer = hasInput && monthly !== null && totalInterest !== null
    ? `$${principal} loan at ${rate}% over ${months} months — $${fmtMoney(monthly)}/month, $${fmtMoney(totalInterest)} total interest`
    : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-3 gap-4">
        <InputField
          label="Loan Amount ($)"
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
          placeholder="e.g. 6"
          suffix="%"
          error={rateError}
        />
        <InputField
          label="Term (months)"
          value={months}
          onChange={setMonths}
          placeholder="e.g. 60"
          error={monthsError}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Monthly Payment" value={monthly !== null ? `$${fmtMoney(monthly)}` : null} />
        <ResultBlock label="Total Interest" value={totalInterest !== null ? `$${fmtMoney(totalInterest)}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
