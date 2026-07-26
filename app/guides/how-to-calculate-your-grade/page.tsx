import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

const meta = guides.find((g) => g.slug === "how-to-calculate-your-grade")!

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides/" },
  { name: "How to Calculate Your Grade", href: "/guides/how-to-calculate-your-grade/" },
]

const faqs = [
  {
    question: "What grade is 38 out of 45?",
    answer: "38 ÷ 45 × 100 = 84.44%, which is a B on the standard US scale (an A usually starts at 90%). The method is the same for any test: divide your score by the total marks and multiply by 100.",
  },
  {
    question: "How do I combine coursework and an exam into one grade?",
    answer: "Multiply each part's percentage by its weight, then add them. If coursework is worth 40% and you scored 72%, and the exam is worth 60% and you scored 65%, your overall grade is (0.40 × 72) + (0.60 × 65) = 28.8 + 39 = 67.8%.",
  },
  {
    question: "What score do I need on the final to get the grade I want?",
    answer: "Subtract the weighted marks you already have from your target, then divide by the final's weight. Wanting 80% overall, with 74% banked across work worth 70% of the course and a final worth 30%: (80 − 0.70 × 74) ÷ 0.30 = 28.2 ÷ 0.30 = 94% needed on the final.",
  },
  {
    question: "Does 89.5% round up to an A?",
    answer: "It depends entirely on your institution's rule. Some round to the nearest whole percent (so 89.5 becomes 90, an A); many do not round at all, leaving 89.5% as a B. Never assume — check the syllabus, because a fraction of a percent can cross a grade boundary.",
  },
  {
    question: "Is a percentage grade the same as a GPA?",
    answer: "No. A percentage measures marks on one test or course out of 100. A GPA converts letter grades to points (usually on a 4.0 scale) and averages them across courses weighted by credit hours. You need the letter grade first, then the GPA calculator turns several of them into one number.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "How to Calculate Your Grade — Test Scores, Weighted Grades & Finals",
  description: meta.description,
  path: "/guides/how-to-calculate-your-grade/",
  keywords: [
    "how to calculate your grade",
    "test grade calculator",
    "grade percentage",
    "what grade is x out of y",
    "weighted grade",
    "what do i need on the final",
  ],
})

export default function HowToCalculateYourGradeGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: meta.title, description: meta.description, path: "/guides/how-to-calculate-your-grade/", datePublished: meta.published, dateModified: meta.updated })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="mx-auto max-w-2xl px-4 pb-16">
        <div className="pt-8">
          <Breadcrumb crumbs={crumbs} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">How to Calculate Your Grade</h1>
        <p className="text-sm text-gray-500 mb-6">Study guide · Updated July 2026</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Turning a raw score into a grade is easy; the parts students get wrong are combining several
          pieces of work into one figure and working out what they still need on a final to hit a target.
          This guide walks through all of it — a single test, letter and classification bands, weighted
          grades, the reverse &quot;what do I need&quot; calculation, and the rounding rule that quietly
          decides borderline results. If you just want the number for one test, the{" "}
          <Link href="/percentage/grade-calculator/" className="text-blue-600 hover:underline">grade calculator</Link>{" "}
          gives the percentage and letter instantly; read on to handle everything around it.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Turning a score into a percentage</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          A single test grade is your score divided by the total marks available, multiplied by 100.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Grade % = (Score ÷ Total marks) × 100
        </div>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Examples.</strong></p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>38 out of 45: (38 ÷ 45) × 100 = <strong>84.4%</strong></li>
          <li>14 out of 30: (14 ÷ 30) × 100 = <strong>46.7%</strong></li>
          <li>8 out of 15: (8 ÷ 15) × 100 = <strong>53.3%</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          &quot;X out of Y&quot; is really just one number as a percentage of another — the exact job the{" "}
          <Link href="/percentage/x-is-what-percent-of-y/" className="text-blue-600 hover:underline">&quot;X is what percent of Y&quot; calculator</Link>{" "}
          does — so any score-to-percentage question is the same piece of arithmetic dressed up in
          classroom language.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Letter grades and classification bands</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          A percentage only becomes a &quot;grade&quot; once it lands in a band. The bands differ by
          country and institution, but the two most common are the US letter scale and UK degree
          classifications:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left px-3 py-2 font-medium">Percentage</th>
                <th className="text-left px-3 py-2 font-medium">US letter</th>
                <th className="text-left px-3 py-2 font-medium">UK degree class</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                ["90–100%", "A", "—"],
                ["70–89%", "B / C", "First (70+)"],
                ["60–69%", "D", "2:1 (upper second)"],
                ["50–59%", "F", "2:2 (lower second)"],
                ["40–49%", "F", "Third / pass"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-gray-100">
                  <td className="px-3 py-2">{row[0]}</td>
                  <td className="px-3 py-2">{row[1]}</td>
                  <td className="px-3 py-2">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The gap is striking: 65% is a mediocre D in a US high school but a strong 2:1 at a UK
          university. The same number means very different things, so always read your own grading scale
          rather than a generic one.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Weighted grades: combining several pieces of work</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Most courses are not a single test. Coursework, quizzes, and a final each carry a different
          <strong> weight</strong>, and your overall grade is the weighted average — not a plain average.
          Multiply each part&apos;s percentage by its weight (as a decimal) and add them up.
        </p>
        <p className="text-gray-700 leading-relaxed mb-2">
          <strong>Example.</strong> Coursework is worth 40% and you scored 72%; the final is worth 60% and
          you scored 65%.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Overall = (0.40 × 72) + (0.60 × 65) = 28.8 + 39 = 67.8%
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          A plain average of 72 and 65 would give 68.5% — close here, but the more lopsided the weights,
          the further a plain average drifts from the truth. When there are several components, the{" "}
          <Link href="/finance/weighted-average-calculator/" className="text-blue-600 hover:underline">weighted average calculator</Link>{" "}
          takes each grade and its weight and returns the overall figure without the manual multiplication.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What do I need on the final?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          This is the question worth its weight in gold before exam week. Take your target overall grade,
          subtract the marks you have already banked (each weighted), then divide by the weight of the
          part still to come.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Needed = (Target − Banked so far) ÷ Weight of the final
        </div>
        <p className="text-gray-700 leading-relaxed mb-2">
          <strong>Example.</strong> You want 80% overall. You have 74% across work worth 70% of the course,
          and the final is worth the remaining 30%.
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Banked: 0.70 × 74 = <strong>51.8</strong></li>
          <li>Still needed: 80 − 51.8 = <strong>28.2</strong></li>
          <li>On the final: 28.2 ÷ 0.30 = <strong>94%</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          The reality check built into this maths: if the answer comes out above 100%, the target is out
          of reach and you should aim for the next band down. If it comes out negative, you have already
          secured the grade whatever happens on the final.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Dropped scores, extra credit, and resits</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Real syllabuses add wrinkles. If your lowest quiz is dropped, remove both its score and its
          marks from the totals before dividing — do not just delete the percentage. Extra credit is added
          to the marks you earned but usually <em>not</em> to the total possible, which is why a few bonus
          points can lift a grade more than they seem to. And a capped resit (say, marked out of a maximum
          of 40%) means the resit percentage is applied to that cap, not to the full paper. Always fold
          these rules into the raw marks first, then convert to a percentage.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The rounding trap</h2>
        <div className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 mb-4">
          <p className="text-gray-800 text-sm leading-relaxed">
            <strong>89.5% is not automatically an A.</strong> Whether it rounds up depends on your
            institution&apos;s policy. Some round to the nearest whole percent; many keep the raw figure,
            so 89.5% stays a B. On a borderline result, a fraction of a percent can decide the letter —
            check the exact rule rather than assuming the rounding goes your way.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Percentage grade vs. GPA</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A percentage and a GPA answer different questions. A percentage is one score out of 100 on a
          single test or course. A GPA takes the <em>letter</em> grades from many courses, converts each
          to points on a scale (typically 4.0), and averages them weighted by credit hours — so a
          four-credit course moves your GPA four times as much as a one-credit one. Get the letter grade
          from each course first, then the{" "}
          <Link href="/percentage/gpa-calculator/" className="text-blue-600 hover:underline">GPA calculator</Link>{" "}
          combines them into a single cumulative number.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Do it instantly</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Once the method is clear, you rarely need to do it by hand. The{" "}
          <Link href="/percentage/grade-calculator/" className="text-blue-600 hover:underline">grade calculator</Link>{" "}
          turns a score into a percentage and letter; the{" "}
          <Link href="/finance/weighted-average-calculator/" className="text-blue-600 hover:underline">weighted average calculator</Link>{" "}
          handles courses with mixed weights. And if the underlying percentage steps still feel shaky, the
          guide on{" "}
          <Link href="/guides/how-to-calculate-percentages/" className="text-blue-600 hover:underline">how to calculate percentages</Link>{" "}
          covers the three problems every grade calculation is built from.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.question}>
              <h3 className="font-semibold text-gray-900 mb-1">{f.question}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </article>
    </>
  )
}
