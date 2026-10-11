import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

const meta = guides.find((g) => g.slug === "how-to-calculate-profit-margin")!

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides/" },
  { name: "How to Calculate Profit Margin", href: "/guides/how-to-calculate-profit-margin/" },
]

const faqs = [
  {
    question: "Can a profit margin be negative, or more than 100%?",
    answer: "It can be negative: if you spend more than you take in, profit is below zero and so is the margin. It cannot exceed 100%, because profit can never be larger than the revenue it came from. If a calculation gives you 120%, you have divided by cost and are looking at a markup.",
  },
  {
    question: "Does postage I charge the customer count as revenue?",
    answer: "Yes. If a customer pays $16 for an item and $4 for delivery, your revenue is $20 and the $4 you hand to the carrier is a cost. Profit is unchanged, but the margin on that order is lower than on the item alone, because the delivery money passes straight through. That is normal, and it is why margins on shipped orders look thinner than margins on products.",
  },
  {
    question: "Why did my margin fall in a month when sales went up?",
    answer: "Usually one of three things: the extra sales came from discounts, they came from advertising that cost more than usual, or customers shifted toward your lower-margin products. Higher revenue with a lower margin can still mean more profit in dollars, so check both figures before you worry.",
  },
  {
    question: "How often should I work out each margin?",
    answer: "Check gross margin per product whenever a supplier price, a fee or your own price changes, since that is where problems start. Work out operating and net margin for the whole business once a month, on the same day, so the months are comparable.",
  },
  {
    question: "Is profit margin the same thing as return on investment?",
    answer: "No. Margin measures profit against sales. Return on investment measures profit against the money you had to put in. A product with a modest margin that sells out every week can return far more on the cash tied up in stock than a high-margin item that sits on the shelf for months.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "How to Calculate Profit Margin: Gross, Operating and Net",
  description: meta.description,
  path: "/guides/how-to-calculate-profit-margin/",
  keywords: [
    "how to calculate profit margin",
    "how to calculate gross margin",
    "calculate profit margin",
    "net profit margin formula",
    "operating margin",
  ],
})

export default function HowToCalculateProfitMarginGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: meta.title, description: meta.description, path: "/guides/how-to-calculate-profit-margin/", datePublished: meta.published, dateModified: meta.updated })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="mx-auto max-w-2xl px-4 pb-16">
        <div className="pt-8">
          <Breadcrumb crumbs={crumbs} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">How to Calculate Profit Margin: Gross, Operating and Net</h1>
        <p className="text-sm text-gray-500 mb-6">Business guide · Updated October 2026</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          &quot;Profit margin&quot; is really three numbers that answer three different questions: is
          this product worth selling, is the business paying its way, and what is left at the end. They
          all use the same formula, applied one layer of costs at a time. This guide takes a small
          online tea shop through a single month, from $8,000 of sales down to the money that remains,
          and stops at each layer. For a single sale, the{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>{" "}
          gives the answer directly.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">One formula, used three times</h2>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Profit margin % = Profit ÷ Revenue × 100
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Revenue is always on the bottom. Only the profit on top changes, depending on how many costs
          you have taken off so far. If you divide by cost instead, you have calculated markup, which
          is a larger number for the same sale; the{" "}
          <Link href="/guides/markup-vs-margin/" className="text-blue-600 hover:underline">markup vs margin guide</Link>{" "}
          explains how the two relate.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Start small: the margin on one product</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The shop&apos;s main product is a tin of loose-leaf tea that sells for $16. The tea, the tin,
          the label and the marketplace fee come to $7.20.
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Profit: $16.00 − $7.20 = $8.80</li>
          <li>Margin: $8.80 ÷ $16.00 = <strong>55%</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          It also sells a $6 sample pack that costs $4.20 to put together. The profit is $1.80 and the
          margin is 30%. Two products, two very different margins. Keep that in mind for later.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Gross margin: after the cost of what you sold</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Now the whole month. Sales came to $8,000 before tax. Everything that went directly into
          those orders — stock, packaging, postage and marketplace fees — cost $4,400.
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Gross profit: $8,000 − $4,400 = $3,600</li>
          <li>Gross margin: $3,600 ÷ $8,000 = <strong>45%</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Gross margin tells you whether your prices and your costs are in a sensible relationship. It
          says nothing yet about whether the business makes money.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Operating margin: after the bills</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Next come the costs of being open at all, whether or not anything sells: $150 for the website
          and software, $600 of advertising, $250 for storage, and $1,800 the owner pays herself. That
          is $2,800.
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Operating profit: $3,600 − $2,800 = $800</li>
          <li>Operating margin: $800 ÷ $8,000 = <strong>10%</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          The owner&apos;s wage is in there deliberately. Leave it out and the margin looks like 32.5%,
          which describes a business that only works if nobody is paid to run it.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Net margin: what is actually left</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Last, the costs that are not about trading: $80 of loan interest and $160 set aside for tax.
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Net profit: $800 − $240 = $560</li>
          <li>Net margin: $560 ÷ $8,000 = <strong>7%</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          So the same month is a 45%, a 10% and a 7% business, and all three figures are correct. When
          someone quotes a margin, the first thing to ask is which one.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The benchmark that matters is your own overheads</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Industry averages are a poor guide for a small seller. A more useful test is already in your
          figures. The shop&apos;s running costs of $2,800 are 35% of its $8,000 revenue. That means any
          month with a gross margin below 35% loses money, however busy it felt. The gap between your
          gross margin and that overhead percentage is your real breathing room: here, ten points. To
          turn it into a sales target, the{" "}
          <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link>{" "}
          gives the number of units.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Two mistakes that make a margin look better than it is</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Using a price that includes tax.</strong> Sales tax and VAT are collected for the
          government and are not your revenue. An item with a $21.60 shelf price including 8% sales tax
          brings in $20. If it costs $11, the margin is $9 ÷ $20 = 45%. Worked on the $21.60 it appears
          to be 49%. Strip the tax out first; the{" "}
          <Link href="/finance/sales-tax-calculator/" className="text-blue-600 hover:underline">sales tax calculator</Link>{" "}
          will do it.
        </p>
        <div className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 mb-4">
          <p className="text-gray-800 text-sm leading-relaxed">
            <strong>Averaging the percentages.</strong> The tea tin runs at 55% and the sample pack at
            30%, so the shop&apos;s margin must be about 42.5%? Only if they sell in equal dollar
            amounts. Suppose a month brings $2,000 from tins and $6,000 from sample packs. Profit is
            $1,100 + $1,800 = $2,900, and $2,900 ÷ $8,000 is 36.25%. Always add up the dollars of
            profit and divide by the dollars of revenue. Never average margins.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Which lever moves margin most</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Take the month above, with its $800 operating profit, and change one thing by 5%.
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Sell 5% more at the same prices: gross profit rises by $180, operating profit to $980.</li>
          <li>Cut the cost of goods by 5%: $220 saved, operating profit $1,020.</li>
          <li>Raise prices by 5% and keep the same customers: about $400 more, operating profit roughly $1,200.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          A price rise goes almost entirely to profit, because no extra stock has to be bought to earn
          it. That is also why it cuts the other way: a discount comes straight out of the same place.
          Before running a promotion, put it through the seller section of the{" "}
          <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Setting a price from the margin you want</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          To work forwards from a target, divide the cost by one minus the margin. If the shop wants a
          60% margin on a tin that costs $7.20:
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Price = Cost ÷ (1 − Margin) = $7.20 ÷ 0.40 = $18.00
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Multiplying the cost by 1.60 gives $11.52, which is a 37.5% margin. If you would rather think
          in terms of what you add to cost, use the{" "}
          <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link>,
          and the{" "}
          <Link href="/guides/how-to-calculate-markup/" className="text-blue-600 hover:underline">guide to calculating markup</Link>{" "}
          covers costing a product properly before you start.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">A ten-minute monthly routine</h2>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Total the month&apos;s sales, without tax.</li>
          <li>Subtract what those orders cost you directly. Divide by sales: gross margin.</li>
          <li>Subtract the running costs, including your own pay. Divide by sales: operating margin.</li>
          <li>Subtract interest and tax. Divide by sales: net margin.</li>
          <li>Write all three next to last month&apos;s. The direction matters more than the level.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          A falling gross margin points at prices, suppliers or fees. A steady gross margin with a
          falling operating margin points at overheads. Knowing which layer moved tells you where to
          look.
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
