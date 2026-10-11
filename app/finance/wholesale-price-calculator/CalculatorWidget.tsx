"use client"

import { useState } from "react"
import { markupPrice, profitMargin } from "@/lib/calculators/finance"
import { inputError, isValid, fmt, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"
import ShareResultButton from "@/components/calculator/ShareResultButton"
import usePrefillFromUrl from "@/components/calculator/usePrefillFromUrl"

export default function WholesalePriceWidget() {
  const [cost, setCost] = useState("")
  const [wholesaleMarkup, setWholesaleMarkup] = useState("")
  const [retailMarkup, setRetailMarkup] = useState("")

  usePrefillFromUrl({ c: setCost, w: setWholesaleMarkup, r: setRetailMarkup })

  // Retail markup is optional: without it only the wholesale price is shown
  const retailOk = retailMarkup.trim() === "" || isValid(retailMarkup)
  const hasInput = isValid(cost) && isValid(wholesaleMarkup) && retailOk

  const c = hasInput ? parseFloat(cost) : null
  const wholesale = c !== null ? markupPrice(c, parseFloat(wholesaleMarkup)) : null
  const retail = wholesale !== null && isValid(retailMarkup) ? markupPrice(wholesale, parseFloat(retailMarkup)) : null
  const yourProfit = wholesale !== null && c !== null ? wholesale - c : null
  const shopMargin = retail !== null && wholesale !== null && retail !== 0 ? profitMargin(retail, wholesale) : null

  let quickAnswer: string | null = null
  if (wholesale !== null && yourProfit !== null) {
    quickAnswer = `Wholesale at $${fmtMoney(wholesale)} — you keep $${fmtMoney(yourProfit)} per unit`
    if (retail !== null && shopMargin !== null) {
      quickAnswer += `. Suggested retail $${fmtMoney(retail)}, which leaves the shop a ${fmt(shopMargin, 2)}% margin`
    }
  }

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-3 gap-4">
        <InputField
          label="Your cost per unit"
          value={cost}
          onChange={setCost}
          placeholder="e.g. 7.50"
          suffix="$"
          autoFocus
          error={inputError(cost)}
        />
        <InputField
          label="Wholesale markup"
          value={wholesaleMarkup}
          onChange={setWholesaleMarkup}
          placeholder="e.g. 100"
          suffix="%"
          error={inputError(wholesaleMarkup)}
        />
        <InputField
          label="Retail markup"
          value={retailMarkup}
          onChange={setRetailMarkup}
          placeholder="optional, e.g. 100"
          suffix="%"
          error={inputError(retailMarkup)}
        />
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Wholesale markup is what you add to your cost. Retail markup is what the shop adds to the wholesale price — 100% means they double it.
      </p>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock label="Wholesale Price" value={wholesale !== null ? `$${fmtMoney(wholesale)}` : null} />
        <ResultBlock label="Suggested Retail Price" value={retail !== null ? `$${fmtMoney(retail)}` : null} />
        <ResultBlock label="Your Profit per Unit" value={yourProfit !== null ? `$${fmtMoney(yourProfit)}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
      {quickAnswer && <ShareResultButton params={{ c: cost, w: wholesaleMarkup, r: retailMarkup }} />}
    </div>
  )
}
