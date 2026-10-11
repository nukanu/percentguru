"use client"

import { useState } from "react"
import { EBAY_CATEGORIES, ebayFees } from "@/lib/calculators/ebay"
import { profitMargin } from "@/lib/calculators/finance"
import { inputError, isValid, fmt, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import ShareResultButton from "@/components/calculator/ShareResultButton"
import usePrefillFromUrl from "@/components/calculator/usePrefillFromUrl"

// Optional fields: empty means "not used" (0), anything typed must be a valid number
const optValid = (v: string) => v.trim() === "" || isValid(v)
const optNum = (v: string) => (isValid(v) ? parseFloat(v) : 0)

export default function EbayFeeWidget() {
  const [price, setPrice] = useState("")
  const [shipping, setShipping] = useState("")
  const [tax, setTax] = useState("")
  const [category, setCategory] = useState(EBAY_CATEGORIES[0].id)
  const [itemCost, setItemCost] = useState("")
  const [shipCost, setShipCost] = useState("")
  const [adRate, setAdRate] = useState("")

  usePrefillFromUrl({ p: setPrice, s: setShipping, x: setTax, ic: setItemCost, sc: setShipCost, ad: setAdRate })

  const hasInput = isValid(price) && [shipping, tax, itemCost, shipCost, adRate].every(optValid)

  const fees = hasInput
    ? ebayFees({ price: parseFloat(price), shippingCharged: optNum(shipping), taxRatePct: optNum(tax), adRatePct: optNum(adRate), categoryId: category })
    : null
  const hasCosts = isValid(itemCost) || isValid(shipCost)
  const profit = fees !== null ? fees.payout - optNum(itemCost) - optNum(shipCost) : null
  const subtotal = hasInput ? parseFloat(price) + optNum(shipping) : null
  const feeShare = fees !== null && subtotal ? (fees.totalFees / subtotal) * 100 : null
  const margin = profit !== null && subtotal ? profitMargin(subtotal, subtotal - profit) : null

  let quickAnswer: string | null = null
  if (fees !== null && feeShare !== null) {
    quickAnswer = `eBay keeps $${fmtMoney(fees.totalFees)} (${fmt(feeShare, 1)}% of what the buyer pays you) and you receive $${fmtMoney(fees.payout)}`
    if (hasCosts && profit !== null && margin !== null) {
      quickAnswer += profit < 0
        ? `. After your costs that is a loss of $${fmtMoney(-profit)}`
        : `. After your costs you keep $${fmtMoney(profit)}, a ${fmt(margin, 1)}% margin`
    }
    quickAnswer += "."
  }

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <InputField label="Sold price" value={price} onChange={setPrice} placeholder="e.g. 50" suffix="$" autoFocus error={inputError(price)} />
        <InputField label="Shipping you charge" value={shipping} onChange={setShipping} placeholder="optional" suffix="$" error={inputError(shipping)} />
        <InputField label="Buyer's sales tax" value={tax} onChange={setTax} placeholder="optional" suffix="%" error={inputError(tax)} />
        <div className="flex flex-col gap-1 col-span-2 sm:col-span-3">
          <label className="text-sm font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2.5 text-gray-900 bg-white text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {EBAY_CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
        </div>
        <InputField label="What the item cost you" value={itemCost} onChange={setItemCost} placeholder="optional" suffix="$" error={inputError(itemCost)} />
        <InputField label="What shipping costs you" value={shipCost} onChange={setShipCost} placeholder="optional" suffix="$" error={inputError(shipCost)} />
        <InputField label="Promoted listing rate" value={adRate} onChange={setAdRate} placeholder="optional" suffix="%" error={inputError(adRate)} />
      </div>
      <p className="text-xs text-gray-500 mt-3">
        For eBay.com sellers in the US without an eBay Store. eBay charges its percentage on the item price, the shipping the buyer pays and the sales tax added at checkout.
      </p>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Total eBay Fees" value={fees !== null ? `$${fmtMoney(fees.totalFees)}` : null} />
        <ResultBlock label="You Receive" value={fees !== null ? `$${fmtMoney(fees.payout)}` : null} />
        <ResultBlock label="Profit After Your Costs" value={hasCosts && profit !== null ? `${profit < 0 ? "−" : ""}$${fmtMoney(Math.abs(profit))}` : null} />
      </div>
      {fees !== null && (
        <p className="text-sm text-gray-600 mt-3">
          Final value fee ${fmtMoney(fees.finalValueFee)} + per-order fee ${fmtMoney(fees.perOrderFee)}
          {fees.adFee > 0 ? ` + ad fee $${fmtMoney(fees.adFee)}` : ""}
        </p>
      )}
      <QuickAnswer text={quickAnswer} />
      {quickAnswer && (
        <ShareResultButton params={{ p: price, s: shipping, x: tax, ic: itemCost, sc: shipCost, ad: adRate }} />
      )}
    </div>
  )
}
