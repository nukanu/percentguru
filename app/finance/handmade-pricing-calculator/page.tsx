import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import HandmadePricingWidget from "./CalculatorWidget"
import HourlyEarningsWidget from "./HourlyEarningsWidget"

const faqs = [
  {
    question: "What hourly rate should I pay myself?",
    answer: "Start from what you would have to pay someone else to do the making, and never from zero. The legal minimum wage where you live is the floor; skilled or slow-to-learn work justifies more. If the price that comes out looks too high, the answer is to make the item faster or change the product, not to pretend your time is free.",
  },
  {
    question: "Does the \"materials times three\" rule work?",
    answer: "Only for things that are quick to make. It ignores time completely. A keyring with $4 of materials that takes ten minutes is fine at $12. A knitted hat with $4 of yarn that takes three hours is not: at $12 you would earn under $3 an hour. Price from materials plus time and use the rule only as a sanity check.",
  },
  {
    question: "My calculated price is higher than similar items sell for. What now?",
    answer: "First check you are comparing like with like — mass-produced goods are not your competition. Then look at the inputs: can you buy materials in bulk, batch the work to cut minutes per item, or simplify the design? If the gap remains, either position the piece as premium with better photos and story, or accept that this product does not pay and make something else.",
  },
  {
    question: "Do I charge for time spent on photos, listings and packing orders?",
    answer: "Yes, through overheads. Add up a month of non-making costs and time — photography, listing, messages, trips to the post office, tools, studio rent — and divide by the number of items you sell in a month. If that comes to $90 a month across 60 items, each item carries $1.50.",
  },
  {
    question: "Should I use the same price on Etsy, my own website and at craft fairs?",
    answer: "Keep one price. Customers notice differences, and shops that stock you will too. Because fees vary by channel, base the price on your most expensive one; where fees are lower you simply keep a little more.",
  },
  {
    question: "How do I price a custom order or commission?",
    answer: "Add the time a standard piece does not need: the back-and-forth with the customer, design or sketching, sourcing special materials, and at least one round of changes. Time it once, put those minutes through the calculator like any other labour, and take a deposit that pays for the materials before you start.",
  },
]

const tableRows = [
  ["15 min", "$3.75", "$5.00", "$6.25"],
  ["30 min", "$7.50", "$10.00", "$12.50"],
  ["45 min", "$11.25", "$15.00", "$18.75"],
  ["1 hour", "$15.00", "$20.00", "$25.00"],
  ["1.5 hours", "$22.50", "$30.00", "$37.50"],
  ["2 hours", "$30.00", "$40.00", "$50.00"],
]

export const metadata: Metadata = generatePageMetadata({
  title: "Handmade Pricing Calculator — Price Crafts from Materials & Time",
  description: "Work out what to charge for a handmade item from materials, your time, overheads and selling fees, and check what your current price really pays you per hour.",
  path: "/finance/handmade-pricing-calculator/",
  keywords: ["handmade pricing calculator", "craft pricing calculator", "how to price handmade items", "pricing handmade products", "craft price formula"],
})

export default function HandmadePricingCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Handmade Pricing Calculator", "Calculate a selling price for handmade items from materials, labour time, overheads, markup and selling fees, and check hourly earnings at a given price.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Handmade Pricing Calculator", href: "/finance/handmade-pricing-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="handmade-pricing-calculator"
        title="Handmade Pricing Calculator"
        intro={<>Most handmade goods are underpriced for one reason: the maker counts the materials and forgets the hours. Enter what goes into one item — materials, the minutes it takes, what your time is worth, a share of your overheads — and the profit you want on top. The calculator gives a price that covers all of it, raised to absorb marketplace fees if you sell online. The second tool runs the check the other way and shows what your current price pays you per hour. For goods you buy in and resell, the plain <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link> is all you need.</>}
        whenToUse="Use this when you are pricing a new piece, before you open an online shop or book a craft fair, or when you suspect a best-seller is not actually paying you. It suits anything made by hand in small numbers: jewellery, candles, soap, ceramics, knitwear, prints, woodwork, baked goods."
        calculator={<HandmadePricingWidget />}
        secondaryTool={
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-2">What Does My Current Price Pay Me per Hour?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm">
              If you already sell something, this is the quickest way to find out whether the price works. Enter what you charge, what the materials and overheads come to, and how long one takes to make. You get the amount left after costs and fees, and what that means as an hourly wage. A $24 item with $7.50 of costs, 45 minutes of work and 10% in fees pays $18.80 an hour — before any profit for the business.
            </p>
            <HourlyEarningsWidget />
          </section>
        }
        howTo={[
          "Add up the materials in one item, including packaging. For a batch, divide the batch total by the number of items.",
          "Multiply the time one item takes by your hourly rate to get the labour cost.",
          "Add a share of your overheads: monthly running costs divided by items sold per month.",
          "Add your profit markup to that total cost.",
          "If a marketplace takes a percentage, divide by (1 − fee) so the fee comes out of the customer's price, not your profit.",
        ]}
        formula="Price = (Materials + Time × Rate + Overheads) × (1 + Markup %) ÷ (1 − Fee %)"
        formulaExplained="With $6 of materials, 45 minutes at $20 an hour ($15) and $1.50 of overheads, the cost is $22.50. A 40% markup makes $31.50. Dividing by 0.90 for a 10% fee gives $35.00: the marketplace keeps $3.50 and you receive the full $31.50."
        examples={[
          { input: "$6 materials, 45 min at $20, $1.50 overheads, 40% markup, 10% fees", output: "$35.00" },
          { input: "$3 materials, 15 min at $18, $0.50 overheads, 50% markup, no fees", output: "$12.00" },
          { input: "$40 materials, 5 hrs at $25, $5 overheads, 30% markup, 6.5% fees", output: "$236.36" },
        ]}
        useCases={[
          "Pricing a new handmade product before listing it",
          "Checking whether a best-seller really pays for your time",
          "Setting prices for a craft fair or market stall",
          "Quoting a custom order or commission",
          "Deciding which products to drop from your range",
        ]}
        faqs={faqs}
        lookupTable={
          <>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Advanced Scenarios</h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Making in batches</h3>
                <p>Time per item usually falls when you make several at once. One candle poured alone might take 25 minutes including set-up and clean-up; a batch of 24 that takes three hours works out at 7.5 minutes each. Enter the batch figure divided by the batch size, and price on how you really work.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Leaving room for wholesale</h3>
                <p>A shop will expect to pay about half the retail price. If the price from this calculator is your retail price, check that half of it still covers your cost. When it does not, the product is direct-only unless you can cut the making time. The <Link href="/finance/wholesale-price-calculator/" className="text-blue-600 hover:underline">wholesale price calculator</Link> shows both prices together.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Craft fairs and stall fees</h3>
                <p>A stall fee is a fixed cost for the day, not part of each item. A $120 pitch selling items that leave you $9 each needs 14 sales before the day has paid for itself — and that is before travel. Use the <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link> to decide whether a fair is worth booking.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Running a sale</h3>
                <p>The profit markup is the only part of the price you can give away. On the $35.00 example, the $9.00 profit is about a quarter of the price, so a 25% discount leaves barely more than your wages, and anything deeper comes out of your own pay. Test it in the seller section of the <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link> first.</p>
              </div>
            </div>

            <h2 className="text-lg font-bold text-gray-900 mt-8 mb-3">Labour Cost by Making Time</h2>
            <p className="text-sm text-gray-600 mb-3">What your time adds to one item at three hourly rates.</p>
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold">Time per item</th>
                  <th className="text-left px-4 py-2 font-semibold">At $15/hour</th>
                  <th className="text-left px-4 py-2 font-semibold">At $20/hour</th>
                  <th className="text-left px-4 py-2 font-semibold">At $25/hour</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {tableRows.map(([time, r15, r20, r25]) => (
                  <tr key={time} className="border-t border-gray-200">
                    <td className="px-4 py-2">{time}</td>
                    <td className="px-4 py-2">{r15}</td>
                    <td className="px-4 py-2">{r20}</td>
                    <td className="px-4 py-2">{r25}</td>
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
