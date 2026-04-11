import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import ROICalculatorWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is ROI?",
    answer: "ROI (Return on Investment) measures the gain or loss on an investment relative to the amount invested. It tells you what percentage return you earned — or lost — on your money.",
  },
  {
    question: "What is the ROI on a $1,000 investment that returned $1,400?",
    answer: "The ROI is 40%. Calculation: ($1,400 − $1,000) / $1,000 × 100 = 40%.",
  },
  {
    question: "What is the ROI formula?",
    answer: "ROI = ((Final Value − Initial Investment) / Initial Investment) × 100. A positive result means a gain; a negative result means a loss.",
  },
  {
    question: "What is a good ROI?",
    answer: "It depends on the asset class and time period. Stock market investors typically target 7–10% annually. Real estate often sees 8–12%. Short-term trades or business investments are measured against opportunity cost. There is no universal 'good' — context matters.",
  },
  {
    question: "Can ROI be negative?",
    answer: "Yes. If your final value is less than the initial investment, ROI is negative — meaning you lost money. For example, investing $500 and receiving back $400 gives an ROI of −20%.",
  },
  {
    question: "What is the difference between ROI and profit margin?",
    answer: <>ROI measures return relative to what you invested. <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">Profit margin</Link> measures profit relative to revenue. Use ROI to evaluate the efficiency of an investment; use profit margin to assess how much of each sale is kept as profit.</>,
    schemaAnswer: "ROI measures return relative to what you invested. Profit margin measures profit relative to revenue. Use ROI to evaluate the efficiency of an investment; use profit margin to assess how much of each sale is kept as profit.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "ROI Calculator — Return on Investment",
  description: "Calculate your return on investment instantly. Enter your initial investment and final value to see ROI percentage and net gain or loss.",
  path: "/finance/roi-calculator/",
  keywords: ["ROI calculator", "return on investment calculator", "calculate ROI", "investment return percentage"],
})

export default function ROICalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("ROI Calculator", "Calculate return on investment percentage and net gain or loss.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "ROI Calculator", href: "/finance/roi-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="roi-calculator"
        title="ROI Calculator"
        intro="Enter your initial investment and the final value it returned — the calculator shows your ROI percentage and exact net gain or loss. Useful for evaluating stocks, real estate, business projects, or any investment."
        calculator={<ROICalculatorWidget />}
        howTo={[
          "Enter the initial investment — the amount you put in.",
          "Enter the final value — what you received back.",
          "ROI percentage and net gain or loss are shown instantly.",
        ]}
        formula="ROI = ((Final Value − Initial Investment) / Initial Investment) × 100"
        formulaExplained="Subtract the initial investment from the final value to get the net gain. Divide by the initial investment, then multiply by 100 to express as a percentage."
        examples={[
          { input: "Invested $2,000, returned $2,600", output: "30% ROI — +$600 gain" },
          { input: "Invested $500, returned $450", output: "−10% ROI — −$50 loss" },
          { input: "Invested $10,000, returned $14,500", output: "45% ROI — +$4,500 gain" },
        ]}
        useCases={[
          "Evaluating stock or fund investment performance",
          "Comparing returns across different investments",
          "Assessing business project profitability",
          "Measuring real estate investment returns",
          "Tracking marketing campaign ROI",
        ]}
        faqs={faqs}
      />
    </>
  )
}
