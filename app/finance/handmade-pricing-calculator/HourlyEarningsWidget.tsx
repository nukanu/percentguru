"use client"

import { useState } from "react"
import { inputError, isValid, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import ShareResultButton from "@/components/calculator/ShareResultButton"
import usePrefillFromUrl from "@/components/calculator/usePrefillFromUrl"

// Optional fields: empty means "not used" (0), anything typed must be a valid number
const optValid = (v: string) => v.trim() === "" || isValid(v)
const optNum = (v: string) => (isValid(v) ? parseFloat(v) : 0)

export default function HourlyEarningsWidget() {
  const [price, setPrice] = useState("")
  const [costs, setCosts] = useState("")
  const [minutes, setMinutes] = useState("")
  const [fees, setFees] = useState("")

  usePrefillFromUrl({ ep: setPrice, ec: setCosts, et: setMinutes, ef: setFees })

  const hasInput =
    [price, costs, minutes].every(isValid) && optValid(fees) && parseFloat(minutes) > 0

  const kept = hasInput ? parseFloat(price) * (1 - optNum(fees) / 100) : null
  const left = kept !== null ? kept - parseFloat(costs) : null
  const hourly = left !== null ? left / (parseFloat(minutes) / 60) : null

  let verdict: string | null = null
  if (left !== null && hourly !== null) {
    verdict = left < 0
      ? `At $${fmtMoney(parseFloat(price))} you are $${fmtMoney(-left)} short of covering materials and fees, before your time is paid at all.`
      : `At $${fmtMoney(parseFloat(price))} you have $${fmtMoney(left)} left after materials and fees. For ${minutes} minutes of work that is $${fmtMoney(hourly)} an hour, with nothing set aside as profit.`
  }

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Price you charge" value={price} onChange={setPrice} placeholder="e.g. 24" suffix="$" error={inputError(price)} />
        <InputField label="Materials and overheads" value={costs} onChange={setCosts} placeholder="e.g. 7.50" suffix="$" error={inputError(costs)} />
        <InputField label="Time to make" value={minutes} onChange={setMinutes} placeholder="e.g. 45" suffix="min" error={inputError(minutes)} />
        <InputField label="Selling fees" value={fees} onChange={setFees} placeholder="optional" suffix="%" error={inputError(fees)} />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Left After Costs and Fees" value={left !== null ? `${left < 0 ? "−" : ""}$${fmtMoney(Math.abs(left))}` : null} />
        <ResultBlock label="What You Earn per Hour" value={hourly !== null && left !== null && left >= 0 ? `$${fmtMoney(hourly)}` : null} />
      </div>
      <QuickAnswer text={verdict} />
      {verdict && <ShareResultButton params={{ ep: price, ec: costs, et: minutes, ef: fees }} />}
    </div>
  )
}
