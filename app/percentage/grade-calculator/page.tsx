import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import GradeCalculatorWidget from "./CalculatorWidget"
import FinalGradeWidget from "./FinalGradeWidget"

const faqs = [
  {
    question: "What percentage is an A grade?",
    answer: "In the standard US grading scale: A+ is 97–100%, A is 93–96%, A− is 90–92%. Different schools and countries use slightly different cutoffs — some start an A at 85% or even 80%. This calculator uses the common US university scale.",
  },
  {
    question: "What is 38 out of 45 as a percentage?",
    answer: "38 out of 45 is 84.44% — a B grade on the standard scale. Calculation: (38 ÷ 45) × 100 = 84.44.",
  },
  {
    question: "What is 17 out of 20 as a percentage?",
    answer: "17 out of 20 is 85% — a B grade. Calculation: (17 ÷ 20) × 100 = 85.",
  },
  {
    question: "What score do I need to get an A?",
    answer: "For an A (93%+) on a 50-point test, you need at least 47 points (93% of 50 = 46.5, round up to 47). For an A− (90%+), you need 45 points. Use the reverse: multiply the total by the target percentage to find the minimum score needed.",
  },
  {
    question: "What do I need on my final to get a 90 if I have an 85?",
    answer: "It depends on the final's weight. If the final is worth 40% of your grade, you need 97.5%: your 85% covers the other 60% (contributing 51 points), so the final must supply the remaining 39 points out of its 40. If the final is only worth 20%, a 90 overall is out of reach — even a perfect score gets you to 88%.",
  },
  {
    question: "Can I still pass if I bomb a final worth 20% of my grade?",
    answer: "Usually, yes. If you're at 75% going in and score 0 on a final worth 20%, you finish with 60% — right at the typical US pass mark. Anything above 0 adds to that. The final-grade tool on this page shows your exact floor and what score keeps you safe.",
  },
  {
    question: "What is the pass mark as a percentage?",
    answer: "Most US courses require 60% to pass (a D grade). UK universities typically set a pass at 40%, with a 2:1 (upper second) starting at 60% and a First at 70%. Always check your institution's specific grading policy.",
  },
  {
    question: "How do I calculate my overall grade across multiple tests?",
    answer: <>If all tests carry equal weight, add up all the marks scored and divide by the total marks possible. For weighted grades — where assignments count differently — use the <Link href="/finance/weighted-average-calculator/" className="text-blue-600 hover:underline">weighted average calculator</Link> with each grade as a value and its weight as the corresponding weight.</>,
    schemaAnswer: "If all tests carry equal weight, add up all the marks scored and divide by the total marks possible. For weighted grades, use a weighted average calculator.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Grade Calculator — Letter Grades & What You Need on the Final",
  description: "Convert any score to a percentage and letter grade, then work out exactly what you need on the final exam to hit your target grade.",
  path: "/percentage/grade-calculator/",
  keywords: ["grade calculator", "test score percentage calculator", "what do i need on my final", "final grade calculator", "score to percentage", "letter grade calculator"],
})

export default function GradeCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Grade Calculator", "Convert any test score to a percentage and letter grade, and calculate the score you need on a final exam to reach your target grade.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Grade Calculator", href: "/percentage/grade-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="grade-calculator"
        title="Grade Calculator"
        intro={<>Enter your score and the total marks available to instantly see the percentage and letter grade. Works for any test, quiz, assignment, or exam — enter the raw numbers and get the result. For converting a percentage back to a score (e.g. "what is 80% of 45?"), use the <Link href="/percentage/what-is-x-percent-of-y/" className="text-blue-600 hover:underline">percentage of a number calculator</Link>. For weighted grades across multiple assignments, the <Link href="/finance/weighted-average-calculator/" className="text-blue-600 hover:underline">weighted average calculator</Link> handles different credit weightings.</>}
        whenToUse="Use this immediately after getting a marked test back to see where it lands on the grading scale, or before submitting to estimate what score you need. Also useful for teachers converting raw scores to percentage grades quickly."
        calculator={<GradeCalculatorWidget />}
        secondaryTool={
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-2">What Do I Need on My Final?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm">
              The question every student asks in exam week. Enter your current grade, the grade you want to finish with, and how much the final exam is worth (from your syllabus), and you&apos;ll get the exact score you need — or an honest answer that the target is already secured, or out of reach without extra credit. The copy-link button gives you a URL that reopens your exact numbers, handy for sending to a classmate or checking again after a regrade. The full walkthrough of the math is in our <Link href="/guides/how-to-calculate-your-grade/" className="text-blue-600 hover:underline">guide to calculating your grade</Link>.
            </p>
            <FinalGradeWidget />
          </section>
        }
        howTo={[
          "Enter the number of marks you scored.",
          "Enter the total marks possible for the test.",
          "See the percentage and letter grade instantly.",
        ]}
        formula="Grade % = (Score ÷ Total) × 100"
        formulaExplained="Divide your score by the total possible marks, then multiply by 100 to get the percentage. A score of 38 out of 45: (38 ÷ 45) × 100 = 84.4%, which is a B grade."
        examples={[
          { input: "38 out of 45", output: "84.4% — B" },
          { input: "17 out of 20", output: "85.0% — B" },
          { input: "72 out of 80", output: "90.0% — A−" },
          { input: "55 out of 100", output: "55.0% — F" },
        ]}
        useCases={[
          "Checking what letter grade a test score corresponds to",
          "Calculating whether you passed a course or exam",
          "Working out the minimum score needed for a target grade",
          "Converting raw marks to percentages for a report card",
          "Quickly grading a stack of student papers to a percentage scale",
        ]}
        faqs={faqs}
      />
    </>
  )
}
