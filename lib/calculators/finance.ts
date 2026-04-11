export function discountAmount(original: number, discountPct: number): number {
  return (discountPct / 100) * original
}

export function discountedPrice(original: number, discountPct: number): number {
  return original - discountAmount(original, discountPct)
}

export function markupAmount(cost: number, markupPct: number): number {
  return (markupPct / 100) * cost
}

export function markupPrice(cost: number, markupPct: number): number {
  return cost + markupAmount(cost, markupPct)
}

export function profitMargin(revenue: number, cost: number): number {
  if (revenue === 0) return 0
  return ((revenue - cost) / revenue) * 100
}

export function salesTaxAmount(price: number, taxRate: number): number {
  return (taxRate / 100) * price
}

export function priceAfterTax(price: number, taxRate: number): number {
  return price + salesTaxAmount(price, taxRate)
}
