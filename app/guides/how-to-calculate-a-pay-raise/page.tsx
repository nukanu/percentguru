import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

const meta = guides.find((g) => g.slug === "how-to-calculate-a-pay-raise")!

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides/" },
  { name: "How to Calculate a Pay Raise", href: "/guides/how-to-calculate-a-pay-raise/" },
]

const faqs = [
  {
    question: "How do I calculate the percentage of my pay rise?",
    answer: "Subtract your old pay from your new pay, divide the difference by your old pay, and multiply by 100. If you went from £30,000 to £31,500, that's £1,500 ÷ £30,000 × 100 = a 5% rise. Always divide by the old figure, not the new one.",
  },
  {
    question: "What counts as a good pay raise?",
    answer: "The honest benchmark is inflation. A rise that beats the current inflation rate increases your real spending power; one below it is a pay cut in disguise, even though the number went up. A typical merit increase sits around 3–5%, while a promotion or a job move often brings 10–20%.",
  },
  {
    question: "Why is my take-home increase smaller than my raise?",
    answer: "Because a raise is taxed at your marginal rate, not your average one. Each extra pound sits in your highest tax band, so a 5% gross rise lands as a smaller percentage in your bank account once income tax and national insurance take their share.",
  },
  {
    question: "How do I turn an annual raise into an hourly figure?",
    answer: "Divide the new annual salary by the hours you work in a year — for a standard full-time job that's roughly 2,080 hours (40 hours × 52 weeks). A £2,000 raise on a 40-hour week is about £0.96 more per hour before tax.",
  },
  {
    question: "Is a flat-amount raise better than a percentage one?",
    answer: "It depends on your current pay. A flat £1,500 is a bigger percentage for a lower earner than a higher one, so flat raises compress pay gaps. A percentage raise preserves them. Neither is automatically fairer — it depends on what the increase is meant to reward.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "How to Calculate a Pay Raise (and What Counts as a Good One)",
  description: meta.description,
  path: "/guides/how-to-calculate-a-pay-raise/",
  keywords: [
    "how to calculate a pay raise",
    "pay raise percentage",
    "salary increase calculator",
    "what is a good pay raise",
    "raise after tax",
    "calculate salary increase",
  ],
})

export default function HowToCalculatePayRaiseGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: meta.title, description: meta.description, path: "/guides/how-to-calculate-a-pay-raise/", datePublished: meta.published, dateModified: meta.updated })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="mx-auto max-w-2xl px-4 pb-16">
        <div className="pt-8">
          <Breadcrumb crumbs={crumbs} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">How to Calculate a Pay Raise (and What Counts as a Good One)</h1>
        <p className="text-sm text-gray-500 mb-6">Money guide · Updated June 2026</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          A pay raise is one of the few numbers worth checking twice. "We're giving you a 4% rise"
          sounds generous until you work out it's £40 a month after tax, or that prices rose faster than
          your pay did over the same year. Calculating a raise properly means three things: getting the
          percentage right, turning that percentage into money you can actually spend, and judging it
          against the cost of living. This guide does all three with plain examples. To run your own
          figures as you read, the{" "}
          <Link href="/percentage/salary-increase-calculator/" className="text-blue-600 hover:underline">salary increase calculator</Link>{" "}
          gives you the percentage and the new salary in one step.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Step 1: the percentage of the raise</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          A raise is just a percentage increase on your current pay. Take the difference between new and
          old, divide by the old figure, and multiply by 100.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Raise % = ((New pay − Old pay) ÷ Old pay) × 100
        </div>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Example.</strong> Your salary goes from £30,000 to £31,500.</p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Difference: £31,500 − £30,000 = £1,500</li>
          <li>£1,500 ÷ £30,000 = 0.05 = <strong>a 5% raise</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          The key word is <em>old</em>: you divide by what you used to earn, because that's the baseline
          the increase is measured from. This is the same maths as any{" "}
          <Link href="/percentage/percentage-increase-calculator/" className="text-blue-600 hover:underline">percentage increase</Link>. Going the other way is just as common — if you're told the percentage and want the new salary, the{" "}
          <Link href="/percentage/percentage-change-calculator/" className="text-blue-600 hover:underline">percentage change calculator</Link>{" "}
          works in either direction.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Step 2: turn the percentage into real money</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          A percentage is abstract; a monthly figure is not. To feel a raise, break it down to the unit
          you're paid in.
        </p>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Example.</strong> That 5% on £30,000 is £1,500 a year. Spread it out:</p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Per month: £1,500 ÷ 12 = <strong>£125</strong></li>
          <li>Per week: £1,500 ÷ 52 ≈ <strong>£28.85</strong></li>
          <li>Per hour (40-hr week): £1,500 ÷ 2,080 ≈ <strong>£0.72</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you're paid hourly, converting your new salary to an hourly rate is the clearest way to see
          the change — the{" "}
          <Link href="/finance/salary-to-hourly-calculator/" className="text-blue-600 hover:underline">salary to hourly calculator</Link>{" "}
          handles the 2,080-hour conversion for you and lets you adjust for part-time hours.
        </p>

        <div className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 mb-4">
          <p className="text-gray-800 text-sm leading-relaxed">
            <strong>The take-home catch:</strong> a raise is taxed at your <em>marginal</em> rate — the
            band your top pound falls in — not your average rate. So a 5% gross raise never lands as a
            full 5% in your account. The headline percentage is real, but the money that reaches you is
            smaller, and the higher your earnings, the wider that gap.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Step 3: compare it to inflation</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is the step most people skip, and it's the one that decides whether a raise is actually a
          raise. If prices rose 3% over the year and your pay rose 5%, your <strong>real</strong>{" "}
          increase — your gain in spending power — is roughly 2%. If prices rose 6% and your pay rose 5%,
          you are worse off than before, even though the number on your payslip went up. A simple
          subtraction tells the story: real raise ≈ your raise − inflation. Always ask what a "good"
          raise is <em>relative to</em>, not in isolation.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">So what counts as a good raise?</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left px-3 py-2 font-medium">Type of raise</th>
                <th className="text-right px-3 py-2 font-medium">Typical range</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2">Standard cost-of-living / merit</td>
                <td className="px-3 py-2 text-right">3–5%</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2">Strong performance review</td>
                <td className="px-3 py-2 text-right">5–8%</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2">Promotion</td>
                <td className="px-3 py-2 text-right">10–15%</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2">Moving to a new employer</td>
                <td className="px-3 py-2 text-right">10–20%+</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          These are rules of thumb, not promises — they vary by industry, country, and economy. The one
          firm rule is the inflation floor: a raise below inflation is a pay cut, however it's dressed
          up. Anything comfortably above it, plus recognition of more responsibility, is a genuinely good
          outcome.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The compounding angle</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          One reason small raises matter more than they look: they compound. A 4% raise this year becomes
          the base for next year's, so steady increases stack like interest. Over a decade, the
          difference between averaging 3% and 5% a year is enormous — the same maths that drives the{" "}
          <Link href="/finance/compound-interest-calculator/" className="text-blue-600 hover:underline">compound interest calculator</Link>. It's why negotiating an extra point or two now pays off for years, not just one payslip.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The quick version</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Divide the increase by your old pay for the percentage, break that down to a monthly figure to
          see what it really means, subtract inflation to find your true gain, and remember the headline
          number shrinks after tax. Run the numbers in the{" "}
          <Link href="/percentage/salary-increase-calculator/" className="text-blue-600 hover:underline">salary increase calculator</Link>{" "}
          and you'll know exactly where you stand before you say yes.
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
