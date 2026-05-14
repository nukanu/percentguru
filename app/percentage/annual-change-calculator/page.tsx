import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import AnnualChangeWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is CAGR and how is it different from simple annual change?",
    answer: "Simple annual change compares just two consecutive years. CAGR (Compound Annual Growth Rate) smooths out growth over multiple years into a single equivalent annual rate. If revenue grew 40% over 3 years, CAGR tells you the steady rate per year that would produce the same result — roughly 11.9%, not 40%÷3.",
  },
  {
    question: "What is the annual percentage change formula?",
    answer: "For a single year: (New − Old) ÷ Old × 100. For multiple years (CAGR): ((End ÷ Start) ^ (1 ÷ Years) − 1) × 100. The single-year formula gives you a raw change; CAGR gives you a per-year compound rate.",
  },
  {
    question: "Can I use this for population growth?",
    answer: "Yes. Enter the starting population as the start value, the current population as the end value, and the number of years elapsed. The result is the average annual population growth rate over that period.",
  },
  {
    question: "What if my value declined over the period?",
    answer: "Enter the starting value and the lower ending value — the calculator will return a negative CAGR, showing the average annual rate of decline. For example, a portfolio dropping from $20,000 to $14,000 over 4 years has a CAGR of roughly −8.5% per year.",
  },
  {
    question: "How is this different from the percentage change calculator?",
    answer: <>The <Link href="/percentage/percentage-change-calculator/" className="text-blue-600 hover:underline">percentage change calculator</Link> tells you the total change between two values. This calculator goes further by distributing that change across multiple years to find the equivalent annual rate — useful when comparing investments or growth metrics over different time periods.</>,
    schemaAnswer: "The percentage change calculator tells you the total change between two values. This calculator goes further by distributing that change across multiple years to find the equivalent annual rate — useful when comparing investments or growth metrics over different time periods.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Annual Percentage Change Calculator — CAGR & Total Growth",
  description: "Calculate the annual growth rate (CAGR) and total percentage change between any two values over any number of years.",
  path: "/percentage/annual-change-calculator/",
  keywords: ["annual percentage change calculator", "CAGR calculator", "annual growth rate calculator", "compound annual growth rate", "annual percent change"],
})

export default function AnnualChangePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Annual Percentage Change Calculator", "Calculate CAGR and total percentage change over any number of years.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Annual Change Calculator", href: "/percentage/annual-change-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="annual-change-calculator"
        title="Annual Percentage Change Calculator"
        intro={<>Enter a starting value, ending value, and the number of years to get both the compound annual growth rate (CAGR) and the total change. CAGR is the standard way to compare growth across different time horizons — a 30% gain over 2 years is very different from a 30% gain over 5 years. For a single-period comparison, the <Link href="/percentage/percentage-change-calculator/" className="text-blue-600 hover:underline">percentage change calculator</Link> covers that directly.</>}
        whenToUse="Use this when you need to compare growth rates across different time periods — investment returns, revenue growth, population change, or any metric where you want to express multi-year change as a per-year rate. CAGR is the standard metric for this in finance and business reporting."
        calculator={<AnnualChangeWidget />}
        howTo={[
          "Enter the starting value — the number at the beginning of the period.",
          "Enter the ending value — the number at the end of the period.",
          "Enter the number of years between the two values.",
          "See the annual growth rate (CAGR) and total change instantly.",
        ]}
        formula="CAGR = (End ÷ Start) ^ (1 ÷ Years) − 1"
        formulaExplained="Divide the ending value by the starting value, raise the result to the power of (1 ÷ years), then subtract 1. Multiply by 100 for the percentage. For example: $14,000 growing to $20,000 over 3 years → (20000÷14000)^(1÷3) − 1 = 12.6% per year."
        examples={[
          { input: "$10,000 → $14,641 over 4 years", output: "10.0% per year (46.4% total)" },
          { input: "1,000 users → 3,375 users over 3 years", output: "50.0% per year (237.5% total)" },
          { input: "$50,000 → $42,000 over 2 years", output: "−8.3% per year (−16.0% total)" },
        ]}
        useCases={[
          "Comparing investment portfolio performance year over year",
          "Calculating business revenue or profit growth rates for presentations",
          "Measuring population or user growth for forecasting models",
          "Evaluating whether an asset appreciated faster than inflation",
          "Benchmarking your salary growth rate across multiple job changes",
        ]}
        faqs={faqs}
      />
    </>
  )
}
