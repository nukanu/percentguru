import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = generatePageMetadata({
  title: "About PercentGuru",
  description: "PercentGuru provides fast, accurate percentage and finance calculators. No sign-up, no clutter — just instant answers.",
  path: "/about/",
})

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-8 pb-16">
      <Breadcrumb crumbs={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about/" },
      ]} />
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About PercentGuru</h1>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          PercentGuru is a collection of percentage and finance calculators designed to give you
          accurate answers quickly. No accounts, no ads obscuring results, no slow page loads.
          You type a number, you get an answer.
        </p>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">What it covers</h2>
          <p>
            Two calculator hubs: <Link href="/percentage/" className="text-blue-600 hover:underline">percentage calculators</Link> for
            everyday maths (percentage increase, decrease, change, error, reverse percentage), and <Link href="/finance/" className="text-blue-600 hover:underline">finance calculators</Link> for
            business and personal finance (profit margins, discounts, markup, ROI, loan repayments, break-even).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Why it exists</h2>
          <p>
            Most calculator sites are cluttered, slow, or buried under ads. PercentGuru is built
            to be the opposite: fast, focused, and useful. Each page explains the formula, shows
            worked examples, and answers the questions people actually ask — not just the obvious ones.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Accuracy</h2>
          <p>
            All calculations run in your browser using standard mathematical formulas. Results are
            for informational and educational purposes. For decisions involving significant money or
            legal obligations, verify with a qualified professional.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Who we are</h2>
          <p>
            PercentGuru is built and maintained by the PercentGuru Team — a small group focused on
            making everyday maths and financial calculations accessible to everyone. We built this
            site because we were frustrated with calculator tools that were slow, ad-heavy, or gave
            answers without explanation. Every page on PercentGuru is written and reviewed by us to
            make sure the formulas, examples, and explanations are correct and genuinely useful.
          </p>
          <p className="mt-3">
            Have a question or found an error?{" "}
            <Link href="/contact/" className="text-blue-600 hover:underline">Get in touch</Link> — we read every message.
          </p>
        </div>
      </div>
    </div>
  )
}
