import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import FractionToPercentWidget from "./CalculatorWidget"

const COMMON_FRACTIONS = [
  { n: 1, d: 2 }, { n: 1, d: 3 }, { n: 2, d: 3 }, { n: 1, d: 4 }, { n: 3, d: 4 },
  { n: 1, d: 5 }, { n: 2, d: 5 }, { n: 3, d: 5 }, { n: 4, d: 5 },
  { n: 1, d: 8 }, { n: 3, d: 8 }, { n: 5, d: 8 }, { n: 7, d: 8 },
  { n: 1, d: 10 }, { n: 3, d: 10 }, { n: 7, d: 10 }, { n: 9, d: 10 },
]

function fmtPct(n: number, d: number) {
  const v = (n / d) * 100
  return v % 1 === 0 ? `${v}%` : `${v.toFixed(4).replace(/\.?0+$/, "")}%`
}

function CommonFractionTable() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 mb-3">Common Fractions as Percentages</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {COMMON_FRACTIONS.map(({ n, d }) => (
          <div key={`${n}/${d}`} className="border border-gray-200 rounded-lg px-3 py-2.5 bg-white flex justify-between items-center">
            <span className="text-gray-600 font-mono text-sm">{n}/{d}</span>
            <span className="font-bold text-blue-700 text-sm">{fmtPct(n, d)}</span>
          </div>
        ))}
      </div>
    </>
  )
}

const faqs = [
  {
    question: "What is 3/8 as a percentage?",
    answer: "3/8 as a percentage is 37.5%. Calculation: (3 ÷ 8) × 100 = 37.5.",
  },
  {
    question: "What is 5/6 as a percentage?",
    answer: "5/6 as a percentage is 83.33% (recurring). Calculation: (5 ÷ 6) × 100 = 83.333...",
  },
  {
    question: "What is 7/8 as a percentage?",
    answer: "7/8 as a percentage is 87.5%. Calculation: (7 ÷ 8) × 100 = 87.5.",
  },
  {
    question: "What is 2/3 as a percentage?",
    answer: "2/3 as a percentage is 66.67% (recurring). Calculation: (2 ÷ 3) × 100 = 66.666...",
  },
  {
    question: "How do I convert a fraction to a percentage without a calculator?",
    answer: "Divide the numerator by the denominator, then multiply by 100. For fractions with denominators of 2, 4, 5, 10, 20, or 25, you can often convert to an equivalent fraction with denominator 100 directly — for example, 3/4 = 75/100 = 75%.",
  },
  {
    question: "What is the difference between a fraction and a percentage?",
    answer: <>A fraction expresses a ratio as numerator/denominator (e.g. 3/4). A percentage expresses it as parts per 100 (e.g. 75%). They represent the same value in different forms. If you need to work in the other direction — finding what fraction of a total something represents — use the <Link href="/percentage/x-is-what-percent-of-y/" className="text-blue-600 hover:underline">X is what percent of Y calculator</Link>.</>,
    schemaAnswer: "A fraction expresses a ratio as numerator/denominator (e.g. 3/4). A percentage expresses it as parts per 100 (e.g. 75%). They represent the same value in different forms.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Fraction to Percent Calculator — Convert Any Fraction",
  description: "Convert any fraction to a percentage instantly. Enter numerator and denominator — includes a reference table of common fractions like 1/2, 3/4, 2/3, and more.",
  path: "/percentage/fraction-to-percent-calculator/",
  keywords: ["fraction to percent calculator", "fraction to percentage", "convert fraction to percent", "what is 3/8 as a percent"],
})

export default function FractionToPercentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Fraction to Percent Calculator", "Convert any fraction to a percentage instantly.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Fraction to Percent", href: "/percentage/fraction-to-percent-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="fraction-to-percent-calculator"
        title="Fraction to Percent Calculator"
        intro={<>Enter any fraction — numerator over denominator — to instantly get the percentage and decimal equivalent. Works for proper fractions, improper fractions, and mixed number conversions. For the reverse — entering a percentage to find the original value — use the <Link href="/percentage/reverse-percentage-calculator/" className="text-blue-600 hover:underline">reverse percentage calculator</Link>. To see what percentage one number is of another as whole numbers, use the <Link href="/percentage/x-is-what-percent-of-y/" className="text-blue-600 hover:underline">X is what percent of Y calculator</Link>.</>}
        whenToUse="Use this when you have a fraction (a score like 17/20, a ratio like 3/8, or a proportion like 2/3) and need to express it as a percentage. Common in test scoring, recipe scaling, finance ratios, and probability."
        calculator={<FractionToPercentWidget />}
        howTo={[
          "Enter the numerator (top number) in the first field.",
          "Enter the denominator (bottom number) in the second field.",
          "See the percentage and decimal instantly.",
        ]}
        formula="Percentage = (Numerator ÷ Denominator) × 100"
        formulaExplained="Divide the top number by the bottom number to get the decimal, then multiply by 100 to convert to a percentage. For 3/8: 3 ÷ 8 = 0.375, then 0.375 × 100 = 37.5%."
        examples={[
          { input: "1/2", output: "50%" },
          { input: "3/4", output: "75%" },
          { input: "3/8", output: "37.5%" },
          { input: "2/3", output: "66.67%" },
        ]}
        useCases={[
          "Converting test scores (e.g. 17/20) to a percentage grade",
          "Expressing probability or odds as a percentage",
          "Converting financial ratios to percentage form",
          "Recipe and measurement conversions",
          "Checking what percentage of a target has been reached",
        ]}
        faqs={faqs}
        lookupTable={<CommonFractionTable />}
      />
    </>
  )
}
