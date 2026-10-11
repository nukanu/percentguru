"use client"

import { useState } from "react"
import { breakEvenUnits } from "@/lib/calculators/finance"
import { inputError, isValid, fmt } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import ShareResultButton from "@/components/calculator/ShareResultButton"
import usePrefillFromUrl from "@/components/calculator/usePrefillFromUrl"

export default function PriceChangeWidget() {
  const [fixedCosts, setFixedCosts] = useState("")
  const [variableCost, setVariableCost] = useState("")
  const [currentPrice, setCurrentPrice] = useState("")
  const [newPrice, setNewPrice] = useState("")

  usePrefillFromUrl({ cf: setFixedCosts, cv: setVariableCost, cp: setCurrentPrice, np: setNewPrice })

  const hasInput = [fixedCosts, variableCost, currentPrice, newPrice].every(isValid)

  const f = hasInput ? parseFloat(fixedCosts) : 0
  const v = hasInput ? parseFloat(variableCost) : 0
  const cmNow = hasInput ? parseFloat(currentPrice) - v : null
  const cmNew = hasInput ? parseFloat(newPrice) - v : null
  const workable = cmNow !== null && cmNew !== null && cmNow > 0 && cmNew > 0

  const unitsNow = workable ? Math.ceil(breakEvenUnits(f, parseFloat(currentPrice), v)) : null
  const unitsNew = workable ? Math.ceil(breakEvenUnits(f, parseFloat(newPrice), v)) : null
  // Volume change that leaves total profit unchanged: old contribution / new contribution − 1
  const volumeShift = workable ? (cmNow! / cmNew! - 1) * 100 : null

  let verdict: string | null = null
  if (hasInput && !workable) {
    verdict = "Both prices must be higher than the variable cost per unit."
  } else if (unitsNow !== null && unitsNew !== null && volumeShift !== null) {
    if (Math.abs(volumeShift) < 0.005) {
      verdict = `Both prices break even at ${fmt(unitsNow)} units.`
    } else if (volumeShift < 0) {
      verdict = `At $${newPrice} you break even at ${fmt(unitsNew)} units instead of ${fmt(unitsNow)}. You could lose up to ${fmt(-volumeShift, 1)}% of your sales and still make the same profit as now.`
    } else {
      verdict = `At $${newPrice} you break even at ${fmt(unitsNew)} units instead of ${fmt(unitsNow)}. You need ${fmt(volumeShift, 1)}% more sales to make the same profit as now.`
    }
  }

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Fixed costs" value={fixedCosts} onChange={setFixedCosts} placeholder="e.g. 1200" suffix="$" error={inputError(fixedCosts)} />
        <InputField label="Variable cost per unit" value={variableCost} onChange={setVariableCost} placeholder="e.g. 10" suffix="$" error={inputError(variableCost)} />
        <InputField label="Current price" value={currentPrice} onChange={setCurrentPrice} placeholder="e.g. 25" suffix="$" error={inputError(currentPrice)} />
        <InputField label="New price" value={newPrice} onChange={setNewPrice} placeholder="e.g. 30" suffix="$" error={inputError(newPrice)} />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Break-even Now" value={unitsNow !== null ? `${fmt(unitsNow)} units` : null} />
        <ResultBlock label="Break-even at New Price" value={unitsNew !== null ? `${fmt(unitsNew)} units` : null} />
      </div>
      <QuickAnswer text={verdict} />
      {verdict && workable && (
        <ShareResultButton params={{ cf: fixedCosts, cv: variableCost, cp: currentPrice, np: newPrice }} />
      )}
    </div>
  )
}
