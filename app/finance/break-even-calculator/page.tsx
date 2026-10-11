import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import BreakEvenCalculatorWidget from "./CalculatorWidget"
import PriceChangeWidget from "./PriceChangeWidget"

const faqs = [
  {
    question: "What is the break-even formula?",
    answer: "Break-even units = Fixed costs / (Selling price − Variable cost per unit). The bottom of that fraction is the contribution margin: what each sale puts toward your fixed costs. With $1,200 of fixed costs, a $25 price and a $10 variable cost, it is $1,200 / $15 = 80 units.",
  },
  {
    question: "Should I count my own pay as a fixed cost?",
    answer: "Yes, if you need the business to pay you. A break-even point that leaves out your wage only tells you when the business stops losing money, not when it supports you. Adding a $1,500 monthly draw to $1,200 of other fixed costs moves the example above from 80 units to 180.",
  },
  {
    question: "Is the break-even point per month or in total?",
    answer: "It matches the period of the fixed costs you enter. Monthly rent and subscriptions give units per month; a year of costs gives units per year. For a one-off cost such as a $2,400 machine, divide it by the contribution you earn each month to get the number of months until it has paid for itself.",
  },
  {
    question: "What are fixed costs and variable costs for a small seller?",
    answer: "Fixed costs are what you pay whether you sell anything or not: rent, insurance, software, a market stall fee, your own wage. Variable costs rise with every sale: materials, packaging, postage you pay, and marketplace or card fees. Fees charged as a percentage of the price are variable costs, not fixed ones.",
  },
  {
    question: "How do I work out break-even when I sell several products?",
    answer: "Use a weighted average contribution. If 70% of your units are candles contributing $9 each and 30% are diffusers contributing $15, the average is 0.7 × $9 + 0.3 × $15 = $10.80. With $1,200 of fixed costs you need $1,200 / $10.80, about 112 units in that mix. If the mix shifts toward the lower-contribution product, the number goes up.",
  },
  {
    question: "What is margin of safety?",
    answer: "It is how far sales can fall before you start losing money: (actual units − break-even units) / actual units. Selling 100 units against a break-even of 80 gives a 20% margin of safety. Below about 10% a single slow month can put you in the red.",
  },
  {
    question: "How does break-even relate to profit margin?",
    answer: <>Margin tells you what share of each sale is profit before overheads; break-even tells you how many of those sales it takes to cover the overheads. A product can have a healthy margin and still never break even if it sells too slowly. Check the per-sale figure with the <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>, then bring it here.</>,
    schemaAnswer: "Margin tells you what share of each sale is profit before overheads; break-even tells you how many of those sales it takes to cover the overheads. A product can have a healthy margin and still never break even if it sells too slowly.",
  },
]

const tableRows = [
  ["$2", "500", "1,500"],
  ["$5", "200", "600"],
  ["$10", "100", "300"],
  ["$15", "67", "200"],
  ["$25", "40", "120"],
  ["$50", "20", "60"],
]

export const metadata: Metadata = generatePageMetadata({
  title: "Break-Even Calculator — Units, Revenue & Target Profit",
  description: "Find how many units you must sell to cover your costs, the revenue that takes, and the sales needed to hit a profit target. Test a price change too.",
  path: "/finance/break-even-calculator/",
  keywords: ["break-even calculator", "break even point calculator", "how to calculate break even point", "break even analysis", "break even units"],
})

export default function BreakEvenCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Break-Even Calculator", "Calculate break-even units and revenue, the sales needed for a target profit, and how a price change moves your break-even point.")) }}
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
        intro={<>Enter what your business costs to run, what you sell one unit for, and what that unit costs you. The calculator shows how many you have to sell before you stop losing money, and the revenue that represents. Add a profit target to see the sales needed to actually earn something. It is the check to run before you sign a lease, book a market stall, launch a product or change a price. If you have not settled on a price yet, the <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link> gets you from cost to selling price first.</>}
        whenToUse="Use this when a new fixed cost is on the table — a studio, a stall fee, a subscription, a piece of equipment — and you need to know how many sales it takes to justify it. Also use it to set a monthly sales target, or to test whether a product is worth launching at the volume you can realistically reach."
        calculator={<BreakEvenCalculatorWidget />}
        secondaryTool={
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-2">What If I Change My Price?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm">
              A higher price loses some customers and a lower one has to win more. The question is how many. Enter your current price and the one you are considering: you will see the break-even point at each, and how much your sales can fall — or must rise — for your profit to stay where it is today. Raising a $25 product with a $10 cost to $30, for example, lets you lose a quarter of your sales before you are worse off.
            </p>
            <PriceChangeWidget />
          </section>
        }
        howTo={[
          "Add up your fixed costs for one period, usually a month: rent, software, insurance, your own pay.",
          "Work out the variable cost of one unit: materials, packaging, postage and fees for that sale.",
          "Subtract the variable cost from the selling price to get the contribution per unit.",
          "Divide fixed costs by the contribution per unit. Round up — you cannot sell part of a unit.",
          "Multiply the units by the selling price for break-even revenue.",
        ]}
        formula="Break-even Units = Fixed Costs / (Selling Price − Variable Cost)"
        formulaExplained="For a profit target, add it to the fixed costs first: Units = (Fixed Costs + Target Profit) / (Selling Price − Variable Cost). With $1,200 fixed, $900 target, $25 price and $10 variable cost: $2,100 / $15 = 140 units."
        examples={[
          { input: "Fixed $1,200, sell $25, variable $10", output: "80 units — $2,000 revenue" },
          { input: "Fixed $600, sell $16.50, variable $7.50", output: "67 units — $1,100 revenue" },
          { input: "Fixed $10,000, sell $80, variable $30", output: "200 units — $16,000 revenue" },
        ]}
        useCases={[
          "Deciding whether a market stall or studio rent is worth taking on",
          "Setting a monthly sales target you can track against",
          "Testing whether a new product can pay for its own tooling or stock",
          "Seeing how a price rise or a discount moves the goalposts",
          "Working out how long equipment takes to pay for itself",
        ]}
        faqs={faqs}
        lookupTable={
          <>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Advanced Scenarios</h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Fees that take a share of the price</h3>
                <p>A marketplace that keeps 10% of a $25 sale costs you $2.50 per unit. Add it to the variable cost: $10 becomes $12.50, the contribution drops from $15 to $12.50, and break-even on $1,200 of fixed costs rises from 80 units to 96. Leaving percentage fees out is the most common reason a break-even figure turns out too optimistic.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Running a promotion</h3>
                <p>Taking 20% off that $25 product makes it $20 and cuts the contribution from $15 to $10. Break-even moves from 80 units to 120, which is 50% more sales for a 20% discount. The seller tool on the <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link> shows the same effect on profit per sale.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">A one-off purchase</h3>
                <p>Equipment is not a monthly cost, so ask how long it takes to earn back. A $2,400 machine in a business that clears $800 a month after its regular costs pays for itself in three months. If the machine also lowers your variable cost, the payback is quicker — recalculate with the new cost per unit.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Selling through shops as well as direct</h3>
                <p>A wholesale sale brings in a lower price for the same variable cost, so its contribution is smaller. Work out break-even separately for each channel, or use a weighted average if the split is stable. The <Link href="/finance/wholesale-price-calculator/" className="text-blue-600 hover:underline">wholesale price calculator</Link> gives you the wholesale price to plug in.</p>
              </div>
            </div>

            <h2 className="text-lg font-bold text-gray-900 mt-8 mb-3">Units Needed by Contribution per Unit</h2>
            <p className="text-sm text-gray-600 mb-3">How many sales cover a given fixed cost, depending on what each sale contributes after its own costs.</p>
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold">Contribution per unit</th>
                  <th className="text-left px-4 py-2 font-semibold">Units for $1,000 fixed</th>
                  <th className="text-left px-4 py-2 font-semibold">Units for $3,000 fixed</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {tableRows.map(([contribution, low, high]) => (
                  <tr key={contribution} className="border-t border-gray-200">
                    <td className="px-4 py-2">{contribution}</td>
                    <td className="px-4 py-2">{low}</td>
                    <td className="px-4 py-2">{high}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        }
      />
    </>
  )
}
