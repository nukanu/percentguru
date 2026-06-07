import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

const meta = guides.find((g) => g.slug === "percentage-increase-and-decrease")!

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides/" },
  { name: "Percentage Increase and Decrease", href: "/guides/percentage-increase-and-decrease/" },
]

const faqs = [
  {
    question: "What's the formula for a percentage increase?",
    answer: "Subtract the old value from the new value, divide by the old value, and multiply by 100. From 50 to 65 is (65 − 50) ÷ 50 × 100 = a 30% increase. A percentage decrease uses the same formula; the result simply comes out negative.",
  },
  {
    question: "Do two percentage changes add together?",
    answer: "No. A 10% rise followed by another 10% rise is not a 21% gain because the second rise applies to the already-larger amount. £100 becomes £110, then £121 — a 21% increase overall, not 20%. Successive percentages multiply, they don't add.",
  },
  {
    question: "If a price rises 25% then falls 25%, am I back where I started?",
    answer: "No, you end up lower. £100 rising 25% is £125; £125 falling 25% is £93.75. Each percentage is taken from a different base, so an equal rise and fall never cancel — you finish below the original every time.",
  },
  {
    question: "How do I find the original price after a discount?",
    answer: "Divide, don't add. If an item is £90 after 25% off, that £90 is 75% of the original, so the original was £90 ÷ 0.75 = £120. Adding 25% back on would give the wrong answer because the discount was taken from the higher original price.",
  },
  {
    question: "Is '20% off' the same as a 20% decrease?",
    answer: "Yes — they're identical calculations. '20% off' is just retail language for a 20% decrease on the original price. Multiply the price by 0.80 (or 1 minus the discount) to get the sale price.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percentage Increase and Decrease, Explained with Examples",
  description: meta.description,
  path: "/guides/percentage-increase-and-decrease/",
  keywords: [
    "percentage increase",
    "percentage decrease",
    "how to calculate percentage increase",
    "percentage increase formula",
    "successive percentage change",
    "reverse a percentage",
  ],
})

export default function PercentageIncreaseDecreaseGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: meta.title, description: meta.description, path: "/guides/percentage-increase-and-decrease/", datePublished: meta.published, dateModified: meta.updated })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="mx-auto max-w-2xl px-4 pb-16">
        <div className="pt-8">
          <Breadcrumb crumbs={crumbs} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Percentage Increase and Decrease, Explained with Examples</h1>
        <p className="text-sm text-gray-500 mb-6">Maths guide · Updated June 2026</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Prices go up, audiences grow, energy bills jump, sale tags promise "30% off." All of these are
          the same idea — a percentage increase or decrease — and once you can calculate one, you can
          calculate them all. The arithmetic takes ten seconds. What trips people up is what happens when
          changes stack, or when you need to run one backwards. This guide covers the basic formula and
          then the two situations where intuition fails most people. To check any figure as you go, the{" "}
          <Link href="/percentage/percentage-change-calculator/" className="text-blue-600 hover:underline">percentage change calculator</Link>{" "}
          handles increases and decreases in one place.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The one formula behind both</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Increase and decrease are not two formulas — they are one. Take the difference between the new
          and old values, divide by the <strong>old</strong> value, and multiply by 100. A positive
          answer is an increase, a negative one a decrease.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Change % = ((New − Old) ÷ Old) × 100
        </div>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Increase example.</strong> A subscription rises from £50 to £65.</p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Difference: £65 − £50 = £15</li>
          <li>£15 ÷ £50 = 0.30 = <strong>a 30% increase</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Decrease example.</strong> A coat drops from £80 to £60.</p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Difference: £60 − £80 = −£20</li>
          <li>−£20 ÷ £80 = −0.25 = <strong>a 25% decrease</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          The only thing to be careful about is the denominator: you always divide by the figure you
          started from. If you want each direction on its own, the{" "}
          <Link href="/percentage/percentage-increase-calculator/" className="text-blue-600 hover:underline">percentage increase calculator</Link>{" "}
          and{" "}
          <Link href="/percentage/percentage-decrease-calculator/" className="text-blue-600 hover:underline">percentage decrease calculator</Link>{" "}
          do exactly that.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Applying a change directly</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Often you don't want the percentage — you want the result. To apply a change in one step, use a
          <strong> multiplier</strong>: for an increase multiply by (1 + rate); for a decrease multiply by
          (1 − rate).
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Increase: New = Old × (1 + rate)&nbsp;&nbsp;·&nbsp;&nbsp;Decrease: New = Old × (1 − rate)
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          So £200 increased by 15% is £200 × 1.15 = £230, and £200 reduced by 15% is £200 × 0.85 = £170.
          A "30% off" tag is just a 30% decrease — multiply the price by 0.70. That's the engine inside the{" "}
          <Link href="/percentage/percent-off-calculator/" className="text-blue-600 hover:underline">percent-off calculator</Link>{" "}
          and the{" "}
          <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link>{" "}
          you reach for at the till.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Trap 1: changes don't add up</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Stack two percentage changes and you cannot simply add them, because the second change is
          applied to the new, larger (or smaller) amount — not the original.
        </p>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Example.</strong> A £100 bill rises 10%, then rises another 10%.</p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>After the first rise: £100 × 1.10 = £110</li>
          <li>After the second: £110 × 1.10 = £121</li>
          <li>Overall change: <strong>21%, not 20%</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          That extra 1% is the second rise acting on the first rise's £10. The effect grows with bigger
          numbers and more steps — it's the same compounding that makes savings and inflation snowball
          over time, explored in the{" "}
          <Link href="/finance/compound-interest-calculator/" className="text-blue-600 hover:underline">compound interest calculator</Link>.
        </p>

        <div className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 mb-4">
          <p className="text-gray-800 text-sm leading-relaxed">
            <strong>A rise and a fall don't cancel either.</strong> Put £100 up 25% to £125, then down
            25%, and you land on £93.75 — not £100. Because the 25% fall is taken from the bigger £125,
            it removes more than the rise added. Equal-looking percentages in opposite directions always
            leave you below where you began.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Trap 2: running a change backwards</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          When you know the result and want the starting point — the price before a discount, the figure
          before a markup — you must <strong>divide</strong>, not add the percentage back.
        </p>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Example.</strong> A jacket costs £90 after 25% off. What was the original price?</p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>£90 is 75% of the original (100% − 25%)</li>
          <li>Original: £90 ÷ 0.75 = <strong>£120</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Adding 25% back to £90 would give £112.50 — wrong, because the discount was calculated on the
          higher original, not the sale price. This "work backwards" job is common enough to have its own
          tool: the{" "}
          <Link href="/percentage/reverse-percentage-calculator/" className="text-blue-600 hover:underline">reverse percentage calculator</Link>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Quick reference</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left px-3 py-2 font-medium">You want to…</th>
                <th className="text-left px-3 py-2 font-medium">Do this</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2">Find the % change between two numbers</td>
                <td className="px-3 py-2">(New − Old) ÷ Old × 100</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2">Increase a number by a %</td>
                <td className="px-3 py-2">× (1 + rate)</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2">Decrease a number by a %</td>
                <td className="px-3 py-2">× (1 − rate)</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2">Find the original before a change</td>
                <td className="px-3 py-2">Result ÷ (1 ± rate)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The takeaway</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          One formula covers both increase and decrease — difference over the original, times 100. To
          apply a change, multiply by (1 ± rate). Remember that stacked changes multiply rather than add,
          that a matching rise and fall never cancel, and that going backwards means dividing. Keep the{" "}
          <Link href="/percentage/percentage-change-calculator/" className="text-blue-600 hover:underline">percentage change calculator</Link>{" "}
          to hand for the everyday cases and you've got every version covered.
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
