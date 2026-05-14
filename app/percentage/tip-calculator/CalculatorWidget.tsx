"use client"

import { useState } from "react"
import { inputError, isValid, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

const PRESETS = [10, 15, 18, 20, 25]

export default function TipCalculatorWidget() {
  const [bill, setBill] = useState("")
  const [tipPct, setTipPct] = useState("18")
  const [split, setSplit] = useState("1")

  const billError = inputError(bill)
  const tipError = inputError(tipPct)
  const hasInput = isValid(bill) && isValid(tipPct)

  const splitNum = Math.max(1, parseInt(split) || 1)
  const tipAmount = hasInput ? (parseFloat(bill) * parseFloat(tipPct)) / 100 : null
  const total = tipAmount !== null ? parseFloat(bill) + tipAmount : null
  const perPersonTotal = total !== null && splitNum > 1 ? total / splitNum : null
  const perPersonTip = tipAmount !== null && splitNum > 1 ? tipAmount / splitNum : null

  const quickAnswer =
    hasInput && tipAmount !== null && total !== null
      ? splitNum > 1
        ? `${tipPct}% tip on $${bill} split ${splitNum} ways — $${fmtMoney(perPersonTip!)} tip and $${fmtMoney(perPersonTotal!)} per person`
        : `${tipPct}% tip on $${bill} — $${fmtMoney(tipAmount)} tip, $${fmtMoney(total)} total`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Bill Amount"
          value={bill}
          onChange={setBill}
          placeholder="e.g. 65.00"
          suffix="$"
          autoFocus
          error={billError}
        />
        <div className="flex flex-col gap-1">
          <InputField
            label="Tip Percentage"
            value={tipPct}
            onChange={setTipPct}
            placeholder="e.g. 18"
            suffix="%"
            error={tipError}
          />
          <div className="flex gap-1 flex-wrap mt-1">
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setTipPct(String(p))}
                className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                  tipPct === String(p)
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {p}%
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 sm:max-w-[50%]">
        <InputField
          label="Split between (people)"
          value={split}
          onChange={setSplit}
          placeholder="1"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <ResultBlock
          label={splitNum > 1 ? "Tip per Person" : "Tip Amount"}
          value={
            splitNum > 1 && perPersonTip !== null
              ? `$${fmtMoney(perPersonTip)}`
              : tipAmount !== null
              ? `$${fmtMoney(tipAmount)}`
              : null
          }
        />
        <ResultBlock
          label={splitNum > 1 ? "Total per Person" : "Total (with tip)"}
          value={
            splitNum > 1 && perPersonTotal !== null
              ? `$${fmtMoney(perPersonTotal)}`
              : total !== null
              ? `$${fmtMoney(total)}`
              : null
          }
        />
      </div>

      {splitNum > 1 && tipAmount !== null && total !== null && (
        <div className="grid sm:grid-cols-2 gap-3 mt-3">
          <ResultBlock label="Total Tip" value={`$${fmtMoney(tipAmount)}`} />
          <ResultBlock label="Grand Total" value={`$${fmtMoney(total)}`} />
        </div>
      )}

      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
