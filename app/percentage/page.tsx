import type { Metadata } from "next"
import Link from "next/link"
import { getCalculatorsByHub } from "@/lib/content/calculators"
import { generateHubMetadata } from "@/lib/seo/metadata"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = generateHubMetadata({
  hub: "percentage",
  title: "Percentage Calculators",
  description:
    "Free percentage calculators for every use case. Find what percent of a number is, calculate increases, decreases, changes, differences, and more.",
})

export default function PercentagePage() {
  const calculators = getCalculatorsByHub("percentage")

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Breadcrumb
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
        ]}
      />

      <h1 className="text-3xl font-bold text-gray-900 mb-3">Percentage Calculators</h1>
      <p className="text-gray-600 mb-8 text-lg">
        All the percentage calculators you need in one place. Fast, free, and accurate.
      </p>

      <ul className="space-y-3">
        {calculators.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/percentage/${c.slug}/`}
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
