import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

const meta = guides.find((g) => g.slug === "salary-to-hourly")!

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides/" },
  { name: "Salary to Hourly", href: "/guides/salary-to-hourly/" },
]

const faqs = [
  {
    question: "How do I convert my salary to an hourly rate?",
    answer: "Divide your annual salary by the number of hours you work in a year. For a standard full-time job that's about 2,080 hours (40 hours × 52 weeks), so a £41,600 salary is roughly £20 an hour. Fewer or more hours change the figure proportionally.",
  },
  {
    question: "Why is 2,080 the standard number of work hours?",
    answer: "It's 40 hours a week multiplied by 52 weeks. It's a clean baseline, but it ignores paid holiday and bank holidays — counting those as worked hours slightly understates your true rate, while unpaid overtime pushes it the other way.",
  },
  {
    question: "How does unpaid overtime affect my real hourly rate?",
    answer: "It lowers it, often sharply. Your salary is fixed, so every extra unpaid hour divides the same pay across more hours. Someone on £52,000 working a 50-hour week earns about £20 an hour, not the £25 their contracted 40 hours would suggest.",
  },
  {
    question: "Should I use gross or net pay for the conversion?",
    answer: "Use gross pay to compare job offers on equal terms, since tax varies by person. Use net (take-home) pay when you want to know what an hour of your time actually puts in your pocket. The method is identical — just start from a different salary figure.",
  },
  {
    question: "How do I turn an hourly rate back into a salary?",
    answer: "Multiply the hourly rate by your annual hours. At £18 an hour over 2,080 hours that's £37,440 a year. Drop to 30 hours a week (1,560 hours) and the same rate is £28,080 — useful for pricing part-time or freelance work.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Salary to Hourly: How to Work Out Your Real Hourly Rate",
  description: meta.description,
  path: "/guides/salary-to-hourly/",
  keywords: [
    "salary to hourly",
    "convert salary to hourly rate",
    "real hourly rate",
    "annual salary to hourly",
    "hourly rate from salary",
    "how many work hours in a year",
  ],
})

export default function SalaryToHourlyGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: meta.title, description: meta.description, path: "/guides/salary-to-hourly/", datePublished: meta.published, dateModified: meta.updated })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="mx-auto max-w-2xl px-4 pb-16">
        <div className="pt-8">
          <Breadcrumb crumbs={crumbs} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Salary to Hourly: How to Work Out Your Real Hourly Rate</h1>
        <p className="text-sm text-gray-500 mb-6">Money guide · Updated June 2026</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          A salary hides what an hour of your time is really worth. £45,000 a year sounds solid — but if
          you're at your desk 55 hours a week, the hourly figure tells a less flattering story than the
          headline. Converting salary to hourly is easy; converting it <em>honestly</em> means counting
          the hours you actually give up, not the ones in your contract. This guide does the simple
          version first, then the realistic one. To switch between salary and hourly instantly, the{" "}
          <Link href="/finance/salary-to-hourly-calculator/" className="text-blue-600 hover:underline">salary to hourly calculator</Link>{" "}
          runs both directions.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The basic conversion</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Divide your annual salary by the number of hours you work in a year. The standard full-time
          baseline is <strong>2,080 hours</strong> — 40 hours a week across 52 weeks.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Hourly rate = Annual salary ÷ Annual hours&nbsp;&nbsp;·&nbsp;&nbsp;(full-time ≈ 2,080)
        </div>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Example.</strong> A £41,600 salary, standard full-time hours.</p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>£41,600 ÷ 2,080 = <strong>£20.00 an hour</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          A handy shortcut for a rough figure: halve the salary in thousands. £41,600 → about £20/hour;
          £60,000 → about £30/hour. It's close because 2,080 is near 2,000, and it's good enough for a
          quick gut-check before you reach for the{" "}
          <Link href="/percentage/percentage-calculator/" className="text-blue-600 hover:underline">percentage calculator</Link>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Going the other way</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Freelancers and part-timers usually need the reverse: an hourly rate turned into a yearly
          figure. Multiply the rate by your annual hours. £18 an hour over a full-time 2,080 hours is
          £37,440; the same rate over a 30-hour week (1,560 hours) is £28,080. If you're quoting a
          freelance rate, remember you also carry the holiday, sick pay, and pension an employer would
          normally fund — so a freelance hourly rate usually needs to sit well above the employed
          equivalent just to break even.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The real rate: count the hours you actually give</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Here's where the headline and reality part ways. Your salary is <em>fixed</em>, so every extra
          hour you work — paid or not — divides the same money across more hours and drags your true rate
          down.
        </p>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Example.</strong> Two people both earn £52,000.</p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Person A works a true 40-hour week: £52,000 ÷ 2,080 = <strong>£25.00/hour</strong></li>
          <li>Person B works 50 hours: £52,000 ÷ 2,600 = <strong>£20.00/hour</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Same salary, but Person B sells their time for a fifth less. Ten unpaid hours a week is the
          difference between £25 and £20 an hour. Seeing it this way is often what turns a vague feeling
          of being overworked into a concrete number — and a reason to renegotiate.
        </p>

        <div className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 mb-4">
          <p className="text-gray-800 text-sm leading-relaxed">
            <strong>Don't forget the commute.</strong> If you spend an unpaid hour a day travelling for
            work, that's roughly 235 extra hours a year tied to the job. Folding them in drops a £20/hour
            full-time rate to about £18 — a real cost that never shows on the payslip but is just as much
            time spent earning your salary.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Gross vs. net: which to use</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Use your <strong>gross</strong> salary when comparing two job offers — tax is personal, so the
          before-tax figure keeps the comparison fair. Use your <strong>net</strong> (take-home) salary
          when you want to know what an hour of work really deposits in your account, since that's the
          money you live on. The arithmetic is the same; only the starting number changes. Pairing this
          with your latest raise is revealing too — a rise that's eaten by extra hours can leave your real
          hourly rate flat, which the{" "}
          <Link href="/percentage/salary-increase-calculator/" className="text-blue-600 hover:underline">salary increase calculator</Link>{" "}
          helps you check.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Reference: full-time hourly rates</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left px-3 py-2 font-medium">Annual salary</th>
                <th className="text-right px-3 py-2 font-medium">≈ Hourly (2,080 hrs)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[25000, 35000, 45000, 60000, 80000].map((s) => (
                <tr key={s} className="border-t border-gray-100">
                  <td className="px-3 py-2">£{s.toLocaleString()}</td>
                  <td className="px-3 py-2 text-right font-semibold text-gray-900">£{(s / 2080).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The bottom line</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Divide salary by annual hours for the textbook rate, but divide by the hours you{" "}
          <em>genuinely</em> work — overtime and commute included — for the rate that tells the truth.
          The gap between the two is one of the most useful numbers you can know about your own job. Run
          your figures through the{" "}
          <Link href="/finance/salary-to-hourly-calculator/" className="text-blue-600 hover:underline">salary to hourly calculator</Link>{" "}
          with your real weekly hours and you'll see exactly what your time is worth.
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
