"use client"

import { useState } from "react"
import { markupPercent } from "@/lib/calculators/finance"
import { inputError, isValid, fmt, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import ShareResultButton from "@/components/calculator/ShareResultButton"
import usePrefillFromUrl from "@/components/calculator/usePrefillFromUrl"

// Units is optional: empty means a single sale
const optValid = (v: string) => v.trim() === "" || isValid(v)
const units = (v: string) => (isValid(v) ? parseFloat(v) : 1)

export default function PricingComparisonWidget() {
  const [aCost, setACost] = useState("")
  const [aPrice, setAPrice] = useState("")
  const [aUnits, setAUnits] = useState("")
  const [bCost, setBCost] = useState("")
  const [bPrice, setBPrice] = useState("")
  const [bUnits, setBUnits] = useState("")

  usePrefillFromUrl({
    ac: setACost, ap: setAPrice, au: setAUnits,
    bc: setBCost, bp: setBPrice, bu: setBUnits,
  })

  const hasInput =
    [aCost, aPrice, bCost, bPrice].every(isValid) && optValid(aUnits) && optValid(bUnits)

  const totalA = hasInput ? (parseFloat(aPrice) - parseFloat(aCost)) * units(aUnits) : null
  const totalB = hasInput ? (parseFloat(bPrice) - parseFloat(bCost)) * units(bUnits) : null

  const describe = (cost: string, price: string) => {
    const c = parseFloat(cost)
    const p = parseFloat(price)
    return c > 0 ? `${fmt(markupPercent(c, p), 2)}% markup, $${fmtMoney(p - c)} per sale` : `$${fmtMoney(p - c)} per sale`
  }

  let verdict: string | null = null
  if (totalA !== null && totalB !== null) {
    const diff = Math.abs(totalA - totalB)
    const a = describe(aCost, aPrice)
    const b = describe(bCost, bPrice)
    if (diff < 0.005) {
      verdict = `Both options earn the same — $${fmtMoney(totalA)}. Option A is ${a}; Option B is ${b}.`
    } else if (totalA > totalB) {
      verdict = `Option A earns $${fmtMoney(diff)} more. A is ${a}; B is ${b}.`
    } else {
      verdict = `Option B earns $${fmtMoney(diff)} more. A is ${a}; B is ${b}.`
    }
  }

  const optionFields = (
    label: string,
    cost: string, setCost: (v: string) => void,
    price: string, setPrice: (v: string) => void,
    sold: string, setSold: (v: string) => void,
  ) => (
    <fieldset className="border border-gray-200 rounded-lg p-4 bg-white">
      <legend className="px-2 text-sm font-semibold text-gray-700">{label}</legend>
      <div className="grid grid-cols-2 gap-3">
        <InputField label="Cost per unit" value={cost} onChange={setCost} placeholder="e.g. 10" suffix="$" error={inputError(cost)} />
        <InputField label="Selling price" value={price} onChange={setPrice} placeholder="e.g. 25" suffix="$" error={inputError(price)} />
        <div className="col-span-2">
          <InputField label="Units you expect to sell" value={sold} onChange={setSold} placeholder="optional" error={inputError(sold)} />
        </div>
      </div>
    </fieldset>
  )

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        {optionFields("Option A", aCost, setACost, aPrice, setAPrice, aUnits, setAUnits)}
        {optionFields("Option B", bCost, setBCost, bPrice, setBPrice, bUnits, setBUnits)}
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Leave units empty to compare a single sale. Costs here are per unit — fixed costs such as rent are not included.
      </p>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Option A — Total Profit" value={totalA !== null ? `$${fmtMoney(totalA)}` : null} />
        <ResultBlock label="Option B — Total Profit" value={totalB !== null ? `$${fmtMoney(totalB)}` : null} />
      </div>
      <QuickAnswer text={verdict} />
      {verdict && (
        <ShareResultButton params={{ ac: aCost, ap: aPrice, au: aUnits, bc: bCost, bp: bPrice, bu: bUnits }} />
      )}
    </div>
  )
}
