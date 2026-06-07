import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

const meta = guides.find((g) => g.slug === "how-to-calculate-percentages")!

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides/" },
  { name: "How to Calculate Percentages", href: "/guides/how-to-calculate-percentages/" },
]

const faqs = [
  {
    question: "What's the fastest way to find a percentage in my head?",
    answer: "Break it into 10% and 1% chunks. 10% of any number is that number with the decimal point moved one place left; 1% moves it two places. To get 15% of 80, take 10% (8) plus half of that for the 5% (4), which gives 12. Most everyday percentages can be built from 10%, 5%, and 1% pieces.",
  },
  {
    question: "Is \"percent of\" the same as multiplying by a decimal?",
    answer: "Yes. \"Percent\" means \"out of 100,\" so 25% is just 25/100 = 0.25. Finding 25% of a number is the same as multiplying it by 0.25. Converting the percentage to a decimal first is usually the cleanest way to do it on a calculator.",
  },
  {
    question: "Why do a 50% drop and a 50% rise not cancel out?",
    answer: "Because each percentage is taken from a different starting point. If £100 falls 50% you have £50; a 50% rise on £50 is only £25, taking you back to £75, not £100. Percentage changes always apply to the current value, not the original, so they don't reverse symmetrically.",
  },
  {
    question: "How do I reverse a percentage to find the original amount?",
    answer: "Divide rather than subtract. If £72 is the price after a 20% discount, that £72 represents 80% of the original, so the original was £72 ÷ 0.80 = £90. Working backwards from a total that already includes (or excludes) a percentage is the one case where people most often go wrong.",
  },
  {
    question: "What's the difference between percentage points and percent?",
    answer: "A move from 5% to 7% is a rise of 2 percentage points, but a 40% increase in relative terms. \"Points\" describe the gap between two percentages; \"percent\" describes the proportional change. Mixing them up is a classic source of misleading statistics.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "How to Calculate Percentages: The Complete Guide",
  description: meta.description,
  path: "/guides/how-to-calculate-percentages/",
  keywords: [
    "how to calculate percentages",
    "how to find a percentage",
    "percentage of a number",
    "percentage change",
    "work out a percentage",
    "percentage formula",
  ],
})

export default function HowToCalculatePercentagesGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: meta.title, description: meta.description, path: "/guides/how-to-calculate-percentages/", datePublished: meta.published, dateModified: meta.updated })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="mx-auto max-w-2xl px-4 pb-16">
        <div className="pt-8">
          <Breadcrumb crumbs={crumbs} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">How to Calculate Percentages: The Complete Guide</h1>
        <p className="text-sm text-gray-500 mb-6">Maths guide · Updated June 2026</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Almost every percentage question you will ever face is one of three problems wearing a
          disguise. Once you can spot which of the three you are looking at, the maths is short and
          the same every time. This guide walks through all three — finding a percentage <em>of</em> a
          number, working out one number <em>as</em> a percentage of another, and measuring a
          percentage <em>change</em> — with the kind of examples you actually meet: tips, discounts,
          test scores, and pay. If you only need an answer, the{" "}
          <Link href="/percentage/percentage-calculator/" className="text-blue-600 hover:underline">percentage calculator</Link>{" "}
          handles all three; but understanding the method means you will never be at the mercy of a
          dead phone battery.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">First, what a percentage actually is</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Percent" comes from <em>per centum</em> — Latin for "per hundred." A percentage is simply a
          fraction with 100 on the bottom. So 25% means 25 out of 100, which is the fraction 25/100,
          which is the decimal 0.25. Those three are the same value written three ways. The single most
          useful habit in all of percentage maths is converting the percent to a decimal before you do
          anything: drop the % sign and move the decimal point two places left. 7% becomes 0.07, 60%
          becomes 0.6, 150% becomes 1.5. Everything below rests on that one move.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Problem 1: finding a percentage of a number</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          This is the "what is 20% of 60?" shape — a tip, a discount, a deposit, a commission. Convert
          the percentage to a decimal and multiply.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Part = Percent (as decimal) × Whole
        </div>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Example.</strong> A £60 meal, and you want to leave a 20% tip.</p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>20% as a decimal is 0.20</li>
          <li>0.20 × £60 = <strong>£12</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          The mental shortcut is to build the number from 10% pieces. 10% of £60 is £6, so 20% is just
          double that — £12 — and you never touched a calculator. This is the engine behind the{" "}
          <Link href="/percentage/tip-calculator/" className="text-blue-600 hover:underline">tip calculator</Link>{" "}
          and the{" "}
          <Link href="/percentage/what-is-x-percent-of-y/" className="text-blue-600 hover:underline">what is X percent of Y calculator</Link>, and it is exactly how a shop works out the saving on a sale item.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Problem 2: one number as a percentage of another</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          This is the reverse direction — you have two amounts and want to know what proportion one is
          of the other. "I got 38 out of 50, what percent is that?" Divide the part by the whole, then
          multiply by 100.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Percent = (Part ÷ Whole) × 100
        </div>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Example.</strong> A test marked 38 out of 50.</p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>38 ÷ 50 = 0.76</li>
          <li>0.76 × 100 = <strong>76%</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          The order matters: it is always <em>part over whole</em>, the thing you have divided by the
          thing it is a slice of. Get those upside down and the answer is nonsense. The{" "}
          <Link href="/percentage/x-is-what-percent-of-y/" className="text-blue-600 hover:underline">X is what percent of Y calculator</Link>{" "}
          does this directly, and it is the same logic that turns a fraction into a percentage — see the{" "}
          <Link href="/percentage/fraction-to-percent-calculator/" className="text-blue-600 hover:underline">fraction to percent calculator</Link>{" "}
          if your numbers start life as a fraction.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Problem 3: percentage change</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          A price went from £80 to £100; a salary, a temperature, a follower count moved. Percentage
          change measures the size of that move relative to where it started. Take the difference,
          divide by the <strong>original</strong> value, and multiply by 100.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Change = ((New − Old) ÷ Old) × 100
        </div>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Example.</strong> A price rose from £80 to £100.</p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Difference: £100 − £80 = £20</li>
          <li>£20 ÷ £80 = 0.25</li>
          <li>0.25 × 100 = <strong>a 25% increase</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          A positive result is an increase, a negative one a decrease. The word that catches people out
          is <em>original</em>: you always divide by the starting figure, not the new one. The{" "}
          <Link href="/percentage/percentage-change-calculator/" className="text-blue-600 hover:underline">percentage change calculator</Link>{" "}
          handles both directions, while the{" "}
          <Link href="/percentage/percentage-increase-calculator/" className="text-blue-600 hover:underline">percentage increase calculator</Link>{" "}
          is handy when you know you are going up.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The trap: percentages don't reverse</h2>
        <div className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 mb-4">
          <p className="text-gray-800 text-sm leading-relaxed">
            A 50% fall and a 50% rise do <strong>not</strong> cancel out. Drop £100 by 50% and you have
            £50. Raise that £50 by 50% and you gain only £25, landing at £75 — not back at £100. Each
            percentage is taken from a different base, so a rise and a fall of the same percent never
            undo each other. To get back from £50 to £100 you actually need a 100% increase.
          </p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The same trap appears when you want to undo a percentage — finding the price before a
          discount, or the figure before VAT was added. You cannot just add the percentage back on; you
          have to divide. If a coat costs £72 after 20% off, that £72 is 80% of the original, so the
          original was £72 ÷ 0.80 = £90. That is the job of the{" "}
          <Link href="/percentage/reverse-percentage-calculator/" className="text-blue-600 hover:underline">reverse percentage calculator</Link>, and the same maths underpins working out the price before a sale on the{" "}
          <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Percent vs. percentage points</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          One last distinction worth owning, because it is everywhere in the news. If an interest rate
          moves from 5% to 7%, that is a rise of <strong>2 percentage points</strong> — but a 40%
          increase in relative terms (2 is 40% of 5). "Points" measure the gap between two percentages;
          "percent" measures the proportional change between them. A headline that blurs the two can
          make a small change sound enormous, or vice versa. When the underlying figures are themselves
          percentages, reach for the{" "}
          <Link href="/percentage/percentage-points-calculator/" className="text-blue-600 hover:underline">percentage points calculator</Link>{" "}
          to keep the two ideas apart.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Which problem am I looking at?</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left px-3 py-2 font-medium">If the question sounds like…</th>
                <th className="text-left px-3 py-2 font-medium">Do this</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2">"What is 15% of 200?"</td>
                <td className="px-3 py-2">Multiply: 0.15 × 200</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2">"30 out of 40 is what percent?"</td>
                <td className="px-3 py-2">Divide, ×100: (30 ÷ 40) × 100</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2">"It went from 40 to 50 — what's the rise?"</td>
                <td className="px-3 py-2">Change ÷ original: (10 ÷ 40) × 100</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2">"£72 after 20% off — what was it before?"</td>
                <td className="px-3 py-2">Divide back: 72 ÷ 0.80</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Skip the arithmetic</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Knowing the method is what stops you being fooled by a bad statistic or a too-good-to-be-true
          sale. But for the day-to-day numbers, let a tool do the lifting: the general{" "}
          <Link href="/percentage/percentage-calculator/" className="text-blue-600 hover:underline">percentage calculator</Link>{" "}
          covers all three problems on one screen, and if your value starts as a decimal you can flip it
          with the{" "}
          <Link href="/percentage/decimal-to-percent-calculator/" className="text-blue-600 hover:underline">decimal to percent calculator</Link>. Bookmark the one you reach for most.
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
