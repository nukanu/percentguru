"use client"

import { useState } from "react"
import { stackedDealPrice } from "@/lib/calculators/finance"
import { inputError, isValid, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import ShareResultButton from "@/components/calculator/ShareResultButton"
import usePrefillFromUrl from "@/components/calculator/usePrefillFromUrl"

// Optional fields: empty means "not used" (0), anything typed must be a valid number
const optValid = (v: string) => v.trim() === "" || isValid(v)
const optNum = (v: string) => (isValid(v) ? parseFloat(v) : 0)

export default function DealComparisonWidget() {
  const [aPrice, setAPrice] = useState("")
  const [aOff, setAOff] = useState("")
  const [aCoupon, setACoupon] = useState("")
  const [bPrice, setBPrice] = useState("")
  const [bOff, setBOff] = useState("")
  const [bCoupon, setBCoupon] = useState("")
  const [extraA, setExtraA] = useState("")
  const [extraB, setExtraB] = useState("")

  usePrefillFromUrl({
    ap: setAPrice, ad: setAOff, ax: setExtraA, ac: setACoupon,
    bp: setBPrice, bd: setBOff, bx: setExtraB, bc: setBCoupon,
  })

  const hasInput =
    isValid(aPrice) && isValid(bPrice) &&
    [aOff, extraA, aCoupon, bOff, extraB, bCoupon].every(optValid)

  const finalA = hasInput
    ? stackedDealPrice(parseFloat(aPrice), optNum(aOff), optNum(extraA), optNum(aCoupon))
    : null
  const finalB = hasInput
    ? stackedDealPrice(parseFloat(bPrice), optNum(bOff), optNum(extraB), optNum(bCoupon))
    : null

  let verdict: string | null = null
  if (finalA !== null && finalB !== null) {
    const diff = Math.abs(finalA - finalB)
    if (diff < 0.005) {
      verdict = `Both deals cost the same — $${fmtMoney(finalA)}. Pick whichever is more convenient.`
    } else if (finalA < finalB) {
      verdict = `Deal A is cheaper — you pay $${fmtMoney(finalA)} vs $${fmtMoney(finalB)}, saving $${fmtMoney(diff)} more than Deal B.`
    } else {
      verdict = `Deal B is cheaper — you pay $${fmtMoney(finalB)} vs $${fmtMoney(finalA)}, saving $${fmtMoney(diff)} more than Deal A.`
    }
  }

  const dealFields = (
    label: string,
    price: string, setPrice: (v: string) => void,
    off: string, setOff: (v: string) => void,
    extra: string, setExtra: (v: string) => void,
    coupon: string, setCoupon: (v: string) => void,
  ) => (
    <fieldset className="border border-gray-200 rounded-lg p-4 bg-white">
      <legend className="px-2 text-sm font-semibold text-gray-700">{label}</legend>
      <div className="grid grid-cols-2 gap-3">
        <InputField label="Price" value={price} onChange={setPrice} placeholder="e.g. 80" suffix="$" error={inputError(price)} />
        <InputField label="Discount" value={off} onChange={setOff} placeholder="e.g. 20" suffix="%" error={inputError(off)} />
        <InputField label="Extra discount" value={extra} onChange={setExtra} placeholder="optional" suffix="%" error={inputError(extra)} />
        <InputField label="Coupon" value={coupon} onChange={setCoupon} placeholder="optional" suffix="$" error={inputError(coupon)} />
      </div>
    </fieldset>
  )

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        {dealFields("Deal A", aPrice, setAPrice, aOff, setAOff, extraA, setExtraA, aCoupon, setACoupon)}
        {dealFields("Deal B", bPrice, setBPrice, bOff, setBOff, extraB, setExtraB, bCoupon, setBCoupon)}
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Stacked discounts apply one after the other (30% + an extra 10% = 37% off total, not 40%). A dollar coupon comes off last, after all percentage discounts.
      </p>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Deal A — You Pay" value={finalA !== null ? `$${fmtMoney(finalA)}` : null} />
        <ResultBlock label="Deal B — You Pay" value={finalB !== null ? `$${fmtMoney(finalB)}` : null} />
      </div>
      <QuickAnswer text={verdict} />
      {verdict && (
        <ShareResultButton params={{ ap: aPrice, ad: aOff, ax: extraA, ac: aCoupon, bp: bPrice, bd: bOff, bx: extraB, bc: bCoupon }} />
      )}
    </div>
  )
}
