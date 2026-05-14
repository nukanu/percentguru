"use client"

import { useState } from "react"
import { monthlyPayment } from "@/lib/calculators/finance"
import { inputError, isValid, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function MortgageCalculatorWidget() {
  const [homePrice, setHomePrice] = useState("")
  const [downPayment, setDownPayment] = useState("")
  const [rate, setRate] = useState("")
  const [years, setYears] = useState("")

  const homePriceError = inputError(homePrice)
  const downPaymentError = inputError(downPayment)
  const rateError = inputError(rate)
  const yearsError = inputError(years)

  const hasInput =
    isValid(homePrice) && isValid(downPayment) && isValid(rate) && isValid(years)

  const loanAmount = hasInput
    ? parseFloat(homePrice) - parseFloat(downPayment)
    : null

  const monthly =
    hasInput && loanAmount !== null && loanAmount > 0
      ? monthlyPayment(loanAmount, parseFloat(rate), parseFloat(years) * 12)
      : null

  const totalPaid = monthly !== null ? monthly * parseFloat(years) * 12 : null
  const totalInterest = totalPaid !== null && loanAmount !== null ? totalPaid - loanAmount : null

  const quickAnswer =
    monthly !== null && totalInterest !== null
      ? `$${parseFloat(homePrice).toLocaleString()} home, $${parseFloat(downPayment).toLocaleString()} down, ${rate}% for ${years} years — $${fmtMoney(monthly)}/month, $${fmtMoney(totalInterest)} total interest`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Home Price ($)"
          value={homePrice}
          onChange={setHomePrice}
          placeholder="e.g. 300000"
          suffix="$"
          autoFocus
          error={homePriceError}
        />
        <InputField
          label="Down Payment ($)"
          value={downPayment}
          onChange={setDownPayment}
          placeholder="e.g. 60000"
          suffix="$"
          error={downPaymentError}
        />
        <InputField
          label="Annual Rate (%)"
          value={rate}
          onChange={setRate}
          placeholder="e.g. 6.5"
          suffix="%"
          error={rateError}
        />
        <InputField
          label="Loan Term (years)"
          value={years}
          onChange={setYears}
          placeholder="e.g. 30"
          error={yearsError}
        />
      </div>
      {loanAmount !== null && loanAmount > 0 && (
        <p className="text-xs text-gray-500 mt-3">Loan amount: ${loanAmount.toLocaleString()}</p>
      )}
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Monthly Payment" value={monthly !== null ? `$${fmtMoney(monthly)}` : null} />
        <ResultBlock label="Total Interest" value={totalInterest !== null ? `$${fmtMoney(totalInterest)}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
