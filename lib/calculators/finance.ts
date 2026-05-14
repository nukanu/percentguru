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

export function roi(initialInvestment: number, finalValue: number): number {
  if (initialInvestment === 0) return 0
  return ((finalValue - initialInvestment) / initialInvestment) * 100
}

export function simpleInterest(principal: number, rate: number, years: number): number {
  return (principal * rate * years) / 100
}

export function monthlyPayment(principal: number, annualRate: number, months: number): number {
  const r = annualRate / 100 / 12
  if (r === 0) return principal / months
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
}

export function weightedAverage(values: number[], weights: number[]): number {
  const totalWeight = weights.reduce((sum, w) => sum + w, 0)
  if (totalWeight === 0) return 0
  const weightedSum = values.reduce((sum, v, i) => sum + v * weights[i], 0)
  return weightedSum / totalWeight
}

export function breakEvenUnits(fixedCosts: number, sellingPrice: number, variableCost: number): number {
  const contribution = sellingPrice - variableCost
  if (contribution <= 0) return Infinity
  return fixedCosts / contribution
}

export function compoundInterestTotal(
  principal: number,
  annualRate: number,
  compoundsPerYear: number,
  years: number
): number {
  return principal * Math.pow(1 + annualRate / 100 / compoundsPerYear, compoundsPerYear * years)
}

export function compoundInterestEarned(
  principal: number,
  annualRate: number,
  compoundsPerYear: number,
  years: number
): number {
  return compoundInterestTotal(principal, annualRate, compoundsPerYear, years) - principal
}

export function addVat(net: number, vatRate: number): { gross: number; vatAmount: number } {
  const vatAmount = (vatRate / 100) * net
  return { gross: net + vatAmount, vatAmount }
}

export function removeVat(gross: number, vatRate: number): { net: number; vatAmount: number } {
  const net = gross / (1 + vatRate / 100)
  return { net, vatAmount: gross - net }
}
