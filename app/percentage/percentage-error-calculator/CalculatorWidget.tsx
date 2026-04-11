"use client"

import { useState } from "react"
import { percentageError } from "@/lib/calculators/percentage"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function PercentageErrorWidget() {
  const [experimental, setExperimental] = useState("")
  const [theoretical, setTheoretical] = useState("")

  const expNum = parseFloat(experimental)
  const theoNum = parseFloat(theoretical)
  const hasInput = !isNaN(expNum) && !isNaN(theoNum)
  const result = hasInput ? percentageError(expNum, theoNum) : null
  const resultFormatted =
    result !== null
      ? Number.isInteger(result)
        ? result.toString()
        : result.toFixed(4).replace(/\.?0+$/, "")
      : null

  const quickAnswer =
    hasInput && result !== null
      ? `The percentage error is ${resultFormatted}%`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField label="Experimental Value" value={experimental} onChange={setExperimental} placeholder="e.g. 9.8" />
        <InputField label="Theoretical Value" value={theoretical} onChange={setTheoretical} placeholder="e.g. 10" />
      </div>
      <ResultBlock label="Percentage Error" value={resultFormatted !== null ? `${resultFormatted}%` : null} />
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
