"use client"

import { useState } from "react"
import { markupPrice, priceBeforeFee } from "@/lib/calculators/finance"
import { inputError, isValid, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import ShareResultButton from "@/components/calculator/ShareResultButton"
import usePrefillFromUrl from "@/components/calculator/usePrefillFromUrl"

// Optional fields: empty means "not used" (0), anything typed must be a valid number
const optValid = (v: string) => v.trim() === "" || isValid(v)
const optNum = (v: string) => (isValid(v) ? parseFloat(v) : 0)

export default function HandmadePricingWidget() {
  const [materials, setMaterials] = useState("")
  const [minutes, setMinutes] = useState("")
  const [rate, setRate] = useState("")
  const [overhead, setOverhead] = useState("")
  const [markup, setMarkup] = useState("")
  const [fees, setFees] = useState("")

  usePrefillFromUrl({ m: setMaterials, t: setMinutes, r: setRate, o: setOverhead, k: setMarkup, f: setFees })

  const hasInput =
    [materials, minutes, rate, markup].every(isValid) &&
    optValid(overhead) && optValid(fees) && optNum(fees) < 100

  const hours = hasInput ? parseFloat(minutes) / 60 : 0
  const labour = hasInput ? hours * parseFloat(rate) : null
  const cost = labour !== null ? parseFloat(materials) + labour + optNum(overhead) : null
  const net = cost !== null ? markupPrice(cost, parseFloat(markup)) : null
  const price = net !== null ? priceBeforeFee(net, optNum(fees)) : null
  const profit = net !== null && cost !== null ? net - cost : null
  const hourly = labour !== null && profit !== null && hours > 0 ? (labour + profit) / hours : null

  let quickAnswer: string | null = null
  if (price !== null && cost !== null && profit !== null) {
    quickAnswer = `Charge $${fmtMoney(price)}. It costs you $${fmtMoney(cost)} to make, including $${fmtMoney(labour!)} for your time, and leaves $${fmtMoney(profit)} profit`
    if (optNum(fees) > 0) quickAnswer += ` after $${fmtMoney(price - net!)} in fees`
    if (hourly !== null) quickAnswer += `. Wage plus profit works out at $${fmtMoney(hourly)} an hour`
    quickAnswer += "."
  }

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <InputField label="Materials per item" value={materials} onChange={setMaterials} placeholder="e.g. 6" suffix="$" autoFocus error={inputError(materials)} />
        <InputField label="Time to make" value={minutes} onChange={setMinutes} placeholder="e.g. 45" suffix="min" error={inputError(minutes)} />
        <InputField label="Your hourly rate" value={rate} onChange={setRate} placeholder="e.g. 20" suffix="$" error={inputError(rate)} />
        <InputField label="Overheads per item" value={overhead} onChange={setOverhead} placeholder="optional" suffix="$" error={inputError(overhead)} />
        <InputField label="Profit markup" value={markup} onChange={setMarkup} placeholder="e.g. 40" suffix="%" error={inputError(markup)} />
        <InputField label="Selling fees" value={fees} onChange={setFees} placeholder="optional" suffix="%" error={inputError(fees)} />
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Materials include packaging. Selling fees are the share of the price a marketplace or card processor keeps — the price is raised so you still receive the full amount.
      </p>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Price to Charge" value={price !== null ? `$${fmtMoney(price)}` : null} />
        <ResultBlock label="Cost to Make" value={cost !== null ? `$${fmtMoney(cost)}` : null} />
        <ResultBlock label="Profit per Item" value={profit !== null ? `$${fmtMoney(profit)}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
      {quickAnswer && (
        <ShareResultButton params={{ m: materials, t: minutes, r: rate, o: overhead, k: markup, f: fees }} />
      )}
    </div>
  )
}
