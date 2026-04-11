import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import WhatIsXPercentOfYWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is 20% of 80?",
    answer: "20% of 80 is 16. Calculation: (20 / 100) × 80 = 16. Shortcut: 10% of 80 is 8, so 20% is double that.",
  },
  {
    question: "What is 15% of 60?",
    answer: "15% of 60 is 9. Calculation: (15 / 100) × 60 = 9. This is a common tip calculation — a 15% tip on a $60 meal is $9.",
  },
  {
    question: "What is 8.25% of 200?",
    answer: "8.25% of 200 is 16.50. This comes up often for US sales tax — at 8.25%, a $200 purchase adds $16.50 in tax for a total of $216.50.",
  },
  {
    question: "Does this work with decimals like 7.5%?",
    answer: "Yes. Enter 7.5 in the percentage field and the calculator handles it exactly. For example, 7.5% of 400 = 30.",
  },
  {
    question: "How do I calculate a percentage of a number without a calculator?",
    answer: "Find 1% first (divide by 100), then multiply by your percentage. For 30% of 90: 90 ÷ 100 = 0.9, then 0.9 × 30 = 27. For round percentages, shortcuts are faster — 50% is half, 25% is a quarter, 10% is move the decimal left.",
  },
  {
    question: "What if I want to find the original number — not the result?",
    answer: <>If you know the result and the percentage but not the starting number, use the <Link href="/percentage/reverse-percentage-calculator/" className="text-blue-600 hover:underline">reverse percentage calculator</Link>. For example: if 30 is 15% of something, the original is 200.</>  ,
    schemaAnswer: "If you know the result and the percentage but not the starting number, use the reverse percentage calculator. For example: if 30 is 15% of something, the original is 200.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "What is X% of Y? — Percentage of a Number Calculator",
  description: "Find what any percentage of a number is instantly. Enter a percentage and a number — works for tips, discounts, tax, commissions, and more.",
  path: "/percentage/what-is-x-percent-of-y/",
  keywords: [
    "what is x percent of y",
    "percentage of a number",
    "percent of a number calculator",
    "find percentage of number",
  ],
})

export default function WhatIsXPercentOfYPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationSchema(
              "What is X% of Y? Calculator",
              "Find what any percentage of a number is instantly."
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Percentage Calculators", href: "/percentage/" },
            { name: "What is X% of Y?", href: "/percentage/what-is-x-percent-of-y/" },
          ]}
        />
      </div>
      <CalculatorShell
        slug="what-is-x-percent-of-y"
        title="What is X% of Y?"
        intro={<>Enter a percentage and a number to find the result instantly. The most common percentage calculation — used for tips on restaurant bills, <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount amounts on sale items</Link>, <Link href="/finance/sales-tax-calculator/" className="text-blue-600 hover:underline">tax on a purchase</Link>, commission on a sale, or a percentage share of any total. The key distinction: this tells you the amount a percentage represents, not the percentage itself — those are different questions.</>}
        whenToUse="Use this when you know the percentage and the total, and want the specific value — for example, a 15% tip on a $48 bill, the tax on a $320 purchase, or a 3% commission on $85,000 in sales."
        calculator={<WhatIsXPercentOfYWidget />}
        howTo={[
          "Enter the percentage value in the first field (e.g. 20 for 20%).",
          "Enter the number you want to find the percentage of.",
          "The result updates instantly as you type.",
        ]}
        formula="Result = (X / 100) × Y"
        formulaExplained="Divide the percentage X by 100 to convert it to a decimal, then multiply by the number Y. For 15% of 60: (15 / 100) × 60 = 0.15 × 60 = 9."
        examples={[
          { input: "What is 20% of 150?", output: "30" },
          { input: "What is 7.5% of 80?", output: "6" },
          { input: "What is 35% of 240?", output: "84" },
        ]}
        useCases={[
          "Calculating a tip on a restaurant or service bill",
          "Finding the discount amount on a sale item",
          "Determining sales tax or VAT on a purchase",
          "Working out commission earned on a sale",
          "Calculating a percentage share of a profit or budget",
        ]}
        faqs={faqs}
      />
    </>
  )
}
