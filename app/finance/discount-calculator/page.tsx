import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import DiscountCalculatorWidget from "./CalculatorWidget"
import DealComparisonWidget from "./DealComparisonWidget"

const faqs = [
  {
    question: "What is 20% off $80?",
    answer: "20% off $80 saves you $16 — the final price is $64. Calculation: $80 × 0.20 = $16 saved.",
  },
  {
    question: "What is 30% off $150?",
    answer: "30% off $150 saves you $45 — the final price is $105.",
  },
  {
    question: "How do you calculate a discount?",
    answer: "Multiply the original price by the discount percentage divided by 100. For example, 25% off $200: $200 × 0.25 = $50 off, final price = $150.",
  },
  {
    question: "What is the difference between discount and sale price?",
    answer: "The discount is the amount you save — the reduction from the original price. The sale price is what you actually pay. Final price = original − discount.",
  },
  {
    question: "What is 50% off $120?",
    answer: "50% off $120 is $60 off — the final price is $60. A 50% discount always halves the price.",
  },
  {
    question: "Is 30% off plus an extra 10% off the same as 40% off?",
    answer: "No. Stacked discounts apply one after the other, each on the already-reduced price. 30% off $100 leaves $70, then 10% off $70 leaves $63 — a 37% total discount, not 40%. Stores advertise \"extra\" discounts precisely because they sound bigger than they are.",
  },
  {
    question: "Which is better: $15 off or 20% off?",
    answer: "It depends on the price. 20% off beats a $15 coupon whenever the price is above $75, because 20% of $75 is exactly $15. Below $75, take the flat $15. The deal comparison tool on this page works this out for any pair of offers.",
  },
  {
    question: "How do I find the original price from a discounted price?",
    answer: <>Use the <Link href="/percentage/reverse-percentage-calculator/" className="text-blue-600 hover:underline">reverse percentage calculator</Link>. Enter the remaining percentage (100 minus the discount) and the sale price to get the original. For example, $80 after 20% off means 80% remains — enter 80% and $80 to get $100.</>,
    schemaAnswer: "Use the reverse percentage calculator. Enter the remaining percentage (100 minus the discount) and the sale price. For example, $80 after a 20% discount means 80% remains — enter 80% and $80 to get $100.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Discount Calculator — Sale Price, Stacked Discounts & Deal Comparison",
  description: "Work out any sale price, stack multiple discounts and coupons, and compare two deals side by side to see which one actually costs less.",
  path: "/finance/discount-calculator/",
  keywords: ["discount calculator", "percent off calculator", "sale price calculator", "stacked discount calculator", "compare discounts", "double discount calculator"],
})

export default function DiscountCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Discount Calculator", "Calculate the final price and savings from a percentage discount, stack multiple discounts and coupons, and compare two deals side by side.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Discount Calculator", href: "/finance/discount-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="discount-calculator"
        title="Discount Calculator"
        intro={<>Enter the original price and the discount percentage to see how much you save and what you&apos;ll pay. Useful at checkout, when comparing promotions, or when negotiating trade discounts. A discount and a percentage decrease are mathematically the same thing — the difference is context: a discount is applied to a price, while a percentage decrease describes any falling value. If you&apos;re a seller setting prices, the <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link> shows the opposite direction — from cost to selling price.</>}
        whenToUse="Use this at the point of purchase to verify savings, when comparing two promotions (e.g. 20% off vs $30 off), or when calculating a trade or bulk discount before placing an order."
        calculator={<DiscountCalculatorWidget />}
        secondaryTool={
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Compare Two Deals — Which Discount Is Actually Better?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm">
              A single discount is easy. Real shopping decisions rarely are: one store offers 25% off, another offers $20 off plus a members-only extra 10%, and the &quot;bigger&quot; number doesn&apos;t always win. Enter both offers below — including stacked discounts and dollar coupons — and see the true out-the-door price of each. Use the copy-link button to send the comparison to whoever you&apos;re deciding with.
            </p>
            <DealComparisonWidget />
          </section>
        }
        howTo={[
          "Enter the original (full) price in the first field.",
          "Enter the discount percentage (e.g. 20 for 20% off).",
          "The savings amount and final price are shown instantly.",
        ]}
        formula="Discount Amount = (Discount % / 100) × Original Price"
        formulaExplained="Multiply the original price by the discount rate to get the amount saved. Subtract from the original price to get the final price you pay."
        examples={[
          { input: "25% off $200", output: "$50 saved — $150 final" },
          { input: "15% off $60", output: "$9 saved — $51 final" },
          { input: "40% off $85", output: "$34 saved — $51 final" },
        ]}
        useCases={[
          "Calculating sale prices while shopping",
          "Comparing discounts across competing products",
          "Applying coupon or promo code savings",
          "Working out trade or bulk order discounts",
          "Quickly verifying a cashier&apos;s discount at checkout",
        ]}
        faqs={faqs}
      />
    </>
  )
}
