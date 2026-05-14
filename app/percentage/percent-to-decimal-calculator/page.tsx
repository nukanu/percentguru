import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import PercentToDecimalWidget from "./CalculatorWidget"

const COMMON = [
  [1, 0.01], [5, 0.05], [10, 0.1], [12.5, 0.125],
  [15, 0.15], [20, 0.2], [25, 0.25], [30, 0.3],
  [33.33, 0.3333], [40, 0.4], [50, 0.5], [60, 0.6],
  [66.67, 0.6667], [75, 0.75], [80, 0.8], [90, 0.9],
] as [number, number][]

function LookupTable() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 mb-3">Common Percent to Decimal Conversions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {COMMON.map(([p, d]) => (
          <div key={p} className="border border-gray-200 rounded-lg px-3 py-2.5 bg-white flex justify-between items-center">
            <span className="font-bold text-blue-700 text-sm">{p}%</span>
            <span className="text-gray-600 font-mono text-sm">{d}</span>
          </div>
        ))}
      </div>
    </>
  )
}

const faqs = [
  {
    question: "What is 75% as a decimal?",
    answer: "75% as a decimal is 0.75. Divide by 100: 75 ÷ 100 = 0.75.",
  },
  {
    question: "What is 15% as a decimal?",
    answer: "15% as a decimal is 0.15. Divide by 100: 15 ÷ 100 = 0.15. This is commonly needed for tip calculations — a 15% tip is the bill multiplied by 0.15.",
  },
  {
    question: "What is 8.5% as a decimal?",
    answer: "8.5% as a decimal is 0.085. Divide by 100: 8.5 ÷ 100 = 0.085. Moving the decimal point two places to the left works for any value.",
  },
  {
    question: "What is 100% as a decimal?",
    answer: "100% as a decimal is 1.0. 200% = 2.0, 150% = 1.5. Any percentage over 100% gives a decimal greater than 1.",
  },
  {
    question: "Why do I need to convert percentages to decimals?",
    answer: "Many formulas require the decimal form of a rate. Compound interest, loan payment formulas, and spreadsheet functions like RATE() or PMT() all require the rate as a decimal. Entering 20% directly into a formula gives the wrong answer — you need 0.20.",
  },
  {
    question: "How do I convert a percentage to a decimal without a calculator?",
    answer: <>Divide by 100, or equivalently move the decimal point two places to the left. For 35%: 35 ÷ 100 = 0.35. For 7.5%: 7.5 ÷ 100 = 0.075. To go the other direction, use the <Link href="/percentage/decimal-to-percent-calculator/" className="text-blue-600 hover:underline">decimal to percent calculator</Link>.</>,
    schemaAnswer: "Divide by 100, or move the decimal point two places to the left. For 35%: 35 ÷ 100 = 0.35. For 7.5%: 7.5 ÷ 100 = 0.075.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percent to Decimal Calculator — Convert Any Percentage",
  description: "Convert any percentage to a decimal instantly. Enter 75% to get 0.75, 8.5% to get 0.085, or any percentage — includes a reference table of common conversions.",
  path: "/percentage/percent-to-decimal-calculator/",
  keywords: ["percent to decimal calculator", "convert percentage to decimal", "percent to decimal", "75 percent as a decimal"],
})

export default function PercentToDecimalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Percent to Decimal Calculator", "Convert any percentage to a decimal instantly.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Percent to Decimal", href: "/percentage/percent-to-decimal-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="percent-to-decimal-calculator"
        title="Percent to Decimal Calculator"
        intro={<>Enter any percentage to get the decimal equivalent instantly. Divides by 100 — so 75% becomes 0.75, 8.5% becomes 0.085, and 150% becomes 1.5. This conversion is required whenever a formula or spreadsheet function expects a rate as a decimal rather than a percentage. For the reverse — converting a decimal back to a percentage — use the <Link href="/percentage/decimal-to-percent-calculator/" className="text-blue-600 hover:underline">decimal to percent calculator</Link>.</>}
        whenToUse="Use this before entering a percentage into a formula, function, or calculation that requires a decimal rate — interest rate formulas, loan calculators, Excel/Sheets financial functions (PMT, RATE, FV), or probability calculations."
        calculator={<PercentToDecimalWidget />}
        howTo={[
          "Enter the percentage value — just the number, without the % symbol.",
          "The decimal equivalent appears instantly.",
        ]}
        formula="Decimal = Percentage ÷ 100"
        formulaExplained="Divide the percentage by 100 to move the decimal point two places to the left. For 37.5%: 37.5 ÷ 100 = 0.375. For 125%: 125 ÷ 100 = 1.25."
        examples={[
          { input: "75%", output: "0.75" },
          { input: "8.5%", output: "0.085" },
          { input: "33.33%", output: "0.3333" },
          { input: "150%", output: "1.5" },
        ]}
        useCases={[
          "Converting interest rates for loan or savings formulas",
          "Entering rates into Excel PMT, FV, or RATE functions",
          "Converting probabilities expressed as percentages",
          "Applying a percentage discount in a manual calculation",
          "Converting tax rates before using them in price calculations",
        ]}
        faqs={faqs}
        lookupTable={<LookupTable />}
      />
    </>
  )
}
