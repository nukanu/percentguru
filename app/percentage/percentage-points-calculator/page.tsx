import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import PercentagePointsWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is a percentage point?",
    answer: "A percentage point (pp) is the arithmetic difference between two percentages. If an interest rate rises from 3% to 5%, it rose by 2 percentage points. This is different from saying it rose by 2% — which would mean a much smaller change (just 6% of the original 3%).",
  },
  {
    question: "What is the difference between percentage points and percentage change?",
    answer: "Percentage points measure the absolute arithmetic difference: 8% − 5% = 3 percentage points. Percentage change measures how much the original value changed relative to itself: (8 − 5) ÷ 5 × 100 = 60% change. Both describe the same move from 5% to 8%, but give very different numbers. Politicians and media often use whichever makes a change sound larger or smaller.",
  },
  {
    question: "When should I use percentage points vs percentage change?",
    answer: "Use percentage points when both values are already expressed as percentages (interest rates, tax rates, poll numbers, conversion rates). Use percentage change when comparing two regular numbers or when asking 'by what factor did this grow?'. For example: 'voter support fell 5 percentage points' vs 'sales grew 30%'.",
  },
  {
    question: "If inflation goes from 2% to 3%, is that a 1% increase or a 50% increase?",
    answer: "Both are technically correct but mean different things. It is a 1 percentage point increase (3 − 2 = 1 pp). It is also a 50% relative increase, because 3 is 50% more than 2. News reports almost always use percentage points for rates and percentages — saying 'inflation rose 50%' would be misleading even though it is mathematically accurate.",
  },
  {
    question: "What does 'basis points' mean?",
    answer: "A basis point (bp) is one-hundredth of a percentage point — 0.01%. Central banks and bond markets use basis points to describe small rate changes precisely. A 25 basis point rate rise = 0.25 percentage points. A 100 basis point change = 1 percentage point.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percentage Points Calculator — vs Percentage Change Explained",
  description: "Calculate the percentage point change and relative percentage change between two rates. Understand the difference between percentage points and percentage change.",
  path: "/percentage/percentage-points-calculator/",
  keywords: ["percentage points calculator", "percentage points vs percentage", "what is a percentage point", "percentage point change", "pp vs percent"],
})

export default function PercentagePointsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Percentage Points Calculator", "Calculate the percentage point change and relative percentage change between two rates.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Percentage Points Calculator", href: "/percentage/percentage-points-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="percentage-points-calculator"
        title="Percentage Points Calculator"
        intro={<>Enter two percentage values to see both the percentage point change (the simple arithmetic difference) and the relative percentage change (how much the original value grew). These two numbers describe the same move but are frequently confused — especially in news reports about interest rates, poll results, and tax changes. For comparing two regular numbers rather than two rates, the <Link href="/percentage/percentage-change-calculator/" className="text-blue-600 hover:underline">percentage change calculator</Link> is the right tool.</>}
        whenToUse="Use this when both values are already expressed as percentages — interest rates, tax rates, voter approval ratings, conversion rates, or inflation figures. It shows you both the pp change (what most people mean) and the relative % change (what can make a small shift sound dramatic)."
        calculator={<PercentagePointsWidget />}
        howTo={[
          "Enter the original percentage value in the first field.",
          "Enter the new percentage value in the second field.",
          "See the percentage point change (pp) and the relative percentage change instantly.",
        ]}
        formula="PP Change = New% − Old%   |   Relative Change = (New% − Old%) ÷ Old% × 100"
        formulaExplained="Percentage points are simple subtraction. Relative change divides the difference by the original value. From 4% to 6%: PP change = 6 − 4 = +2 pp. Relative change = (6 − 4) ÷ 4 × 100 = +50%."
        examples={[
          { input: "Interest rate: 3% → 5%", output: "+2 pp | +66.7% relative" },
          { input: "Tax rate: 20% → 25%", output: "+5 pp | +25% relative" },
          { input: "Conversion rate: 2.4% → 1.8%", output: "−0.6 pp | −25% relative" },
        ]}
        useCases={[
          "Understanding central bank interest rate announcements",
          "Interpreting poll swings and election result changes",
          "Reporting conversion rate or click-through rate changes accurately",
          "Analysing tax rate changes in budget reporting",
          "Comparing inflation figures across different reporting periods",
        ]}
        faqs={faqs}
      />
    </>
  )
}
