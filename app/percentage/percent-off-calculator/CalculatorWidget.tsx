"use client"

import { useState } from "react"
import { discountAmount, discountedPrice } from "@/lib/calculators/finance"
import { inputError, isValid, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function PercentOffWidget() {
  const [price, setPrice] = useState("")
  const [pctOff, setPctOff] = useState("")

  const priceError = inputError(price)
  const pctError = inputError(pctOff)
  const hasInput = isValid(price) && isValid(pctOff)

  const saved = hasInput ? discountAmount(parseFloat(price), parseFloat(pctOff)) : null
  const finalPrice = hasInput ? discountedPrice(parseFloat(price), parseFloat(pctOff)) : null

  const quickAnswer =
    hasInput && saved !== null && finalPrice !== null
      ? `${pctOff}% off $${price} — you save $${fmtMoney(saved)} and pay $${fmtMoney(finalPrice)}`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Original Price"
          value={price}
          onChange={setPrice}
          placeholder="e.g. 79.99"
          suffix="$"
          autoFocus
          error={priceError}
        />
        <InputField
          label="Percent Off"
          value={pctOff}
          onChange={setPctOff}
          placeholder="e.g. 20"
          suffix="%"
          error={pctError}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="You Save" value={saved !== null ? `$${fmtMoney(saved)}` : null} />
        <ResultBlock label="Sale Price" value={finalPrice !== null ? `$${fmtMoney(finalPrice)}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
