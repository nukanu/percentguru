"use client"

import { useState } from "react"
import { discountedPrice, profitMargin } from "@/lib/calculators/finance"
import { inputError, isValid, fmt, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import ShareResultButton from "@/components/calculator/ShareResultButton"
import usePrefillFromUrl from "@/components/calculator/usePrefillFromUrl"

export default function SellerDiscountWidget() {
  const [price, setPrice] = useState("")
  const [cost, setCost] = useState("")
  const [discount, setDiscount] = useState("")
  const [units, setUnits] = useState("")

  usePrefillFromUrl({ sp: setPrice, sc: setCost, sd: setDiscount, su: setUnits })

  // Units is optional: it only turns the extra-sales percentage into a unit count
  const unitsOk = units.trim() === "" || isValid(units)
  const hasInput = isValid(price) && isValid(cost) && isValid(discount) && unitsOk && parseFloat(price) > 0

  const p = hasInput ? parseFloat(price) : null
  const c = hasInput ? parseFloat(cost) : null
  const salePrice = p !== null ? discountedPrice(p, parseFloat(discount)) : null
  const fullProfit = p !== null && c !== null ? p - c : null
  const saleProfit = salePrice !== null && c !== null ? salePrice - c : null
  const maxDiscount = p !== null && c !== null ? profitMargin(p, c) : null
  const extraSales =
    fullProfit !== null && saleProfit !== null && fullProfit > 0 && saleProfit > 0
      ? (fullProfit / saleProfit - 1) * 100
      : null

  let verdict: string | null = null
  if (fullProfit !== null && saleProfit !== null && salePrice !== null && maxDiscount !== null) {
    if (fullProfit <= 0) {
      verdict = "The full price does not cover your cost, so any discount adds to the loss."
    } else if (saleProfit <= 0) {
      verdict = `At ${discount}% off you sell for $${fmtMoney(salePrice)}, which is ${saleProfit === 0 ? "exactly your cost" : `$${fmtMoney(-saleProfit)} below your cost`}. The most you can take off before losing money is ${fmt(maxDiscount, 2)}%.`
    } else if (extraSales !== null) {
      verdict = `At ${discount}% off you keep $${fmtMoney(saleProfit)} per sale instead of $${fmtMoney(fullProfit)}. You need ${fmt(extraSales, 1)}% more sales to earn the same profit`
      if (isValid(units) && parseFloat(units) > 0) {
        const u = parseFloat(units)
        verdict += ` — ${fmt(Math.ceil(u * (1 + extraSales / 100)))} units instead of ${fmt(u)}`
      }
      verdict += "."
    }
  }

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Full price" value={price} onChange={setPrice} placeholder="e.g. 50" suffix="$" error={inputError(price)} />
        <InputField label="Your cost per unit" value={cost} onChange={setCost} placeholder="e.g. 30" suffix="$" error={inputError(cost)} />
        <InputField label="Discount" value={discount} onChange={setDiscount} placeholder="e.g. 20" suffix="%" error={inputError(discount)} />
        <InputField label="Units you sell now" value={units} onChange={setUnits} placeholder="optional" error={inputError(units)} />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Profit per Sale After Discount" value={saleProfit !== null ? `${saleProfit < 0 ? "−" : ""}$${fmtMoney(Math.abs(saleProfit))}` : null} />
        <ResultBlock label="Extra Sales Needed" value={extraSales !== null ? `${fmt(extraSales, 1)}%` : null} />
        <ResultBlock label="Largest Discount Before a Loss" value={maxDiscount !== null && fullProfit !== null && fullProfit > 0 ? `${fmt(maxDiscount, 2)}%` : null} />
      </div>
      <QuickAnswer text={verdict} />
      {verdict && <ShareResultButton params={{ sp: price, sc: cost, sd: discount, su: units }} />}
    </div>
  )
}
