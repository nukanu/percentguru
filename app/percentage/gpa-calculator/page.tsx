import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import GpaCalculatorWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is a good GPA?",
    answer: "On the 4.0 scale: 3.7–4.0 is typically Dean's List range, 3.0–3.6 is good standing, 2.0–2.9 is satisfactory (meets most graduation requirements), and below 2.0 is academic probation at most universities. Graduate school applications generally expect 3.0+ for admission, and competitive programs want 3.5+.",
  },
  {
    question: "How is GPA calculated?",
    answer: "Each letter grade maps to a grade point value (A = 4.0, B = 3.0, C = 2.0, D = 1.0, F = 0.0 — with +/− adjustments of 0.3). Multiply each course's grade points by its credit hours to get quality points. Sum all quality points, then divide by total credit hours. This is a weighted average where heavier courses (more credits) count more.",
  },
  {
    question: "What is a 3.5 GPA as a letter grade?",
    answer: "A 3.5 GPA falls between a B+ (3.3) and an A- (3.7) — roughly equivalent to a high B+ average. It represents strong academic performance and qualifies for most Dean's List programs, which typically require 3.5 or higher.",
  },
  {
    question: "Does a 3-credit course count more than a 1-credit course?",
    answer: "Yes — that's the point of the weighted average. A grade in a 3-credit course has three times the impact on your GPA as the same grade in a 1-credit course. This is why a low grade in a high-credit course like a major requirement hurts more than a low grade in a single-credit elective.",
  },
  {
    question: "What GPA do I need to raise my average to 3.0?",
    answer: "It depends on how many credits you've already completed. The more prior credits you have, the harder it is to move the needle. If you have 60 credits at a 2.5 GPA and need a 3.0, you need to earn a 4.0 average in the next 60 credits — half your remaining degree — just to reach 3.0. Use this calculator to experiment with grade and credit combinations.",
  },
  {
    question: "Is GPA calculated the same everywhere?",
    answer: <>Most US universities use the 4.0 scale. However, some schools use a 4.3 scale where A+ = 4.3 rather than 4.0. UK universities use a different classification system entirely (First, 2:1, 2:2, Third) based on percentage marks rather than a GPA scale. If you need to convert a score to a percentage, the <Link href="/percentage/grade-calculator/" className="text-blue-600 hover:underline">grade calculator</Link> handles that separately.</>,
    schemaAnswer: "Most US universities use the 4.0 scale. Some schools use a 4.3 scale where A+ = 4.3. UK universities use a classification system (First, 2:1, 2:2, Third) based on percentage marks rather than GPA.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "GPA Calculator — Calculate Your Grade Point Average",
  description: "Enter your letter grades and credit hours to calculate your GPA on the 4.0 scale. Add as many courses as you need — works for semester or cumulative GPA.",
  path: "/percentage/gpa-calculator/",
  keywords: ["GPA calculator", "grade point average calculator", "college GPA calculator", "how to calculate GPA", "semester GPA calculator"],
})

export default function GpaCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("GPA Calculator", "Calculate your GPA on the 4.0 scale from letter grades and credit hours.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "GPA Calculator", href: "/percentage/gpa-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="gpa-calculator"
        title="GPA Calculator"
        intro={<>Select a letter grade and enter credit hours for each course to calculate your GPA on the 4.0 scale. Works for a single semester or cumulative across all terms — just add all your courses. Each course is weighted by credit hours, so a 4-credit course affects your GPA four times as much as a 1-credit course. For converting a specific test score to a percentage and letter grade, use the <Link href="/percentage/grade-calculator/" className="text-blue-600 hover:underline">grade calculator</Link>. For combining grades with different weights, the <Link href="/finance/weighted-average-calculator/" className="text-blue-600 hover:underline">weighted average calculator</Link> handles custom weights.</>}
        whenToUse="Use this at the end of each semester to calculate your semester GPA, or enter all your completed courses to find your cumulative GPA. Also useful before a semester ends to project what GPA you'll need to reach a target."
        calculator={<GpaCalculatorWidget />}
        howTo={[
          "Select the letter grade you received for each course from the dropdown.",
          "Enter the number of credit hours (units) for that course.",
          "Add more courses with the '+ Add course' button.",
          "Your GPA updates instantly as you enter grades.",
        ]}
        formula="GPA = Sum(Grade Points × Credit Hours) ÷ Total Credit Hours"
        formulaExplained="Each letter grade has a point value (A = 4.0, B+ = 3.3, B = 3.0, etc.). Multiply each course's grade points by its credit hours, add all those up, then divide by the total credit hours. This is a weighted average — courses with more credits count proportionally more."
        examples={[
          { input: "A (3cr), B+ (3cr), B (4cr), A- (3cr)", output: "3.43 GPA" },
          { input: "B (3cr), C+ (3cr), A (3cr)", output: "3.10 GPA" },
          { input: "A (4cr), A- (4cr), B+ (3cr)", output: "3.71 GPA" },
        ]}
        useCases={[
          "Checking your semester GPA as grades come in",
          "Calculating cumulative GPA across all completed courses",
          "Projecting the GPA needed this semester to hit a target",
          "Evaluating how a retaken course will affect your overall average",
          "Comparing GPA scenarios for graduate school applications",
        ]}
        faqs={faqs}
      />
    </>
  )
}
