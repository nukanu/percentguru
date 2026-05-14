"use client"

import { useState } from "react"
import { salaryRaiseAmount, newSalary } from "@/lib/calculators/percentage"
import { inputError, isValid, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function SalaryIncreaseWidget() {
  const [current, setCurrent] = useState("")
  const [raise, setRaise] = useState("")

  const currentError = inputError(current)
  const raiseError = inputError(raise)
  const hasInput = isValid(current) && isValid(raise)

  const raiseAmount = hasInput ? salaryRaiseAmount(parseFloat(current), parseFloat(raise)) : null
  const newSal = hasInput ? newSalary(parseFloat(current), parseFloat(raise)) : null

  const quickAnswer =
    hasInput && raiseAmount !== null && newSal !== null
      ? `A ${raise}% raise on $${current} adds $${fmtMoney(raiseAmount)}/year — new salary $${fmtMoney(newSal)}`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Current Salary"
          value={current}
          onChange={setCurrent}
          placeholder="e.g. 65000"
          suffix="$"
          autoFocus
          error={currentError}
        />
        <InputField
          label="Raise Percentage"
          value={raise}
          onChange={setRaise}
          placeholder="e.g. 5"
          suffix="%"
          error={raiseError}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Raise Amount" value={raiseAmount !== null ? `$${fmtMoney(raiseAmount)}` : null} />
        <ResultBlock label="New Salary" value={newSal !== null ? `$${fmtMoney(newSal)}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
