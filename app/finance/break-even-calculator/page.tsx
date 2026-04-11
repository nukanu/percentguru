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
    answer: "The break-even point is the number of units you need to sell — or the revenue you need to generate — to cover all your costs. Below this point you make a loss; above it you make a profit.",
  },
  {
    question: "What is the break-even point with $3,000 fixed costs, $40 selling price, and $15 variable cost?",
    answer: "Break-even = $3,000 / ($40 − $15) = $3,000 / $25 = 120 units. You need to sell 120 units to cover all costs.",
  },
  {
    question: "What is the break-even formula?",
    answer: "Break-even Units = Fixed Costs / (Selling Price − Variable Cost per Unit). The denominator is called the contribution margin — the amount each unit contributes toward covering fixed costs.",
  },
  {
    question: "What are fixed costs vs variable costs?",
    answer: "Fixed costs stay the same regardless of how much you produce — rent, salaries, insurance. Variable costs change with each unit produced — materials, packaging, direct labour. Both affect your break-even point.",
  },
  {
    question: "How do I lower my break-even point?",
    answer: "Three levers: reduce fixed costs (e.g. negotiate rent), reduce variable cost per unit (e.g. bulk purchasing), or increase your selling price. Increasing price has the biggest effect since it directly widens the contribution margin.",
  },
  {
    question: "What is contribution margin?",
    answer: <>Contribution margin is the selling price minus variable cost per unit — the amount each sale contributes toward covering fixed costs and generating profit. This calculator uses it as the denominator. A related concept is <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin</Link>, which expresses profit as a percentage of revenue.</>,
    schemaAnswer: "Contribution margin is the selling price minus variable cost per unit — the amount each sale contributes toward covering fixed costs and generating profit. This calculator uses it as the denominator.",
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
        intro="Enter your fixed costs, selling price per unit, and variable cost per unit — the calculator tells you exactly how many units you need to sell to break even and what revenue that represents. Essential for pricing decisions and business planning."
        calculator={<BreakEvenCalculatorWidget />}
        howTo={[
          "Enter total fixed costs — expenses that don't change with production volume.",
          "Enter the selling price per unit.",
          "Enter the variable cost per unit — costs that increase with each unit produced.",
          "Break-even units and revenue appear instantly.",
        ]}
        formula="Break-even Units = Fixed Costs / (Selling Price − Variable Cost)"
        formulaExplained="Subtract variable cost from selling price to get the contribution margin — what each unit earns toward fixed costs. Divide fixed costs by this amount to find how many units you must sell."
        examples={[
          { input: "Fixed $10,000, Sell $80, Variable $30", output: "200 units — $16,000 revenue" },
          { input: "Fixed $2,500, Sell $25, Variable $10", output: "167 units — $4,167 revenue" },
          { input: "Fixed $50,000, Sell $200, Variable $120", output: "625 units — $125,000 revenue" },
        ]}
        useCases={[
          "Pricing a new product to ensure profitability",
          "Evaluating the viability of a business idea",
          "Planning production targets for a new period",
          "Assessing the impact of cost changes on profitability",
          "Presenting a business case to investors or lenders",
        ]}
        faqs={faqs}
      />
    </>
  )
}
