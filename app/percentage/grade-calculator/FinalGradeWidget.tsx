"use client"

import { useState } from "react"
import { neededFinalScore } from "@/lib/calculators/percentage"
import { inputError, isValid, fmt } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import ShareResultButton from "@/components/calculator/ShareResultButton"
import usePrefillFromUrl from "@/components/calculator/usePrefillFromUrl"

export default function FinalGradeWidget() {
  const [current, setCurrent] = useState("")
  const [desired, setDesired] = useState("")
  const [weight, setWeight] = useState("")

  usePrefillFromUrl({ c: setCurrent, d: setDesired, w: setWeight })

  const weightNum = isValid(weight) ? parseFloat(weight) : null
  const weightRangeError =
    weightNum !== null && (weightNum <= 0 || weightNum > 100)
      ? "Weight must be between 1 and 100"
      : undefined
  const weightError = inputError(weight) ?? weightRangeError

  const hasInput =
    isValid(current) && isValid(desired) && weightNum !== null && !weightRangeError

  let needed: number | null = null
  let display: string | null = null
  let verdict: string | null = null

  if (hasInput && weightNum !== null) {
    needed = neededFinalScore(parseFloat(current), parseFloat(desired), weightNum)
    const neededFmt = fmt(needed, 2)

    if (needed > 100) {
      display = `${neededFmt}%`
      verdict = `You'd need ${neededFmt}% on the final to finish with ${desired}% — not possible without extra credit. The best you can reach with a perfect final is ${fmt(parseFloat(current) * (1 - weightNum / 100) + weightNum, 2)}%.`
    } else if (needed <= 0) {
      display = "0%"
      verdict = `Your ${desired}% is already secured — even a 0 on the final leaves you at ${fmt(parseFloat(current) * (1 - weightNum / 100), 2)}% or better. Anything you score only adds to it.`
    } else {
      display = `${neededFmt}%`
      verdict = `You need at least ${neededFmt}% on the final to finish the course with ${desired}%, given your current ${current}% and a final worth ${weight}% of the grade.`
    }
  }

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-3 gap-4">
        <InputField
          label="Current Grade"
          value={current}
          onChange={setCurrent}
          placeholder="e.g. 85"
          suffix="%"
          error={inputError(current)}
        />
        <InputField
          label="Grade You Want"
          value={desired}
          onChange={setDesired}
          placeholder="e.g. 90"
          suffix="%"
          error={inputError(desired)}
        />
        <InputField
          label="Final Exam Weight"
          value={weight}
          onChange={setWeight}
          placeholder="e.g. 40"
          suffix="%"
          error={weightError}
        />
      </div>
      <p className="text-xs text-gray-500 mt-3">
        The final exam weight is how much of your overall grade the final counts for — check your syllabus. Your current grade covers everything else.
      </p>
      <div className="mt-5">
        <ResultBlock label="Needed on the Final" value={display} />
      </div>
      <QuickAnswer text={verdict} />
      {verdict && <ShareResultButton params={{ c: current, d: desired, w: weight }} />}
    </div>
  )
}
