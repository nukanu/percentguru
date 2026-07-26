"use client"

import { useState } from "react"
import { compoundedSalary, cumulativeEarnings, realRaisePct } from "@/lib/calculators/percentage"
import { inputError, isValid, fmt, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import ShareResultButton from "@/components/calculator/ShareResultButton"
import usePrefillFromUrl from "@/components/calculator/usePrefillFromUrl"

export default function RaiseComparisonWidget() {
  const [salary, setSalary] = useState("")
  const [raiseA, setRaiseA] = useState("")
  const [raiseB, setRaiseB] = useState("")
  const [years, setYears] = useState("")
  const [inflation, setInflation] = useState("")

  usePrefillFromUrl({ s: setSalary, a: setRaiseA, b: setRaiseB, y: setYears, i: setInflation })

  const yearsNum = isValid(years) ? Math.floor(parseFloat(years)) : null
  const yearsRangeError =
    yearsNum !== null && (yearsNum < 1 || yearsNum > 50) ? "Enter between 1 and 50 years" : undefined
  const yearsError = inputError(years) ?? yearsRangeError

  const hasInflation = isValid(inflation)
  const hasInput =
    isValid(salary) && isValid(raiseA) && isValid(raiseB) &&
    yearsNum !== null && !yearsRangeError &&
    (inflation.trim() === "" || hasInflation)

  let salaryA: number | null = null
  let salaryB: number | null = null
  let extraTotal: number | null = null
  let verdict: string | null = null

  if (hasInput && yearsNum !== null) {
    const s = parseFloat(salary)
    const a = parseFloat(raiseA)
    const b = parseFloat(raiseB)
    salaryA = compoundedSalary(s, a, yearsNum)
    salaryB = compoundedSalary(s, b, yearsNum)
    const totalA = cumulativeEarnings(s, a, yearsNum)
    const totalB = cumulativeEarnings(s, b, yearsNum)
    extraTotal = Math.abs(totalB - totalA)

    const [hi, lo, hiLabel] = salaryB >= salaryA ? [salaryB, salaryA, "B"] : [salaryA, salaryB, "A"]
    const yearWord = yearsNum === 1 ? "year" : "years"
    verdict =
      a === b
        ? `Both scenarios are identical: after ${yearsNum} ${yearWord} of ${a}% annual raises you'd earn $${fmtMoney(salaryA)}.`
        : `After ${yearsNum} ${yearWord}, scenario ${hiLabel} pays $${fmtMoney(hi)} vs $${fmtMoney(lo)} — a gap of $${fmtMoney(hi - lo)} per year, and $${fmtMoney(extraTotal)} more in total pay along the way.`

    if (hasInflation) {
      const inf = parseFloat(inflation)
      const realA = realRaisePct(a, inf)
      const realB = realRaisePct(b, inf)
      verdict += ` Adjusted for ${inflation}% inflation, the real raises are ${fmt(realA, 2)}% (A) and ${fmt(realB, 2)}% (B) per year${Math.min(realA, realB) < 0 ? " — a negative real raise means lost purchasing power" : ""}.`
    }
  }

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Current Salary"
          value={salary}
          onChange={setSalary}
          placeholder="e.g. 60000"
          suffix="$"
          error={inputError(salary)}
        />
        <InputField
          label="Years to Project"
          value={years}
          onChange={setYears}
          placeholder="e.g. 5"
          error={yearsError}
        />
        <InputField
          label="Annual Raise — Scenario A"
          value={raiseA}
          onChange={setRaiseA}
          placeholder="e.g. 3"
          suffix="%"
          error={inputError(raiseA)}
        />
        <InputField
          label="Annual Raise — Scenario B"
          value={raiseB}
          onChange={setRaiseB}
          placeholder="e.g. 5"
          suffix="%"
          error={inputError(raiseB)}
        />
        <InputField
          label="Expected Inflation (optional)"
          value={inflation}
          onChange={setInflation}
          placeholder="e.g. 3"
          suffix="%"
          error={inputError(inflation)}
        />
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Assumes the raise repeats every year, compounding on the new salary each time — that compounding is why a small percentage difference grows into a large gap.
      </p>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Scenario A — Final Salary" value={salaryA !== null ? `$${fmtMoney(salaryA)}` : null} />
        <ResultBlock label="Scenario B — Final Salary" value={salaryB !== null ? `$${fmtMoney(salaryB)}` : null} />
        <ResultBlock label="Cumulative Pay Gap" value={extraTotal !== null ? `$${fmtMoney(extraTotal)}` : null} />
      </div>
      <QuickAnswer text={verdict} />
      {verdict && (
        <ShareResultButton params={{ s: salary, a: raiseA, b: raiseB, y: years, i: inflation }} />
      )}
    </div>
  )
}
