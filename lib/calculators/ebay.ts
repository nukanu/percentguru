// eBay.com (US) selling fees for sellers without an eBay Store.
// Source: https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees?id=4822
// Update EBAY_FEES_CHECKED whenever these rates are re-verified against that page.
export const EBAY_FEES_CHECKED = "October 12, 2026"

// [upper limit of the band, rate %] — each rate applies to the portion of the sale inside its band
type Band = [number, number]

function banded(total: number, bands: Band[]): number {
  let fee = 0
  let lower = 0
  for (const [upper, rate] of bands) {
    if (total <= lower) break
    fee += (Math.min(total, upper) - lower) * (rate / 100)
    lower = upper
  }
  return fee
}

export type EbayCategory = {
  id: string
  label: string
  // Shown in the fee table on the page
  rateText: string
  finalValueFee: (total: number) => number
  // Athletic shoes at $150 or more carry no per-order fee
  noPerOrderFee?: (total: number) => boolean
}

export const EBAY_CATEGORIES: EbayCategory[] = [
  {
    id: "most",
    label: "Most categories",
    rateText: "13.6% up to $7,500, then 2.35% on the rest",
    finalValueFee: (t) => banded(t, [[7500, 13.6], [Infinity, 2.35]]),
  },
  {
    id: "media",
    label: "Books, movies & music (not vinyl)",
    rateText: "15.3% up to $7,500, then 2.35% on the rest",
    finalValueFee: (t) => banded(t, [[7500, 15.3], [Infinity, 2.35]]),
  },
  {
    id: "cards",
    label: "Trading cards, comics, coins & paper money",
    rateText: "13.25% up to $7,500, then 2.35% on the rest",
    finalValueFee: (t) => banded(t, [[7500, 13.25], [Infinity, 2.35]]),
  },
  {
    id: "jewelry",
    label: "Jewelry (not watches)",
    rateText: "15% if the sale is $5,000 or less; 9% if it is over $5,000",
    finalValueFee: (t) => t * (t <= 5000 ? 0.15 : 0.09),
  },
  {
    id: "watches",
    label: "Watches, parts & accessories",
    rateText: "15% up to $1,000, 6.5% from $1,000 to $7,500, then 3%",
    finalValueFee: (t) => banded(t, [[1000, 15], [7500, 6.5], [Infinity, 3]]),
  },
  {
    id: "handbags",
    label: "Women's bags & handbags",
    rateText: "15% if the sale is $2,000 or less; 9% if it is over $2,000",
    finalValueFee: (t) => t * (t <= 2000 ? 0.15 : 0.09),
  },
  {
    id: "sneakers",
    label: "Athletic shoes",
    rateText: "13.6% under $150; 8% at $150 or more, with no per-order fee",
    finalValueFee: (t) => t * (t >= 150 ? 0.08 : 0.136),
    noPerOrderFee: (t) => t >= 150,
  },
  {
    id: "guitars",
    label: "Guitars & basses",
    rateText: "6.7% up to $7,500, then 2.35% on the rest",
    finalValueFee: (t) => banded(t, [[7500, 6.7], [Infinity, 2.35]]),
  },
]

export type EbaySale = {
  price: number
  shippingCharged: number
  taxRatePct: number
  adRatePct: number
  categoryId: string
}

const cents = (n: number) => Math.round(n * 100) / 100

// eBay charges its percentage on the total amount of the sale: item price plus
// shipping the buyer pays plus sales tax. The ad fee uses the same base.
export function ebayFees(sale: EbaySale) {
  const category = EBAY_CATEGORIES.find((c) => c.id === sale.categoryId) ?? EBAY_CATEGORIES[0]
  const subtotal = sale.price + sale.shippingCharged
  const total = subtotal * (1 + sale.taxRatePct / 100)
  const finalValueFee = cents(category.finalValueFee(total))
  const perOrderFee = total <= 0 || category.noPerOrderFee?.(total) ? 0 : total <= 10 ? 0.3 : 0.4
  const adFee = cents(total * (sale.adRatePct / 100))
  const totalFees = cents(finalValueFee + perOrderFee + adFee)
  return { total, finalValueFee, perOrderFee, adFee, totalFees, payout: cents(subtotal - totalFees) }
}

// Lowest item price that leaves at least `targetProfit` after fees and costs.
export function ebayPriceForProfit(
  targetProfit: number,
  costs: number,
  sale: Omit<EbaySale, "price">
): number {
  const profitAt = (price: number) => ebayFees({ ...sale, price }).payout - costs
  let lo = 0
  let hi = 1_000_000
  if (profitAt(hi) < targetProfit) return NaN
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2
    if (profitAt(mid) >= targetProfit) hi = mid
    else lo = mid
  }
  return Math.ceil(hi * 100 - 1e-6) / 100
}
