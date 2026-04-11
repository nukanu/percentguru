"use client"

import { useState } from "react"
import { percentageDifference } from "@/lib/calculators/percentage"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function PercentageDifferenceWidget() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")

  const aNum = parseFloat(a)
  const bNum = parseFloat(b)
  const hasInput = !isNaN(aNum) && !isNaN(bNum)
  const result = hasInput ? percentageDifference(aNum, bNum) : null
  const resultFormatted =
    result !== null
      ? Number.isInteger(result)
        ? result.toString()
        : result.toFixed(4).replace(/\.?0+$/, "")
      : null

  const quickAnswer =
    hasInput && result !== null
      ? `The percentage difference between ${a} and ${b} is ${resultFormatted}%`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField label="Value A" value={a} onChange={setA} placeholder="e.g. 40" />
        <InputField label="Value B" value={b} onChange={setB} placeholder="e.g. 60" />
      </div>
      <ResultBlock label="Percentage Difference" value={resultFormatted !== null ? `${resultFormatted}%` : null} />
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
