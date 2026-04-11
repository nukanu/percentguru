import Link from "next/link"
import { getCalculatorsByHub } from "@/lib/content/calculators"

export default function Home() {
  const percentageCalcs = getCalculatorsByHub("percentage")
  const financeCalcs = getCalculatorsByHub("finance")

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <section className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Free Percentage &amp; Finance Calculators
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Fast, accurate calculators for percentages, discounts, margins, and more. No sign-up required.
        </p>
      </section>

      <div className="grid sm:grid-cols-2 gap-10">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Percentage Calculators</h2>
            <Link href="/percentage/" className="text-sm text-blue-600 hover:underline">
              View all
            </Link>
          </div>
          <ul className="space-y-2">
            {percentageCalcs.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/percentage/${c.slug}/`}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <span className="text-gray-700 group-hover:text-blue-700 font-medium">{c.title}</span>
                  <span className="text-gray-400 group-hover:text-blue-400 text-lg">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Finance Calculators</h2>
            <Link href="/finance/" className="text-sm text-blue-600 hover:underline">
              View all
            </Link>
          </div>
          <ul className="space-y-2">
            {financeCalcs.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/finance/${c.slug}/`}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <span className="text-gray-700 group-hover:text-blue-700 font-medium">{c.title}</span>
                  <span className="text-gray-400 group-hover:text-blue-400 text-lg">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
