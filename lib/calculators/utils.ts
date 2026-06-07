// Treat partial inputs like "-" or "." as still-typing — no error shown
const PARTIAL = new Set(["-", ".", "-."])

export function inputError(value: string): string | undefined {
  const v = value.trim()
  if (v === "" || PARTIAL.has(v)) return undefined
  if (isNaN(Number(v))) return "Please enter a valid number"
  return undefined
}

export function isValid(value: string): boolean {
  const v = value.trim()
  return v !== "" && !PARTIAL.has(v) && !isNaN(Number(v))
}

export function fmt(n: number, decimals = 4): string {
  if (Number.isInteger(n)) return n.toString()
  return parseFloat(n.toFixed(decimals)).toString()
}

// Currency: thousand separators, always 2 decimal places
export function fmtMoney(n: number): string {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
