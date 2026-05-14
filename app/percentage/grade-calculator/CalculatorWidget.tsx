"use client"

import { useState } from "react"
import { gradePercentage, letterGrade } from "@/lib/calculators/percentage"
import { inputError, isValid, fmt } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function GradeCalculatorWidget() {
  const [score, setScore] = useState("")
  const [total, setTotal] = useState("")

  const scoreError = inputError(score)
  const totalError = inputError(total)
  const hasInput = isValid(score) && isValid(total)

  const pct = hasInput ? gradePercentage(parseFloat(score), parseFloat(total)) : null
  const grade = pct !== null ? letterGrade(pct) : null
  const pctFormatted = pct !== null ? fmt(pct) : null

  const quickAnswer =
    hasInput && pct !== null && grade !== null
      ? `${score} out of ${total} is ${pctFormatted}% — ${grade}`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Your Score"
          value={score}
          onChange={setScore}
          placeholder="e.g. 38"
          autoFocus
          error={scoreError}
        />
        <InputField
          label="Total Possible"
          value={total}
          onChange={setTotal}
          placeholder="e.g. 45"
          error={totalError}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Percentage" value={pctFormatted !== null ? `${pctFormatted}%` : null} />
        <ResultBlock label="Letter Grade" value={grade} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
