import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import TipCalculatorWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is the standard tip percentage at a restaurant?",
    answer: "15% is the traditional minimum for adequate service, 18% is now considered the standard baseline in most of the US, and 20% is common for good service. 25% or more is used to reward exceptional service. The appropriate amount varies by country — tipping customs differ significantly outside North America.",
  },
  {
    question: "Should I tip on the pre-tax or post-tax amount?",
    answer: "Tipping on the pre-tax (subtotal) amount is technically more traditional and slightly less expensive. Tipping on the post-tax total is easier and more common in practice. For a $60 meal with 8% tax: pre-tax tip at 20% = $12.00; post-tax tip at 20% = $12.96. The difference is small — either is acceptable.",
  },
  {
    question: "How do I split a tip evenly between people?",
    answer: "Enter the bill total, choose your tip percentage, and enter the number of people in the split field. The calculator shows the tip per person and total per person. For example, $120 bill, 20% tip, 4 people: $24 total tip ÷ 4 = $6 tip per person, $36 total per person.",
  },
  {
    question: "How much is a 20% tip on $50?",
    answer: "20% of $50 is $10. Your total with tip is $60. To calculate quickly: move the decimal on $50 one place left to get 10% ($5), then double it for 20% ($10).",
  },
  {
    question: "Do I tip before or after a discount or coupon?",
    answer: "It's considered good practice to tip based on the full price before any discount is applied. The server's effort is based on the full service, not the discounted price. If your bill was $80 but a coupon reduced it to $50, tip on the $80.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Tip Calculator — Calculate Tips and Split Bills Instantly",
  description: "Enter your bill and choose a tip percentage to see the tip amount and total. Split between any number of people. Works for restaurants, taxis, and any service.",
  path: "/percentage/tip-calculator/",
  keywords: ["tip calculator", "tip percentage calculator", "restaurant tip calculator", "how much to tip", "split bill calculator"],
})

export default function TipCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Tip Calculator", "Calculate tip amounts and split bills between any number of people.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Tip Calculator", href: "/percentage/tip-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="tip-calculator"
        title="Tip Calculator"
        intro={<>Enter your bill amount and select a tip percentage — the tip and total appear instantly. Use the quick-select buttons for the most common rates (10%, 15%, 18%, 20%, 25%) or type a custom percentage. Enter the number of people to split the bill evenly. For other percentage-of-a-number calculations like tax or commission, the <Link href="/percentage/what-is-x-percent-of-y/" className="text-blue-600 hover:underline">percentage calculator</Link> covers those.</>}
        whenToUse="Use this at the end of a meal, in a taxi, or any time you want to tip for a service and need the exact amount fast. The split field handles group dinners — enter the number of people and it divides the total evenly."
        calculator={<TipCalculatorWidget />}
        howTo={[
          "Enter the bill amount — the subtotal before tax, or the total including tax.",
          "Select a tip percentage using the quick buttons or type a custom amount.",
          "Optionally enter the number of people to split the bill.",
          "See the tip amount and total (or per-person amounts) instantly.",
        ]}
        formula="Tip = Bill × (Tip% ÷ 100)   |   Total = Bill + Tip"
        formulaExplained="Divide the tip percentage by 100 to convert it to a decimal, then multiply by the bill amount to get the tip. Add the tip to the bill for the total. For splitting: divide the total by the number of people. Example: 18% on $65 → $65 × 0.18 = $11.70 tip, $76.70 total."
        examples={[
          { input: "20% tip on $48.00", output: "$9.60 tip — $57.60 total" },
          { input: "18% tip on $120.00 split 4 ways", output: "$5.40 tip each — $35.40 per person" },
          { input: "15% tip on $35.50", output: "$5.33 tip — $40.83 total" },
        ]}
        useCases={[
          "Calculating a restaurant tip at the end of a meal",
          "Splitting a group dinner bill with an even tip included",
          "Tipping a taxi, rideshare, or delivery driver",
          "Working out a service tip when the total feels off",
          "Verifying an auto-calculated tip on a receipt",
        ]}
        faqs={faqs}
      />
    </>
  )
}
