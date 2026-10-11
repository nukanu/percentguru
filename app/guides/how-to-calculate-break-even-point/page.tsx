import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

const meta = guides.find((g) => g.slug === "how-to-calculate-break-even-point")!

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides/" },
  { name: "How to Calculate Your Break-Even Point", href: "/guides/how-to-calculate-break-even-point/" },
]

const faqs = [
  {
    question: "Is the break-even point the same as the payback period?",
    answer: "No, and mixing them up is common. Break-even is the level of sales in a period where income covers that period's costs. Payback is how long it takes for the surplus above break-even to return money you spent up front, such as equipment or a fit-out. A business can be past break-even every month and still be a year away from paying back its start-up costs.",
  },
  {
    question: "Some of my costs are neither fixed nor variable. Where do they go?",
    answer: "Split them if you can. Electricity might have a standing charge that is fixed and a usage part that rises with output. Part-time help that you only call in on busy days behaves like a variable cost. If you cannot split a cost sensibly, treat it as fixed: that gives a higher break-even point, which is the safer mistake to make.",
  },
  {
    question: "Can a business be past break-even and still run out of cash?",
    answer: "Yes. Break-even compares income and costs for a period; it ignores when the money actually moves. If you pay for a quarter's stock up front, or customers pay you a month late, you can be profitable on paper while the bank balance heads toward zero. Check cash separately, especially while you are growing.",
  },
  {
    question: "How often should I recalculate it?",
    answer: "Whenever one of the three inputs changes: a supplier's price, a rent or fee, or your own selling price. Beyond that, a quick check every three months is enough. It takes a few minutes and stops you working to a target that went out of date two price rises ago.",
  },
  {
    question: "Does break-even work if I sell a service and have no units?",
    answer: "It does. Choose whatever you bill by as the unit: an hour, a job, a session, a booking. The price is what you charge for one, and the variable cost is whatever that one costs you to deliver, such as travel or materials. If your jobs vary too much for that, use the revenue method and work in dollars instead.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "How to Calculate Your Break-Even Point (with a Worked Example)",
  description: meta.description,
  path: "/guides/how-to-calculate-break-even-point/",
  keywords: [
    "how to calculate break even point",
    "break even point formula",
    "formula to calculate break even point",
    "break even analysis example",
    "contribution margin",
  ],
})

export default function HowToCalculateBreakEvenPointGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: meta.title, description: meta.description, path: "/guides/how-to-calculate-break-even-point/", datePublished: meta.published, dateModified: meta.updated })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="mx-auto max-w-2xl px-4 pb-16">
        <div className="pt-8">
          <Breadcrumb crumbs={crumbs} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">How to Calculate Your Break-Even Point (with a Worked Example)</h1>
        <p className="text-sm text-gray-500 mb-6">Business guide · Updated October 2026</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Your break-even point is the amount you have to sell before the business stops costing you
          money. Below it, every month ends with a loss. Above it, you are earning. It is one division,
          but the result depends entirely on what you put into it, and most first attempts come out
          too low. This guide works through a coffee cart from the first cup to a daily target, then
          looks at what moves the number and where it tends to mislead. To run your own figures as
          you read, open the{" "}
          <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What break-even tells you, and what it does not</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          It answers one question: at this price and these costs, how much do I need to sell? That
          makes it a test of a plan. If the answer is 900 cups a month and the pitch sees 60 people a
          day, you have learned something important before spending anything. It does not tell you
          whether you <em>will</em> sell that many, and it says nothing about cash in the bank. Treat
          it as the bar you have to clear.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Sort your costs into two piles</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Everything rests on separating costs that stay the same however much you sell from costs
          that rise with each sale. For the coffee cart, per month:
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li><strong>Fixed:</strong> pitch fees $600, machine lease $180, insurance $60, card reader and software $40, the owner&apos;s pay $2,000. Total <strong>$2,880</strong>.</li>
          <li><strong>Variable, per cup:</strong> beans, milk, cup and lid. Total <strong>$1.30</strong>.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          The test for each cost is simple: if you sold nothing next month, would you still pay it? If
          yes, it is fixed.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The formula, worked through</h2>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Break-even units = Fixed costs ÷ (Price − Variable cost per unit)
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          A coffee sells for $4.50 and costs $1.30 to make, so each cup leaves $3.20 to put toward the
          fixed costs. That $3.20 is the <strong>contribution</strong> per cup.
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>$4.50 − $1.30 = $3.20 contribution</li>
          <li>$2,880 ÷ $3.20 = <strong>900 cups a month</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          The first 900 cups pay for the business. Cup 901 is the first one that earns anything, and
          from there each cup adds $3.20 of profit.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Turn it into a daily target</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A monthly figure is hard to act on. Divide by the days you trade. The cart is out 20 days a
          month, so it needs <strong>45 cups a day</strong>. That is a number you can check at
          lunchtime. If a new pitch can only deliver 30 on a good day, no amount of effort will make
          it work at this price.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Break-even in dollars</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Sometimes units are awkward and revenue is easier. First find what share of each sale is
          contribution, then divide fixed costs by it.
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Contribution share: $3.20 ÷ $4.50 = 71.1%</li>
          <li>Break-even revenue: $2,880 ÷ 0.711 = <strong>$4,050 a month</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          It agrees with the unit method, as it should: 900 cups at $4.50 is $4,050. That contribution
          share is the gross margin on a cup; the{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>{" "}
          will find it for any product.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Add the profit you actually want</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Breaking even is survival. To plan for a profit, add it to the fixed costs before dividing.
          For $800 a month on top of the owner&apos;s pay:
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>($2,880 + $800) ÷ $3.20 = <strong>1,150 cups</strong>, or about 58 a day</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">When you sell more than one thing</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The cart also sells pastries at $3.50 that cost $2.10, a contribution of $1.40. If four in
          five sales are coffee, blend the two:
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>0.8 × $3.20 + 0.2 × $1.40 = $2.84 average contribution</li>
          <li>$2,880 ÷ $2.84 = <strong>1,015 items</strong>, roughly 812 coffees and 203 pastries</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          More items are needed than before, because pastries contribute less. The break-even point
          depends on the mix as well as the volume, which is a good reason to know which of your
          products carries the business.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What moves the number most</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Change one input at a time and watch the monthly target:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left px-3 py-2 font-medium">Change</th>
                <th className="text-right px-3 py-2 font-medium">Cups to break even</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                ["As it stands", "900"],
                ["Price up 50 cents, to $5.00", "779"],
                ["Beans and milk up 20 cents a cup", "960"],
                ["Pitch fees up $150 a month", "947"],
                ["Hire weekend help at $700 a month", "1,119"],
              ].map(([change, cups]) => (
                <tr key={change} className="border-t border-gray-100">
                  <td className="px-3 py-2">{change}</td>
                  <td className="px-3 py-2 text-right font-semibold text-gray-900">{cups}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Price is the strongest lever by a distance: fifty cents removes 121 cups from the target. If
          you are weighing a rise, the{" "}
          <Link href="/guides/how-to-raise-your-prices/" className="text-blue-600 hover:underline">guide to raising your prices</Link>{" "}
          covers how to choose the number and what to tell customers. Working the other way, from a
          cost to a price, is a job for the{" "}
          <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Three ways the figure flatters you</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Leaving out your own pay.</strong> Take the $2,000 out of the fixed costs and the
          cart breaks even at 275 cups. That is the point where it stops losing money while you work
          for nothing.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Forgetting fees charged per sale.</strong> If card fees take 12 cents a cup, the
          contribution is $3.08 and break-even rises to 936. Fees that scale with sales belong in the
          variable cost.
        </p>
        <div className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 mb-4">
          <p className="text-gray-800 text-sm leading-relaxed">
            <strong>Using the menu price when customers pay less.</strong> A loyalty card that makes
            every tenth coffee free cuts the average price to $4.05. Contribution drops to $2.75 and
            break-even jumps to 1,048 cups, 148 more than planned. Any regular discount works the
            same way; the seller section of the{" "}
            <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link>{" "}
            shows what one costs per sale.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">After break-even: safety margin and start-up costs</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Two more numbers are worth having. The first is your <strong>margin of safety</strong>: how
          far sales could fall before you were back at break-even. Selling 1,100 cups against a
          break-even of 900 gives (1,100 − 900) ÷ 1,100 = 18%. A bad month can absorb an 18% drop.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The second is how long the start-up money takes to come back. Those 200 extra cups earn
          200 × $3.20 = $640 a month. If fitting out the cart cost $3,600, it pays for itself in
          $3,600 ÷ $640, a little under six months. That is a separate question from break-even, and
          it is the one to ask before you buy equipment.
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
