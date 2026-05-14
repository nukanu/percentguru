"use client"

import { useState } from "react"
import { addVat, removeVat } from "@/lib/calculators/finance"
import { inputError, isValid, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

const RATE_PRESETS = [5, 10, 15, 20, 25]

export default function VatCalculatorWidget() {
  const [mode, setMode] = useState<"add" | "remove">("add")
  const [amount, setAmount] = useState("")
  const [rate, setRate] = useState("20")

  const amountError = inputError(amount)
  const rateError = inputError(rate)
  const hasInput = isValid(amount) && isValid(rate)

  const amountNum = parseFloat(amount)
  const rateNum = parseFloat(rate)

  let gross: number | null = null
  let net: number | null = null
  let vatAmount: number | null = null

  if (hasInput) {
    if (mode === "add") {
      const result = addVat(amountNum, rateNum)
      gross = result.gross
      net = amountNum
      vatAmount = result.vatAmount
    } else {
      const result = removeVat(amountNum, rateNum)
      net = result.net
      gross = amountNum
      vatAmount = result.vatAmount
    }
  }

  const quickAnswer =
    hasInput && vatAmount !== null
      ? mode === "add"
        ? `${rate}% VAT on £${amount} — VAT: £${fmtMoney(vatAmount)}, gross: £${fmtMoney(gross!)}`
        : `Remove ${rate}% VAT from £${amount} — VAT: £${fmtMoney(vatAmount)}, net: £${fmtMoney(net!)}`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="flex gap-2 mb-5">
        <button
          type="button"
          onClick={() => setMode("add")}
          className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${
            mode === "add"
              ? "bg-blue-600 border-blue-600 text-white"
              : "border-gray-300 text-gray-600 hover:border-blue-400"
          }`}
        >
          Add VAT (net → gross)
        </button>
        <button
          type="button"
          onClick={() => setMode("remove")}
          className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${
            mode === "remove"
              ? "bg-blue-600 border-blue-600 text-white"
              : "border-gray-300 text-gray-600 hover:border-blue-400"
          }`}
        >
          Remove VAT (gross → net)
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label={mode === "add" ? "Net Amount (ex. VAT)" : "Gross Amount (inc. VAT)"}
          value={amount}
          onChange={setAmount}
          placeholder="e.g. 100.00"
          autoFocus
          error={amountError}
        />
        <div className="flex flex-col gap-1">
          <InputField
            label="VAT Rate"
            value={rate}
            onChange={setRate}
            placeholder="e.g. 20"
            suffix="%"
            error={rateError}
          />
          <div className="flex gap-1 flex-wrap mt-1">
            {RATE_PRESETS.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRate(String(r))}
                className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                  rate === String(r)
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {r}%
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mt-5">
        <ResultBlock label="VAT Amount" value={vatAmount !== null ? `£${fmtMoney(vatAmount)}` : null} />
        <ResultBlock label="Net (ex. VAT)" value={net !== null ? `£${fmtMoney(net)}` : null} />
        <ResultBlock label="Gross (inc. VAT)" value={gross !== null ? `£${fmtMoney(gross)}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
