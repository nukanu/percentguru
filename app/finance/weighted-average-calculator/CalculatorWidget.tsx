"use client"

import { useState } from "react"
import { weightedAverage } from "@/lib/calculators/finance"
import { inputError, isValid, fmt } from "@/lib/calculators/utils"
import { Fragment } from "react"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

const ROWS = 4

export default function WeightedAverageCalculatorWidget() {
  const [values, setValues] = useState<string[]>(Array(ROWS).fill(""))
  const [weights, setWeights] = useState<string[]>(Array(ROWS).fill(""))

  const valueErrors = values.map(inputError)
  const weightErrors = weights.map(inputError)

  const pairs = values
    .map((v, i) => ({ v, w: weights[i] }))
    .filter(({ v, w }) => isValid(v) && isValid(w))

  const hasInput = pairs.length >= 2
  const result = hasInput
    ? weightedAverage(pairs.map(p => parseFloat(p.v)), pairs.map(p => parseFloat(p.w)))
    : null
  const resultFormatted = result !== null ? fmt(result) : null

  const quickAnswer = hasInput && result !== null
    ? `Weighted average of ${pairs.length} items is ${resultFormatted}`
    : null

  function setValue(i: number, val: string) {
    setValues(prev => prev.map((v, idx) => idx === i ? val : v))
  }

  function setWeight(i: number, val: string) {
    setWeights(prev => prev.map((w, idx) => idx === i ? val : w))
  }

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Value</p>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Weight</p>
        {Array.from({ length: ROWS }, (_, i) => (
          <Fragment key={i}>
            <InputField
              label=""
              value={values[i]}
              onChange={(val) => setValue(i, val)}
              placeholder={`e.g. ${[85, 90, 78, 92][i]}`}
              autoFocus={i === 0}
              error={valueErrors[i]}
            />
            <InputField
              label=""
              value={weights[i]}
              onChange={(val) => setWeight(i, val)}
              placeholder={`e.g. ${[3, 4, 2, 3][i]}`}
              error={weightErrors[i]}
            />
          </Fragment>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-2">Enter at least 2 value / weight pairs. Blank rows are ignored.</p>
      <div className="mt-5">
        <ResultBlock label="Weighted Average" value={resultFormatted ?? null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
