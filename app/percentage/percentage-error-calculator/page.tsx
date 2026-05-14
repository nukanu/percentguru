import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import PercentageErrorWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is percentage error?",
    answer: "Percentage error measures how far an experimental or measured value is from the accepted theoretical value. It quantifies accuracy — the closer to 0%, the more accurate the measurement.",
  },
  {
    question: "What is the percentage error if experimental is 9.8 and theoretical is 10?",
    answer: "The percentage error is 2%. Calculation: |9.8 − 10| / 10 × 100 = 0.2 / 10 × 100 = 2.",
  },
  {
    question: "What is the percentage error if experimental is 105 and theoretical is 100?",
    answer: "The percentage error is 5%. Calculation: |105 − 100| / 100 × 100 = 5. This works the same whether the measurement is above or below the theoretical value.",
  },
  {
    question: "What is a good percentage error?",
    answer: "Context-dependent. In most school lab experiments, under 5% is acceptable. In precision manufacturing or medical equipment, even 0.5% may be too high. In chemical titrations, under 1% is typical. Always check the acceptable tolerance for your specific application.",
  },
  {
    question: "Why is percentage error always positive?",
    answer: "The formula uses the absolute value of the difference, so the sign of the error is discarded. This makes sense because accuracy is about magnitude, not direction — being 2% too high is as inaccurate as being 2% too low.",
  },
  {
    question: "What is the difference between percentage error and percentage difference?",
    answer: <>Percentage error requires a known correct value — it measures deviation from that reference. <Link href="/percentage/percentage-difference-calculator/" className="text-blue-600 hover:underline">Percentage difference</Link> treats both values as equally valid and uses their average as the denominator. Use percentage error in scientific and engineering contexts where a true or accepted value exists.</>,
    schemaAnswer: "Percentage error requires a known correct value — it measures deviation from that reference. Percentage difference treats both values as equally valid and uses their average. Use percentage error in scientific contexts where a true value exists.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percentage Error Calculator — Experimental vs Theoretical",
  description: "Calculate the percentage error between a measured value and the theoretical (accepted) value. Instantly shows how accurate an experiment or estimate is.",
  path: "/percentage/percentage-error-calculator/",
  keywords: ["percentage error calculator", "percent error", "calculate percentage error", "experimental vs theoretical"],
})

export default function PercentageErrorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Percentage Error Calculator", "Calculate the percentage error between experimental and theoretical values.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Percentage Error Calculator", href: "/percentage/percentage-error-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="percentage-error-calculator"
        title="Percentage Error Calculator"
        intro={<>Enter your measured value and the accepted theoretical value to find out how accurate your measurement was. A result close to 0% means high accuracy. Used in chemistry, physics, engineering, and quality control wherever you need to validate a measurement against a known reference. The result is always positive because the formula uses absolute difference — direction doesn&apos;t matter, only the size of the deviation. If you&apos;re comparing two values with no clear reference point, the <Link href="/percentage/percentage-difference-calculator/" className="text-blue-600 hover:underline">percentage difference calculator</Link> is more appropriate, and for general before/after comparisons use the <Link href="/percentage/percentage-change-calculator/" className="text-blue-600 hover:underline">percentage change calculator</Link>.</>}
        whenToUse="Use this in any situation where you have an expected value and need to evaluate how close your actual measurement came — a lab titration, a sensor reading against a calibrated standard, a model forecast versus actual outcome, or a student experiment checking against a textbook value."
        calculator={<PercentageErrorWidget />}
        howTo={[
          "Enter the experimental value — the result you measured or observed.",
          "Enter the theoretical value — the accepted or expected correct value.",
          "The percentage error is calculated instantly.",
        ]}
        formula="Percentage Error = (|Experimental − Theoretical| / Theoretical) × 100"
        formulaExplained="Take the absolute difference between your measured and expected values, divide by the theoretical value, then multiply by 100. The absolute value ensures the result is always positive regardless of direction."
        examples={[
          { input: "Experimental: 9.5, Theoretical: 10", output: "5% error" },
          { input: "Experimental: 102, Theoretical: 100", output: "2% error" },
          { input: "Experimental: 4.65, Theoretical: 5", output: "7% error" },
        ]}
        useCases={[
          "Checking the accuracy of lab measurements in chemistry or physics",
          "Validating sensor or instrument readings against calibrated values",
          "Assessing quality control tolerances in manufacturing",
          "Comparing model predictions to known outcomes",
          "Evaluating experimental results in academic coursework",
        ]}
        faqs={faqs}
      />
    </>
  )
}
