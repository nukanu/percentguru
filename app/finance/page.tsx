import type { Metadata } from "next"
import Link from "next/link"
import { getCalculatorsByHub } from "@/lib/content/calculators"
import { generateHubMetadata } from "@/lib/seo/metadata"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = generateHubMetadata({
  hub: "finance",
  title: "Finance Calculators",
  description:
    "Free finance calculators for discounts, markup, profit margin, sales tax, and more. Built for business owners, shoppers, and students.",
})

export default function FinancePage() {
  const calculators = getCalculatorsByHub("finance")

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Breadcrumb
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
        ]}
      />

      <h1 className="text-3xl font-bold text-gray-900 mb-3">Finance Calculators</h1>
      <p className="text-gray-600 mb-8 text-lg">
        Practical finance calculators for pricing, discounts, and margins.
      </p>

      <ul className="space-y-3">
        {calculators.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/finance/${c.slug}/`}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
            >
              <div>
                <p className="font-semibold text-gray-800 group-hover:text-blue-700">{c.title}</p>
                <p className="text-sm text-gray-500 mt-0.5">{c.description}</p>
              </div>
              <span className="text-gray-400 group-hover:text-blue-400 text-xl ml-4">&rarr;</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
