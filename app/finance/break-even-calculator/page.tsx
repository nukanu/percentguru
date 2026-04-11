import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import BreakEvenCalculatorWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is a break-even point?",
    answer: "The break-even point is the sales volume at which total revenue equals total costs — no profit, no loss. Every unit sold above this point contributes directly to profit.",
  },
  {
    question: "What is the break-even point with $3,000 fixed costs, $40 selling price, and $15 variable cost?",
    answer: "Break-even = $3,000 / ($40 − $15) = $3,000 / $25 = 120 units. At 120 units and $40 per unit, revenue equals $4,800 — exactly covering the $3,000 fixed costs plus $1,800 in variable costs (120 × $15).",
  },
  {
    question: "What is the break-even formula?",
    answer: "Break-even Units = Fixed Costs / (Selling Price − Variable Cost per Unit). The denominator is the contribution margin — how much each unit sold contributes toward covering fixed costs.",
  },
  {
    question: "What are fixed costs vs variable costs?",
    answer: "Fixed costs stay constant regardless of output — rent, salaries, insurance, software subscriptions. Variable costs change with each unit produced — materials, packaging, transaction fees, direct labour. Both affect your break-even point.",
  },
  {
    question: "How do I lower my break-even point?",
    answer: "Three levers: reduce fixed costs (negotiate rent, cut overheads), reduce variable cost per unit (bulk materials, better suppliers), or increase the selling price. Raising price has the most immediate impact since it widens the contribution margin without increasing costs.",
  },
  {
    question: "What is contribution margin?",
    answer: <>Contribution margin is the selling price minus variable cost per unit — the amount each sale contributes toward covering fixed costs and eventually generating profit. Once total contribution margin equals fixed costs, you&apos;ve hit break-even. Beyond that, each unit is pure profit. A related concept is <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin</Link>, which expresses total profit as a percentage of revenue rather than as a per-unit amount.</>,
    schemaAnswer: "Contribution margin is the selling price minus variable cost per unit. Once total contribution margin equals fixed costs, you've hit break-even. Beyond that, each unit is pure profit.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Break-Even Calculator — Units and Revenue",
  description: "Calculate your break-even point in units and revenue. Enter fixed costs, selling price, and variable cost per unit for instant results.",
  path: "/finance/break-even-calculator/",
  keywords: ["break-even calculator", "breakeven point calculator", "break even analysis", "break even units"],
})

export default function BreakEvenCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Break-Even Calculator", "Calculate break-even point in units and revenue from fixed costs, selling price, and variable cost.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Break-Even Calculator", href: "/finance/break-even-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="break-even-calculator"
        title="Break-Even Calculator"
        intro={<>Enter your fixed costs, selling price per unit, and variable cost per unit — the calculator shows exactly how many units you need to sell to break even and the revenue that represents. Essential before launching a product, setting a price, or presenting a business case. If you want to measure the return after break-even is achieved, the <Link href="/finance/roi-calculator/" className="text-blue-600 hover:underline">ROI calculator</Link> handles that.</>}
        calculator={<BreakEvenCalculatorWidget />}
        howTo={[
          "Enter total fixed costs — expenses that do not change with production volume.",
          "Enter the selling price per unit.",
          "Enter the variable cost per unit — costs that increase with each unit produced.",
          "Break-even units and revenue appear instantly.",
        ]}
        formula="Break-even Units = Fixed Costs / (Selling Price − Variable Cost)"
        formulaExplained="Subtract variable cost from selling price to get the contribution margin. Divide fixed costs by this number to find how many units must be sold before the business covers all its costs."
        examples={[
          { input: "Fixed $10,000, Sell $80, Variable $30", output: "200 units — $16,000 revenue" },
          { input: "Fixed $2,500, Sell $25, Variable $10", output: "167 units — $4,167 revenue" },
          { input: "Fixed $50,000, Sell $200, Variable $120", output: "625 units — $125,000 revenue" },
        ]}
        useCases={[
          "Pricing a new product to ensure it can cover its fixed costs",
          "Evaluating whether a business idea is viable at realistic volumes",
          "Setting sales targets for the period",
          "Assessing how a change in costs or pricing shifts the break-even point",
          "Presenting a business case or financial model to investors",
        ]}
        faqs={faqs}
      />
    </>
  )
}
