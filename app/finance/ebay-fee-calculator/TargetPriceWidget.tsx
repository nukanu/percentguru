"use client"

import { useState } from "react"
import { EBAY_CATEGORIES, ebayFees, ebayPriceForProfit } from "@/lib/calculators/ebay"
import { inputError, isValid, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import ShareResultButton from "@/components/calculator/ShareResultButton"
import usePrefillFromUrl from "@/components/calculator/usePrefillFromUrl"

// Optional fields: empty means "not used" (0), anything typed must be a valid number
const optValid = (v: string) => v.trim() === "" || isValid(v)
const optNum = (v: string) => (isValid(v) ? parseFloat(v) : 0)

export default function TargetPriceWidget() {
  const [itemCost, setItemCost] = useState("")
  const [target, setTarget] = useState("")
  const [shipCost, setShipCost] = useState("")
  const [shipping, setShipping] = useState("")
  const [category, setCategory] = useState(EBAY_CATEGORIES[0].id)

  usePrefillFromUrl({ tc: setItemCost, tp: setTarget, ts: setShipCost, tb: setShipping })

  const hasInput = isValid(itemCost) && isValid(target) && optValid(shipCost) && optValid(shipping)

  const sale = { shippingCharged: optNum(shipping), taxRatePct: 0, adRatePct: 0, categoryId: category }
  const price = hasInput
    ? ebayPriceForProfit(parseFloat(target), parseFloat(itemCost) + optNum(shipCost), sale)
    : null
  const fees = price !== null && isFinite(price) ? ebayFees({ ...sale, price }) : null

  const verdict = price !== null && fees !== null
    ? `List it at $${fmtMoney(price)}${optNum(shipping) > 0 ? ` plus $${fmtMoney(optNum(shipping))} shipping` : " with free shipping"}. eBay takes $${fmtMoney(fees.totalFees)}, your costs are $${fmtMoney(parseFloat(itemCost) + optNum(shipCost))}, and you keep $${fmtMoney(fees.payout - parseFloat(itemCost) - optNum(shipCost))}.`
    : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <InputField label="What the item cost you" value={itemCost} onChange={setItemCost} placeholder="e.g. 20" suffix="$" error={inputError(itemCost)} />
        <InputField label="Profit you want" value={target} onChange={setTarget} placeholder="e.g. 15" suffix="$" error={inputError(target)} />
        <InputField label="What shipping costs you" value={shipCost} onChange={setShipCost} placeholder="optional" suffix="$" error={inputError(shipCost)} />
        <div className="flex flex-col gap-1 col-span-2">
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
        <InputField label="Shipping you charge" value={shipping} onChange={setShipping} placeholder="optional" suffix="$" error={inputError(shipping)} />
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Worked out before sales tax and without promoted listings. Sales tax at checkout raises the fee a little, so add a small cushion.
      </p>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Price to List At" value={price !== null && isFinite(price) ? `$${fmtMoney(price)}` : null} />
        <ResultBlock label="eBay Fees at That Price" value={fees !== null ? `$${fmtMoney(fees.totalFees)}` : null} />
      </div>
      <QuickAnswer text={verdict} />
      {verdict && <ShareResultButton params={{ tc: itemCost, tp: target, ts: shipCost, tb: shipping }} />}
    </div>
  )
}
