"use client"

import { useState } from "react"
import { salesTaxAmount, priceAfterTax } from "@/lib/calculators/finance"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

function fmt(n: number): string {
  return Number.isInteger(n) ? n.toString() : n.toFixed(2).replace(/\.?0+$/, "")
}

export default function SalesTaxWidget() {
  const [price, setPrice] = useState("")
  const [taxRate, setTaxRate] = useState("")

  const priceNum = parseFloat(price)
  const rateNum = parseFloat(taxRate)
  const hasInput = !isNaN(priceNum) && !isNaN(rateNum)

  const taxAmount = hasInput ? salesTaxAmount(priceNum, rateNum) : null
  const total = hasInput ? priceAfterTax(priceNum, rateNum) : null

  const quickAnswer =
    hasInput && taxAmount !== null && total !== null
      ? `${taxRate}% tax on $${price} is $${fmt(taxAmount)} — total is $${fmt(total)}`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField label="Price (before tax)" value={price} onChange={setPrice} placeholder="e.g. 100" suffix="$" />
        <InputField label="Tax Rate (%)" value={taxRate} onChange={setTaxRate} placeholder="e.g. 8.5" suffix="%" />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-4">
        <ResultBlock label="Tax Amount" value={taxAmount !== null ? `$${fmt(taxAmount)}` : null} />
        <ResultBlock label="Total Price" value={total !== null ? `$${fmt(total)}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
