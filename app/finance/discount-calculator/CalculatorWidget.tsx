"use client"

import { useState } from "react"
import { discountAmount, discountedPrice } from "@/lib/calculators/finance"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

function fmt(n: number): string {
  return Number.isInteger(n) ? n.toString() : n.toFixed(2).replace(/\.?0+$/, "")
}

export default function DiscountCalculatorWidget() {
  const [original, setOriginal] = useState("")
  const [discount, setDiscount] = useState("")

  const origNum = parseFloat(original)
  const discNum = parseFloat(discount)
  const hasInput = !isNaN(origNum) && !isNaN(discNum)

  const saved = hasInput ? discountAmount(origNum, discNum) : null
  const finalPrice = hasInput ? discountedPrice(origNum, discNum) : null

  const quickAnswer =
    hasInput && saved !== null && finalPrice !== null
      ? `${discount}% off $${original} saves you $${fmt(saved)} — final price is $${fmt(finalPrice)}`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField label="Original Price" value={original} onChange={setOriginal} placeholder="e.g. 80" suffix="$" />
        <InputField label="Discount (%)" value={discount} onChange={setDiscount} placeholder="e.g. 20" suffix="%" />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-4">
        <ResultBlock label="You Save" value={saved !== null ? `$${fmt(saved)}` : null} />
        <ResultBlock label="Final Price" value={finalPrice !== null ? `$${fmt(finalPrice)}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
