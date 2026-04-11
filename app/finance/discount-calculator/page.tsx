import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import DiscountCalculatorWidget from "./CalculatorWidget"

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
    answer: "Multiply the original price by the discount percentage divided by 100. For example, 25% off $200 = $200 × 0.25 = $50 off, so the final price is $150.",
  },
  {
    question: "What is the difference between discount and sale price?",
    answer: "The discount is the amount subtracted from the original price. The sale price is what you actually pay — original price minus the discount.",
  },
  {
    question: "What is 50% off $120?",
    answer: "50% off $120 is $60 off — the final price is $60. A 50% discount always halves the price.",
  },
  {
    question: "How do I find the original price from a discounted price?",
    answer: "If you know the sale price and the discount percentage, use the reverse percentage calculator. For example, if $80 is the price after a 20% discount, the original was $80 / 0.80 = $100.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Discount Calculator — Calculate Percent Off",
  description: "Calculate how much you save and the final price after a percentage discount. Free and instant.",
  path: "/finance/discount-calculator/",
  keywords: ["discount calculator", "percent off calculator", "sale price calculator", "how much do I save"],
})

export default function DiscountCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Discount Calculator", "Calculate the final price and savings from a percentage discount.")) }}
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
        intro="Enter the original price and the discount percentage to instantly see how much you save and what the final price is."
        calculator={<DiscountCalculatorWidget />}
        howTo={[
          "Enter the original (full) price in the first field.",
          "Enter the discount percentage (e.g. 20 for 20% off).",
          "The savings amount and final price are shown instantly.",
        ]}
        formula="Discount Amount = (Discount % / 100) × Original Price"
        formulaExplained="Multiply the original price by the discount rate to get the amount saved. Subtract that from the original price to get the final price."
        examples={[
          { input: "25% off $200", output: "$50 saved — $150 final" },
          { input: "15% off $60", output: "$9 saved — $51 final" },
          { input: "40% off $250", output: "$100 saved — $150 final" },
        ]}
        useCases={[
          "Calculating sale prices while shopping",
          "Comparing discounts across products",
          "Applying coupon or promo code savings",
          "Working out trade or bulk discounts",
          "Budgeting for a sale or clearance event",
        ]}
        faqs={faqs}
      />
    </>
  )
}
