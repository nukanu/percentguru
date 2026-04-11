import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import WhatIsXPercentOfYWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is 20% of 80?",
    answer: "20% of 80 is 16. Calculation: (20 / 100) × 80 = 16.",
  },
  {
    question: "What is 15% of 200?",
    answer: "15% of 200 is 30. This is a common tip calculation — 15% tip on a $200 bill is $30.",
  },
  {
    question: "What is 5% of 50?",
    answer: "5% of 50 is 2.5. Calculation: (5 / 100) × 50 = 2.5.",
  },
  {
    question: "What is the difference between percent and percentage?",
    answer:
      "\"Percent\" means per hundred and is used with a specific number (e.g. 20 percent). \"Percentage\" refers to a rate or proportion in general (e.g. a large percentage). In practice, they're used interchangeably.",
  },
  {
    question: "Does this work with decimals like 7.5%?",
    answer:
      "Yes. Enter 7.5 in the percentage field and the calculator handles it exactly. For example, 7.5% of 400 = 30.",
  },
  {
    question: "How do I calculate a percentage of a number without a calculator?",
    answer:
      "Divide the number by 100 to get 1%, then multiply by the percentage you need. For 30% of 90: 90 ÷ 100 = 0.9, then 0.9 × 30 = 27.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "What is X% of Y? — Percentage of a Number Calculator",
  description:
    "Find what any percentage of a number is instantly. Enter a percentage and a number to calculate the result.",
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
        intro="Type a percentage and a number — get the answer instantly. Useful for calculating tips, sale discounts, tax amounts, or any time you need to find a share of a total."
        calculator={<WhatIsXPercentOfYWidget />}
        howTo={[
          "Enter the percentage value in the first field (e.g. 25 for 25%).",
          "Enter the number you want to find the percentage of in the second field.",
          "The result updates instantly as you type.",
        ]}
        formula="Result = (X / 100) × Y"
        formulaExplained="Divide the percentage X by 100 to convert it to a decimal, then multiply by the number Y."
        examples={[
          { input: "What is 20% of 150?", output: "30" },
          { input: "What is 7.5% of 400?", output: "30" },
          { input: "What is 1% of 1000?", output: "10" },
        ]}
        useCases={[
          "Calculating a tip on a restaurant bill",
          "Finding a discount amount on a sale item",
          "Determining tax on a purchase",
          "Splitting a bill by percentage",
          "Calculating commission on sales",
        ]}
        faqs={faqs}
      />
    </>
  )
}
