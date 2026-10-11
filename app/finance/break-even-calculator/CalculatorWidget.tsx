"use client"

import { useState } from "react"
import { breakEvenUnits } from "@/lib/calculators/finance"
import { inputError, isValid, fmt, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import ShareResultButton from "@/components/calculator/ShareResultButton"
import usePrefillFromUrl from "@/components/calculator/usePrefillFromUrl"

export default function BreakEvenCalculatorWidget() {
  const [fixedCosts, setFixedCosts] = useState("")
  const [sellingPrice, setSellingPrice] = useState("")
  const [variableCost, setVariableCost] = useState("")
  const [targetProfit, setTargetProfit] = useState("")

  usePrefillFromUrl({ f: setFixedCosts, p: setSellingPrice, v: setVariableCost, t: setTargetProfit })

  // Target profit is optional: without it only the break-even point is shown
  const targetOk = targetProfit.trim() === "" || isValid(targetProfit)
  const hasInput = isValid(fixedCosts) && isValid(sellingPrice) && isValid(variableCost) && targetOk

  const units = hasInput ? breakEvenUnits(parseFloat(fixedCosts), parseFloat(sellingPrice), parseFloat(variableCost)) : null
  const revenue = hasInput && units !== null && isFinite(units) ? units * parseFloat(sellingPrice) : null
  const unitsFormatted = units !== null && isFinite(units) ? fmt(Math.ceil(units)) : null
  const revenueFormatted = revenue !== null ? fmtMoney(revenue) : null

  const contribution = hasInput ? parseFloat(sellingPrice) - parseFloat(variableCost) : null
  const isNegativeContribution = contribution !== null && contribution <= 0

  const targetUnits =
    hasInput && isValid(targetProfit) && !isNegativeContribution
      ? breakEvenUnits(parseFloat(fixedCosts) + parseFloat(targetProfit), parseFloat(sellingPrice), parseFloat(variableCost))
      : null
  const targetFormatted = targetUnits !== null && isFinite(targetUnits) ? fmt(Math.ceil(targetUnits)) : null

  const quickAnswer =
    isNegativeContribution
      ? "Selling price must exceed variable cost per unit to reach break-even"
      : hasInput && unitsFormatted !== null && revenueFormatted !== null
      ? `Break-even at ${unitsFormatted} units — $${revenueFormatted} in revenue${targetFormatted !== null ? `. To make $${fmtMoney(parseFloat(targetProfit))} profit you need ${targetFormatted} units` : ""}`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Fixed Costs"
          value={fixedCosts}
          onChange={setFixedCosts}
          placeholder="e.g. 1200"
          suffix="$"
          autoFocus
          error={inputError(fixedCosts)}
        />
        <InputField
          label="Selling Price per Unit"
          value={sellingPrice}
          onChange={setSellingPrice}
          placeholder="e.g. 25"
          suffix="$"
          error={inputError(sellingPrice)}
        />
        <InputField
          label="Variable Cost per Unit"
          value={variableCost}
          onChange={setVariableCost}
          placeholder="e.g. 10"
          suffix="$"
          error={inputError(variableCost)}
        />
        <InputField
          label="Target Profit"
          value={targetProfit}
          onChange={setTargetProfit}
          placeholder="optional"
          suffix="$"
          error={inputError(targetProfit)}
        />
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Use the same period for fixed costs and target profit — both per month, or both per year. The units shown are for that period.
      </p>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Break-even Units" value={unitsFormatted ?? null} />
        <ResultBlock label="Break-even Revenue" value={revenueFormatted !== null ? `$${revenueFormatted}` : null} />
        <ResultBlock label="Profit per Unit Toward Fixed Costs" value={contribution !== null && !isNegativeContribution ? `$${fmtMoney(contribution)}` : null} />
        <ResultBlock label="Units for Target Profit" value={targetFormatted} />
      </div>
      <QuickAnswer text={quickAnswer} />
      {quickAnswer && !isNegativeContribution && (
        <ShareResultButton params={{ f: fixedCosts, p: sellingPrice, v: variableCost, t: targetProfit }} />
      )}
    </div>
  )
}
