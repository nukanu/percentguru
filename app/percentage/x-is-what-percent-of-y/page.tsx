import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import XIsWhatPercentOfYWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "30 is what percent of 200?",
    answer: "30 is 15% of 200. Calculation: (30 / 200) × 100 = 15.",
  },
  {
    question: "50 is what percent of 400?",
    answer: "50 is 12.5% of 400. Calculation: (50 / 400) × 100 = 12.5.",
  },
  {
    question: "How do you find what percent one number is of another?",
    answer: "Divide the first number (X) by the second (Y), then multiply by 100. For example, 18 is what percent of 72? (18 / 72) × 100 = 25%.",
  },
  {
    question: "What if the result is more than 100%?",
    answer: "That's valid — it means X is greater than Y. For example, 150 is 150% of 100.",
  },
  {
    question: "What if I want to know what percent 120 is of 80?",
    answer: "Enter 120 as X and 80 as Y. The result is 150% — meaning 120 is 150% of 80, which makes sense since 120 is larger than 80.",
  },
  {
    question: "1 is what percent of 4?",
    answer: "1 is 25% of 4. Calculation: (1 / 4) × 100 = 25.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "X is What Percent of Y? Calculator",
  description: "Find what percentage one number is of another. Enter any two numbers — works for test scores, budget shares, survey results, and more.",
  path: "/percentage/x-is-what-percent-of-y/",
  keywords: ["x is what percent of y", "what percent of", "percentage ratio calculator"],
})

export default function XIsWhatPercentOfYPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("X is What Percent of Y Calculator", "Find what percentage one number is of another.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "X is What % of Y?", href: "/percentage/x-is-what-percent-of-y/" },
        ]} />
      </div>
      <CalculatorShell
        slug="x-is-what-percent-of-y"
        title="X is What Percent of Y?"
        intro="Got two numbers and need to know what percentage one is of the other? Enter the part and the total — this calculator tells you exactly what percent the first number is of the second."
        calculator={<XIsWhatPercentOfYWidget />}
        howTo={[
          "Enter the value (X) in the first field — the part you want to express as a percentage.",
          "Enter the total (Y) in the second field.",
          "The percentage appears instantly.",
        ]}
        formula="Percentage = (X / Y) × 100"
        formulaExplained="Divide X by Y to get the proportion, then multiply by 100 to convert it to a percentage."
        examples={[
          { input: "40 is what percent of 160?", output: "25%" },
          { input: "7 is what percent of 28?", output: "25%" },
          { input: "3 is what percent of 8?", output: "37.5%" },
        ]}
        useCases={[
          "Calculating a test score as a percentage",
          "Finding what share of a budget was spent",
          "Expressing a survey response as a percentage of total",
          "Comparing part-to-whole in data analysis",
          "Determining ownership or equity percentage",
        ]}
        faqs={faqs}
      />
    </>
  )
}
