import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import DecimalToPercentWidget from "./CalculatorWidget"

const COMMON = [
  [0.01, "1%"], [0.05, "5%"], [0.1, "10%"], [0.125, "12.5%"],
  [0.15, "15%"], [0.2, "20%"], [0.25, "25%"], [0.3, "30%"],
  [0.333, "33.3%"], [0.4, "40%"], [0.5, "50%"], [0.6, "60%"],
  [0.667, "66.7%"], [0.75, "75%"], [0.8, "80%"], [0.9, "90%"],
] as [number, string][]

function LookupTable() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 mb-3">Common Decimal to Percent Conversions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {COMMON.map(([d, p]) => (
          <div key={d} className="border border-gray-200 rounded-lg px-3 py-2.5 bg-white flex justify-between items-center">
            <span className="text-gray-600 font-mono text-sm">{d}</span>
            <span className="font-bold text-blue-700 text-sm">{p}</span>
          </div>
        ))}
      </div>
    </>
  )
}

const faqs = [
  {
    question: "What is 0.75 as a percentage?",
    answer: "0.75 as a percentage is 75%. Multiply by 100: 0.75 × 100 = 75.",
  },
  {
    question: "What is 0.5 as a percentage?",
    answer: "0.5 as a percentage is 50%. Multiply by 100: 0.5 × 100 = 50.",
  },
  {
    question: "What is 0.33 as a percentage?",
    answer: "0.33 as a percentage is 33%. The exact fraction 1/3 gives 0.3333... = 33.33% (recurring). If you have 0.33 specifically, that's 33%.",
  },
  {
    question: "What is 1.5 as a percentage?",
    answer: "1.5 as a percentage is 150%. Any decimal greater than 1 gives a percentage greater than 100%.",
  },
  {
    question: "How do I convert a decimal to a percentage?",
    answer: "Multiply the decimal by 100 and add the % symbol. For 0.42: 0.42 × 100 = 42%. To reverse the process and convert a percentage back to a decimal, divide by 100: 42% ÷ 100 = 0.42.",
  },
  {
    question: "Why do you multiply by 100 to convert to a percentage?",
    answer: <>Percentage means &quot;per hundred&quot; — a percentage is how many parts out of 100. A decimal like 0.75 already expresses a proportion, but multiplying by 100 restates it in terms of 100 parts: 75 out of 100. To go the other direction, use the <Link href="/percentage/percent-to-decimal-calculator/" className="text-blue-600 hover:underline">percent to decimal calculator</Link>.</>,
    schemaAnswer: "Percentage means 'per hundred'. A decimal like 0.75 expresses a proportion, and multiplying by 100 restates it as 75 parts out of 100.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Decimal to Percent Calculator — Convert Any Decimal",
  description: "Convert any decimal to a percentage instantly — 0.75 is 75%, 0.5 is 50%, 0.33 is 33%. Includes a reference table. Free.",
  path: "/percentage/decimal-to-percent-calculator/",
  keywords: ["decimal to percent calculator", "convert decimal to percentage", "decimal to percent", "0.75 as a percent"],
})

export default function DecimalToPercentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Decimal to Percent Calculator", "Convert any decimal to a percentage instantly.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Decimal to Percent", href: "/percentage/decimal-to-percent-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="decimal-to-percent-calculator"
        title="Decimal to Percent Calculator"
        intro={<>Enter any decimal to convert it to a percentage instantly. Works for values between 0 and 1 (like 0.75 → 75%) and for decimals greater than 1 (like 1.5 → 150%). For the reverse — converting a percentage back to a decimal — use the <Link href="/percentage/percent-to-decimal-calculator/" className="text-blue-600 hover:underline">percent to decimal calculator</Link>. To convert a fraction to a percentage, use the <Link href="/percentage/fraction-to-percent-calculator/" className="text-blue-600 hover:underline">fraction to percent calculator</Link>.</>}
        whenToUse="Use this when working with probabilities (0.35 → 35%), spreadsheet outputs, scientific data, or any context where values are expressed as decimals but you need percentages — for example when comparing rates or presenting data in a report."
        calculator={<DecimalToPercentWidget />}
        howTo={[
          "Enter the decimal value in the field.",
          "The percentage appears instantly.",
        ]}
        formula="Percentage = Decimal × 100"
        formulaExplained="Multiply the decimal by 100 to move the decimal point two places to the right. For 0.375: 0.375 × 100 = 37.5%. For 1.2: 1.2 × 100 = 120%."
        examples={[
          { input: "0.75", output: "75%" },
          { input: "0.333", output: "33.3%" },
          { input: "0.08", output: "8%" },
          { input: "1.5", output: "150%" },
        ]}
        useCases={[
          "Converting probability values (0.35 = 35% chance)",
          "Expressing spreadsheet ratios as percentages",
          "Converting interest rates in decimal form to percentage",
          "Converting scientific measurements and data outputs",
          "Expressing test accuracy or model performance as a percentage",
        ]}
        faqs={faqs}
        lookupTable={<LookupTable />}
      />
    </>
  )
}
