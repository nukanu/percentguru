"use client"

import { useState } from "react"
import { salesTaxAmount, priceAfterTax } from "@/lib/calculators/finance"
import { inputError, isValid, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function SalesTaxWidget() {
  const [price, setPrice] = useState("")
  const [taxRate, setTaxRate] = useState("")

  const priceError = inputError(price)
  const rateError = inputError(taxRate)
  const hasInput = isValid(price) && isValid(taxRate)

  const taxAmount = hasInput ? salesTaxAmount(parseFloat(price), parseFloat(taxRate)) : null
  const total = hasInput ? priceAfterTax(parseFloat(price), parseFloat(taxRate)) : null

  const quickAnswer = hasInput && taxAmount !== null && total !== null
    ? `${taxRate}% tax on $${price} is $${fmtMoney(taxAmount)} — total is $${fmtMoney(total)}`
    : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Price (before tax)"
          value={price}
          onChange={setPrice}
          placeholder="e.g. 100"
          suffix="$"
          autoFocus
          error={priceError}
        />
        <InputField
          label="Tax Rate (%)"
          value={taxRate}
          onChange={setTaxRate}
          placeholder="e.g. 8.5 for 8.5%"
          suffix="%"
          error={rateError}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Tax Amount" value={taxAmount !== null ? `$${fmtMoney(taxAmount)}` : null} />
        <ResultBlock label="Total Price" value={total !== null ? `$${fmtMoney(total)}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
