import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

const meta = guides.find((g) => g.slug === "markup-vs-margin")!

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides/" },
  { name: "Markup vs. Margin", href: "/guides/markup-vs-margin/" },
]

const faqs = [
  {
    question: "Is markup or margin the bigger number?",
    answer: "Markup is always the larger figure for the same sale, because it divides profit by the smaller cost rather than the larger selling price. A 50% markup is only a 33% margin. Whenever someone quotes a percentage, it's worth asking which one they mean.",
  },
  {
    question: "How do I convert markup to margin?",
    answer: "Divide the markup by one plus the markup. A 50% markup becomes 0.50 ÷ 1.50 = 0.333, or a 33.3% margin. To go the other way, divide the margin by one minus the margin: a 40% margin is 0.40 ÷ 0.60 = 0.667, a 66.7% markup.",
  },
  {
    question: "Which one should I price with?",
    answer: "Price with markup, because you start from a known cost and add to it. But measure performance with margin, because it tells you what share of each sale you actually keep. Most businesses set prices by markup and then report results by margin.",
  },
  {
    question: "What's a good profit margin?",
    answer: "It depends entirely on the industry. Grocery retail runs on single-digit margins by selling huge volume; software can exceed 80% because each extra copy costs almost nothing. Compare your margin to similar businesses, not to a universal target.",
  },
  {
    question: "Does margin account for all my costs?",
    answer: "Gross margin only subtracts the direct cost of the goods sold. It ignores rent, salaries, marketing, and tax. A healthy gross margin can still leave no net profit once overheads are paid, which is why it's only the first number to look at, not the last.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Markup vs. Margin: The Difference Every Business Owner Should Know",
  description: meta.description,
  path: "/guides/markup-vs-margin/",
  keywords: [
    "markup vs margin",
    "difference between markup and margin",
    "how to calculate markup",
    "how to calculate profit margin",
    "convert markup to margin",
    "gross margin formula",
  ],
})

export default function MarkupVsMarginGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: meta.title, description: meta.description, path: "/guides/markup-vs-margin/", datePublished: meta.published, dateModified: meta.updated })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="mx-auto max-w-2xl px-4 pb-16">
        <div className="pt-8">
          <Breadcrumb crumbs={crumbs} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Markup vs. Margin: The Difference Every Business Owner Should Know</h1>
        <p className="text-sm text-gray-500 mb-6">Business guide · Updated June 2026</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Markup and margin are the two most confused numbers in small business, and the confusion is
          expensive. They are built from the same two figures — what something cost you and what you
          sold it for — but they divide by different things, so they are never equal. Mistake one for
          the other and you can spend a year thinking you make 40% on every sale when you actually keep
          29%. This guide untangles them once, with the formulas, a quick conversion, and the cases
          where each belongs. If you would rather just punch in numbers, the{" "}
          <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link>{" "}
          and the{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>{" "}
          each show their workings.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The same profit, two different bases</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Start with one sale. You buy an item for £40 (the <strong>cost</strong>) and sell it for £60
          (the <strong>price</strong>). The <strong>profit</strong> is £20 either way. The only question
          is what you compare that £20 against. <strong>Markup</strong> compares it to the cost — what
          you added on top. <strong>Margin</strong> compares it to the selling price — what slice of the
          sale you keep. Same £20, two different denominators, two different percentages.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Markup: profit over cost</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Markup answers "how much did I add to my cost?" It is the natural way to price, because you
          begin with a cost you already know.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Markup % = (Profit ÷ Cost) × 100
        </div>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Example.</strong> Cost £40, price £60.</p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Profit: £60 − £40 = £20</li>
          <li>Markup: £20 ÷ £40 = 0.50 = <strong>50%</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          So you marked the item up by 50%. To set a price from a cost, this is the direction you work
          in: take the cost and add the markup. Adding a percentage on top is the same arithmetic as a{" "}
          <Link href="/percentage/percentage-increase-calculator/" className="text-blue-600 hover:underline">percentage increase</Link>{" "}
          — £40 increased by 50% gives £60.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Margin: profit over price</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Margin answers "of the money that came in, how much did I keep?" It is the honest measure of
          profitability, because it is expressed against the revenue you actually banked.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Margin % = (Profit ÷ Price) × 100
        </div>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Example.</strong> The same sale — cost £40, price £60.</p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Profit: £20</li>
          <li>Margin: £20 ÷ £60 = 0.333 = <strong>33.3%</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Notice the same £20 profit is a 50% markup but only a 33.3% margin. Because the price is always
          larger than the cost, margin is always the smaller of the two. That gap is precisely where
          businesses fool themselves.
        </p>

        <div className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 mb-4">
          <p className="text-gray-800 text-sm leading-relaxed">
            <strong>The costly mix-up:</strong> a shop wants a "40% profit," marks everything up 40%,
            and assumes it keeps 40% of revenue. It does not. A 40% markup is only a 28.6% margin — the
            other 11 points vanished into the difference between the two bases. Repeated across thousands
            of sales, that gap is the difference between a healthy year and a worrying one.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Converting between them</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          You can switch between the two without knowing the actual pounds, using just the percentages:
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Margin = Markup ÷ (1 + Markup)&nbsp;&nbsp;·&nbsp;&nbsp;Markup = Margin ÷ (1 − Margin)
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left px-3 py-2 font-medium">Markup</th>
                <th className="text-right px-3 py-2 font-medium">Equivalent margin</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                ["10%", "9.1%"],
                ["25%", "20%"],
                ["50%", "33.3%"],
                ["100%", "50%"],
                ["200%", "66.7%"],
              ].map(([mu, mg]) => (
                <tr key={mu} className="border-t border-gray-100">
                  <td className="px-3 py-2">{mu}</td>
                  <td className="px-3 py-2 text-right font-semibold text-gray-900">{mg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The popular "keystone" pricing — doubling the cost — is a 100% markup, which is a 50% margin.
          The two numbers only meet at zero.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">When to use which</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The practical rule: <strong>price with markup, report with margin.</strong> When you are
          setting a price you start from cost, so markup is the natural tool — add your target percentage
          to what the item cost you. When you are judging how the business is doing, margin is the truth,
          because it tells you what fraction of every sale survives as profit. The two views work
          together: markup builds the price, margin grades the result. To find the sales volume where
          those margins finally cover your fixed costs, pair this with the{" "}
          <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Gross margin isn't the whole story</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          One caution: the margin above is <em>gross</em> margin — it only subtracts the direct cost of
          the product. Rent, wages, software, marketing, and tax all come out afterwards. A business can
          show a fat gross margin and still make no net profit once the overheads are paid. So treat
          margin as the first number you check, not the last. When you are weighing whether a price cut
          or a cost saving does more for the bottom line, the{" "}
          <Link href="/finance/cost-reduction-calculator/" className="text-blue-600 hover:underline">cost reduction calculator</Link>{" "}
          and the{" "}
          <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link>{" "}
          let you test the effect on margin before you commit.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The one-line summary</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Markup is profit divided by <strong>cost</strong>; margin is profit divided by{" "}
          <strong>price</strong>. Markup is always the bigger percentage. Use markup to build a price,
          margin to measure what you keep, and never assume one is the other. Keep the{" "}
          <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link>{" "}
          and{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>{" "}
          side by side and you will never confuse them again.
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
