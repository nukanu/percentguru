import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

const meta = guides.find((g) => g.slug === "how-to-calculate-a-discount")!

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides/" },
  { name: "How to Calculate a Discount", href: "/guides/how-to-calculate-a-discount/" },
]

const faqs = [
  {
    question: "Is 30% off then 20% off the same as 50% off?",
    answer: "No. The second discount applies to the already-reduced price, not the original. A £100 item at 30% off is £70; another 20% off £70 is £56 — a real discount of 44%, not 50%. Stacked percentages always come out lower than their sum.",
  },
  {
    question: "How do I find the original price from a sale price?",
    answer: "Divide the sale price by (1 minus the discount as a decimal). A £48 jumper at 20% off came from £48 ÷ 0.80 = £60. Don't add 20% back to £48 — that gives £57.60, which is wrong, because the 20% was taken off the larger original figure.",
  },
  {
    question: "How do I work out what percentage discount I got?",
    answer: "Divide the amount saved by the original price, then multiply by 100. If a £80 coat was reduced to £60, you saved £20; £20 ÷ £80 = 0.25 = a 25% discount. This is the same as asking what percent £20 is of £80.",
  },
  {
    question: "Does the discount or the sales tax come first?",
    answer: "The discount is applied first, then tax is calculated on the reduced price — that is standard retail practice almost everywhere. A £100 item at 20% off is £80, and 8% sales tax on £80 is £6.40, for a total of £86.40. Taxing before discounting would overcharge you.",
  },
  {
    question: "What does \"up to 70% off\" really mean?",
    answer: "It means 70% is the single biggest discount in the sale, not the typical one. Legally at least one item must be reduced by that amount, but most of the range is usually discounted far less. Always check the individual ticket price rather than trusting the headline.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "How to Calculate a Discount — Percent Off, Reverse & Stacked Sales",
  description: meta.description,
  path: "/guides/how-to-calculate-a-discount/",
  keywords: [
    "how to calculate a discount",
    "percent off",
    "calculate percentage off",
    "stacked discounts",
    "find original price from sale price",
    "what percentage discount",
  ],
})

export default function HowToCalculateADiscountGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: meta.title, description: meta.description, path: "/guides/how-to-calculate-a-discount/", datePublished: meta.published, dateModified: meta.updated })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="mx-auto max-w-2xl px-4 pb-16">
        <div className="pt-8">
          <Breadcrumb crumbs={crumbs} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">How to Calculate a Discount</h1>
        <p className="text-sm text-gray-500 mb-6">Shopping guide · Updated July 2026</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          A discount is just a percentage taken off a price — but there are three questions people
          actually ask at the till: what will I pay, what was the original price, and how big was the
          saving really? This guide covers all three, plus the trap that trips up almost everyone in a
          sale: why a &quot;30% off, then an extra 20% off&quot; deal is not 50% off. If you only need the
          number, the{" "}
          <Link href="/percentage/percent-off-calculator/" className="text-blue-600 hover:underline">percent-off calculator</Link>{" "}
          gives it instantly — but understanding the method means you will never be fooled by a
          headline again.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What &quot;percent off&quot; actually means</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A discount reduces the original price by a share of itself. &quot;25% off&quot; means you keep
          75% of the price and hand over that instead. So there are always two useful figures: the
          amount you <strong>save</strong> (the discount) and the amount you <strong>pay</strong> (the
          sale price). They add back up to the original. Keeping both in mind is what makes reversing a
          discount later so easy — the sale price is never the whole story, it is a fraction of the
          original.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The fast method: multiply by what&apos;s left</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          The quickest way to find a sale price is to multiply by the fraction you still pay, not to
          work out the saving and subtract it. For a 25% discount you pay 75%, so multiply by
          <strong> 0.75</strong>.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Sale price = Original × (1 − Discount)&nbsp;&nbsp;·&nbsp;&nbsp;Saving = Original × Discount
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The one-step version saves a mistake: doing it in two steps (find 25%, then subtract) works,
          but it is where slips happen under time pressure. A discount is simply a percentage decrease,
          so the same logic drives the{" "}
          <Link href="/percentage/percentage-decrease-calculator/" className="text-blue-600 hover:underline">percentage decrease calculator</Link>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Worked examples</h2>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Example 1 — a £60 jacket at 20% off.</strong></p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>You pay 80%: £60 × 0.80 = <strong>£48</strong></li>
          <li>You save 20%: £60 × 0.20 = <strong>£12</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Example 2 — a $250 phone at 15% off.</strong></p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>You pay 85%: $250 × 0.85 = <strong>$212.50</strong></li>
          <li>You save 15%: $250 × 0.15 = <strong>$37.50</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Notice the pattern: for any discount, the multiplier is <em>one minus the rate as a decimal</em>.
          A 10% discount uses 0.90, a 40% discount uses 0.60, and a 70% clearance uses 0.30. Memorise
          that and most sale maths becomes a single multiplication you can do in your head.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The stacking trap: why 30% + 20% isn&apos;t 50% off</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          This is the single most valuable thing to understand about discounts. When a shop offers
          &quot;30% off, then take a further 20% off at the checkout,&quot; the second discount applies
          to the <strong>already-reduced</strong> price — not the original. So the percentages do not add.
        </p>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>A £100 item, 30% off then 20% off:</strong></p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>After 30% off: £100 × 0.70 = <strong>£70</strong></li>
          <li>After a further 20% off: £70 × 0.80 = <strong>£56</strong></li>
          <li>Real discount: £44 saved on £100 = <strong>44% off</strong>, not 50%</li>
        </ul>
        <div className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 mb-4">
          <p className="text-gray-800 text-sm leading-relaxed">
            <strong>The shortcut:</strong> multiply the fractions you keep. 0.70 × 0.80 = 0.56, so you
            pay 56% and save 44%. Stacked discounts always come out <em>lower</em> than the two rates
            added together — the more you layer, the wider the gap. It is why &quot;buy one get 50%
            off the second&quot; is only a 25% saving across both items.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Working backwards: the original price from a sale price</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Sometimes you see the sale price and the discount and want the original — to check a claim, or
          to know the &quot;real&quot; value. Here you <strong>divide</strong> by the fraction you paid,
          you do not add the percentage back.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Original = Sale price ÷ (1 − Discount)
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          A jumper is £48 after 20% off, so the original was £48 ÷ 0.80 = <strong>£60</strong>. The
          tempting mistake is to add 20% to £48, which gives £57.60 — too low, because the 20% was taken
          off the bigger original figure, not the smaller sale price. This &quot;undo a percentage&quot;
          step is exactly what the{" "}
          <Link href="/percentage/reverse-percentage-calculator/" className="text-blue-600 hover:underline">reverse percentage calculator</Link>{" "}
          is built for.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Finding the discount percentage from two prices</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          If a ticket shows both the old and new price but not the percentage, work out the saving and
          express it as a share of the original.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Discount % = (Original − Sale) ÷ Original × 100
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          An £80 coat reduced to £60 saves £20, and £20 ÷ £80 = 0.25, a <strong>25% discount</strong>.
          This is the same question as asking what percent one number is of another, which the{" "}
          <Link href="/percentage/x-is-what-percent-of-y/" className="text-blue-600 hover:underline">&quot;X is what percent of Y&quot; calculator</Link>{" "}
          answers directly. Always divide the saving by the <em>original</em> price — dividing by the
          sale price inflates the figure and makes the deal look better than it is.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">&quot;Up to 70% off&quot; and other marketing wording</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          &quot;Up to&quot; means the number quoted is the <em>maximum</em>, applied to at least one
          item, not the average across the sale. A rail advertised as &quot;up to 50% off&quot; may hold
          plenty of pieces reduced by 10% or 20%. Treat the headline as a ceiling and check each ticket.
          The same scepticism helps with &quot;was/now&quot; pricing: a genuine discount needs a genuine
          original price, so a large saving from an inflated &quot;was&quot; figure is not the bargain it
          appears to be.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Discounts and sales tax: which comes first</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When tax is involved, the discount comes first and tax is charged on the reduced price. A £100
          item at 20% off is £80, and 8% tax on £80 adds £6.40, for £86.40 in total — not the £8 you
          would pay if tax were charged on the full price. For the full breakdown across state and local
          rates, the{" "}
          <Link href="/finance/sales-tax-calculator/" className="text-blue-600 hover:underline">sales tax calculator</Link>{" "}
          handles the second step once you have the discounted subtotal.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Quick reference</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left px-3 py-2 font-medium">Discount</th>
                <th className="text-right px-3 py-2 font-medium">You pay (multiplier)</th>
                <th className="text-right px-3 py-2 font-medium">£100 becomes</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[10, 15, 20, 25, 30, 50, 70].map((d) => (
                <tr key={d} className="border-t border-gray-100">
                  <td className="px-3 py-2">{d}% off</td>
                  <td className="px-3 py-2 text-right">×{((100 - d) / 100).toFixed(2)}</td>
                  <td className="px-3 py-2 text-right font-semibold text-gray-900">£{((100 * (100 - d)) / 100).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          For odd rates, awkward prices, or a full receipt with several items, let the{" "}
          <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link>{" "}
          do the arithmetic. And if you want the wider picture of how increases and decreases behave —
          including why a price cut and an equal-sized rise never cancel out — the guide on{" "}
          <Link href="/guides/percentage-increase-and-decrease/" className="text-blue-600 hover:underline">percentage increase and decrease</Link>{" "}
          picks up where this one leaves off.
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
