import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import PercentOffWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is 15% off $100?",
    answer: "15% off $100 saves you $15 — the sale price is $85. Calculation: $100 × 0.15 = $15 saved.",
  },
  {
    question: "What is 20% off $50?",
    answer: "20% off $50 saves you $10 — the sale price is $40. Calculation: $50 × 0.20 = $10 saved.",
  },
  {
    question: "What is 30% off $60?",
    answer: "30% off $60 saves you $18 — the sale price is $42. Calculation: $60 × 0.30 = $18 saved.",
  },
  {
    question: "What is 10% off $250?",
    answer: "10% off $250 saves you $25 — the sale price is $225. Calculation: $250 × 0.10 = $25 saved.",
  },
  {
    question: "How do I calculate percent off in my head?",
    answer: "For 10% off, move the decimal one place left (10% of $80 = $8). For 20% off, double that ($16). For 25% off, divide the price by 4. For 15% off, find 10% then add half of that. These shortcuts work for any round number.",
  },
  {
    question: "Does the percent off apply before or after tax?",
    answer: <>Discounts are applied to the pre-tax price in most countries. Tax is then calculated on the reduced price. So 20% off a $100 item gives you $80, and tax is charged on $80 — not on the original $100. Use the <Link href="/finance/sales-tax-calculator/" className="text-blue-600 hover:underline">sales tax calculator</Link> to find the final total after tax.</>,
    schemaAnswer: "Discounts are applied to the pre-tax price in most countries. Tax is then calculated on the reduced price. So 20% off a $100 item gives you $80, and tax is charged on $80 — not on the original $100.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percent Off Calculator — Find Sale Price Instantly",
  description: "Enter any price and percentage off to see exactly how much you save and what you pay. Works for any sale, coupon, or clearance discount.",
  path: "/percentage/percent-off-calculator/",
  keywords: ["percent off calculator", "percentage off calculator", "sale price calculator", "how much is x percent off"],
})

export default function PercentOffPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Percent Off Calculator", "Find the sale price and savings for any percent off deal.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Percent Off Calculator", href: "/percentage/percent-off-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="percent-off-calculator"
        title="Percent Off Calculator"
        intro={<>Enter the original price and the percentage off to see your savings and the final sale price instantly. Built for shoppers checking whether a deal is worth it — enter any price tag and discount label and get the exact numbers. For applying a discount in a business context such as trade pricing or invoice discounts, the <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link> covers that in more detail.</>}
        whenToUse="Use this at the checkout, when comparing sale prices across stores, or when a price tag shows a percentage off and you want to know the actual saving before you buy. Works for any currency — the percent off calculation is the same regardless of the dollar, pound, or euro sign."
        calculator={<PercentOffWidget />}
        howTo={[
          "Enter the original (full) price in the first field.",
          "Enter the percentage off — for example, 20 for 20% off.",
          "Your savings and the sale price appear instantly.",
        ]}
        formula="Sale Price = Original Price × (1 − Percent Off / 100)"
        formulaExplained="Divide the percent off by 100 to convert it to a decimal, subtract from 1, then multiply by the original price. For 25% off $80: 1 − 0.25 = 0.75, then $80 × 0.75 = $60."
        examples={[
          { input: "20% off $79.99", output: "$63.99 — saving $16.00" },
          { input: "50% off $120", output: "$60.00 — saving $60.00" },
          { input: "15% off $34.99", output: "$29.74 — saving $5.25" },
        ]}
        useCases={[
          "Checking the real price during a sale before buying",
          "Comparing the same item on sale at different percentages off",
          "Verifying that a cashier or website applied a coupon correctly",
          "Working out clearance pricing on end-of-season stock",
          "Calculating how much loyalty points or member discounts save you",
        ]}
        faqs={faqs}
      />
    </>
  )
}
