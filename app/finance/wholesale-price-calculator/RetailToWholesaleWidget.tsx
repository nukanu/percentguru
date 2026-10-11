"use client"

import { useState } from "react"
import { wholesaleFromRetail, markupPercent } from "@/lib/calculators/finance"
import { inputError, isValid, fmt, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import ShareResultButton from "@/components/calculator/ShareResultButton"
import usePrefillFromUrl from "@/components/calculator/usePrefillFromUrl"

export default function RetailToWholesaleWidget() {
  const [retail, setRetail] = useState("")
  const [shopMargin, setShopMargin] = useState("")
  const [cost, setCost] = useState("")

  usePrefillFromUrl({ rp: setRetail, sm: setShopMargin, yc: setCost })

  // Cost is optional: without it only the wholesale price is shown
  const costOk = cost.trim() === "" || isValid(cost)
  const hasInput = isValid(retail) && isValid(shopMargin) && costOk

  const wholesale = hasInput ? wholesaleFromRetail(parseFloat(retail), parseFloat(shopMargin)) : null
  const c = hasInput && isValid(cost) ? parseFloat(cost) : null
  const profit = wholesale !== null && c !== null ? wholesale - c : null
  const markup = profit !== null && c !== null && c > 0 ? markupPercent(c, wholesale!) : null

  let verdict: string | null = null
  if (wholesale !== null) {
    verdict = `A shop keeping ${shopMargin}% of a $${fmtMoney(parseFloat(retail))} retail price will pay you $${fmtMoney(wholesale)}`
    if (profit !== null) {
      verdict += profit < 0
        ? `. That is $${fmtMoney(-profit)} below your cost — this price does not work for wholesale.`
        : `. You keep $${fmtMoney(profit)} per unit${markup !== null ? `, a ${fmt(markup, 2)}% markup on your cost` : ""}.`
    }
  }

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-3 gap-4">
        <InputField label="Retail price" value={retail} onChange={setRetail} placeholder="e.g. 30" suffix="$" error={inputError(retail)} />
        <InputField label="Shop's margin" value={shopMargin} onChange={setShopMargin} placeholder="e.g. 50" suffix="%" error={inputError(shopMargin)} />
        <InputField label="Your cost per unit" value={cost} onChange={setCost} placeholder="optional" suffix="$" error={inputError(cost)} />
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Wholesale Price" value={wholesale !== null ? `$${fmtMoney(wholesale)}` : null} />
        <ResultBlock label="Your Profit per Unit" value={profit !== null ? `$${fmtMoney(profit)}` : null} />
      </div>
      <QuickAnswer text={verdict} />
      {verdict && <ShareResultButton params={{ rp: retail, sm: shopMargin, yc: cost }} />}
    </div>
  )
}
