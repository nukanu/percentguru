import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import PercentageErrorWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is percentage error?",
    answer: "Percentage error measures how far an experimental or measured value is from the accepted theoretical value, expressed as a percentage. It quantifies the accuracy of a measurement.",
  },
  {
    question: "What is the percentage error if experimental is 9.8 and theoretical is 10?",
    answer: "The percentage error is 2%. Calculation: |9.8 − 10| / 10 × 100 = 0.2 / 10 × 100 = 2.",
  },
  {
    question: "What is a good percentage error?",
    answer: "It depends on the context. In most lab experiments, under 5% is considered acceptable. In precision engineering, even 1% may be too high.",
  },
  {
    question: "Why is percentage error always positive?",
    answer: "The formula uses the absolute value of the difference, so the sign of the error doesn't matter — only its magnitude. This makes it easier to compare accuracy across experiments.",
  },
  {
    question: "What is the percentage error if experimental is 105 and theoretical is 100?",
    answer: "The percentage error is 5%. Calculation: |105 − 100| / 100 × 100 = 5.",
  },
  {
    question: "What is the difference between percentage error and percentage difference?",
    answer: "Percentage error compares a measured value against a known correct value, dividing by the theoretical value. Percentage difference compares two equivalent values using their average as the denominator.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percentage Error Calculator",
  description: "Calculate the percentage error between an experimental and theoretical value. Used in science, engineering, and lab work.",
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
        intro="Enter your experimental (measured) value and the theoretical (accepted) value to find the percentage error. Used in science labs, engineering, and any field where measurement accuracy matters."
        calculator={<PercentageErrorWidget />}
        howTo={[
          "Enter the experimental value — the result you measured or observed.",
          "Enter the theoretical value — the accepted or expected correct value.",
          "The percentage error is calculated instantly.",
        ]}
        formula="Percentage Error = (|Experimental − Theoretical| / Theoretical) × 100"
        formulaExplained="Take the absolute difference between your measured and expected values, divide by the theoretical value, then multiply by 100."
        examples={[
          { input: "Experimental: 9.5, Theoretical: 10", output: "5%" },
          { input: "Experimental: 102, Theoretical: 100", output: "2%" },
          { input: "Experimental: 4.8, Theoretical: 5", output: "4%" },
        ]}
        useCases={[
          "Checking accuracy of lab measurements in chemistry or physics",
          "Validating sensor readings against calibrated values",
          "Assessing quality control in manufacturing",
          "Comparing model predictions to actual outcomes",
          "Evaluating experimental results in academic coursework",
        ]}
        faqs={faqs}
      />
    </>
  )
}
