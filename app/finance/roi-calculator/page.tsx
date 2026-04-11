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
    answer: "ROI (Return on Investment) measures the gain or loss on an investment relative to the amount invested. A positive ROI means you made money; a negative ROI means you lost it.",
  },
  {
    question: "What is the ROI on a $1,000 investment that returned $1,400?",
    answer: "The ROI is 40%. Calculation: ($1,400 − $1,000) / $1,000 × 100 = 40%.",
  },
  {
    question: "What is the ROI formula?",
    answer: "ROI = ((Final Value − Initial Investment) / Initial Investment) × 100. A positive result is a gain; a negative result is a loss.",
  },
  {
    question: "What is a good ROI?",
    answer: "Context-dependent. Stock market investors typically target 7–10% annually. Real estate often sees 8–12%. Short-term business projects are measured against opportunity cost and time horizon. There is no universal threshold — compare against the next-best alternative use of the same capital.",
  },
  {
    question: "Can ROI be negative?",
    answer: "Yes. If the final value is less than the initial investment, ROI is negative. Investing $500 and receiving $400 back gives an ROI of −20%.",
  },
  {
    question: "What is the difference between ROI and profit margin?",
    answer: <>ROI measures return relative to what you <em>invested</em>. <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">Profit margin</Link> measures profit relative to <em>revenue</em>. ROI is better for evaluating investment decisions; profit margin is better for assessing how efficiently revenue converts to profit. A business can have a high profit margin and low ROI if the capital requirements are large.</>,
    schemaAnswer: "ROI measures return relative to what you invested. Profit margin measures profit relative to revenue. ROI is better for evaluating investment decisions; profit margin is better for assessing operational efficiency.",
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
        intro={<>Enter your initial investment and the final value it returned — the calculator shows your ROI percentage and exact net gain or loss. Used for evaluating stocks, real estate, business projects, and marketing spend. ROI doesn&apos;t account for time — a 40% return over 10 years is very different from 40% in one year, so factor in the holding period when comparing options. To assess whether a business is worth funding at all, the <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link> shows how many units need to sell before any return is possible.</>}
        whenToUse="Use this to evaluate any investment with a measurable outcome — a stock position, property purchase, ad campaign, or business project. Particularly useful when comparing two options side by side to see which generated a better return relative to what was put in."
        calculator={<ROICalculatorWidget />}
        howTo={[
          "Enter the initial investment — the amount you put in.",
          "Enter the final value — what you received back.",
          "ROI percentage and net gain or loss are shown instantly.",
        ]}
        formula="ROI = ((Final Value − Initial Investment) / Initial Investment) × 100"
        formulaExplained="Subtract the initial investment from the final value to get the net gain. Divide by the initial investment, then multiply by 100. A positive result is a gain; negative is a loss."
        examples={[
          { input: "Invested $2,000, returned $2,600", output: "30% ROI — +$600 gain" },
          { input: "Invested $500, returned $450", output: "−10% ROI — −$50 loss" },
          { input: "Invested $10,000, returned $15,500", output: "55% ROI — +$5,500 gain" },
        ]}
        useCases={[
          "Evaluating stock or fund investment performance",
          "Comparing the return on different investment options",
          "Assessing business project or marketing campaign profitability",
          "Measuring real estate investment returns",
          "Deciding whether to reinvest in an asset or redeploy capital",
        ]}
        faqs={faqs}
      />
    </>
  )
}
