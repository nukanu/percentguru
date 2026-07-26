import Link from "next/link"
import { calculators } from "@/lib/content/calculators"
import { getRelatedSlugs } from "@/lib/content/related"

type FAQ = {
  question: string
  answer: React.ReactNode
}

type CalculatorShellProps = {
  slug: string
  title: string
  intro: React.ReactNode
  whenToUse: string
  calculator: React.ReactNode
  howTo: string[]
  formula: string
  formulaExplained: string
  examples: { input: string; output: string }[]
  useCases: string[]
  faqs: FAQ[]
  lookupTable?: React.ReactNode
  secondaryTool?: React.ReactNode
}

export default function CalculatorShell({
  slug,
  title,
  intro,
  whenToUse,
  calculator,
  howTo,
  formula,
  formulaExplained,
  examples,
  useCases,
  faqs,
  lookupTable,
  secondaryTool,
}: CalculatorShellProps) {
  const relatedSlugs = getRelatedSlugs(slug)
  const relatedCalculators = relatedSlugs
    .map((s) => calculators.find((c) => c.slug === s))
    .filter(Boolean)

  return (
    <article className="mx-auto max-w-2xl px-4 pb-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-700 mb-4 leading-relaxed">{intro}</p>

      <section className="mb-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-1">When to use this calculator</h2>
        <p className="text-sm text-gray-600">{whenToUse}</p>
      </section>

      <section aria-label="Calculator">
        {calculator}
        <p className="text-xs text-gray-500 mt-3">Results are instant — nothing is stored and no account is needed.</p>
      </section>

      {secondaryTool}

      {relatedCalculators.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">Related Calculators</h2>
          <div className="flex flex-wrap gap-2">
            {relatedCalculators.map((c) => (
              <Link
                key={c!.slug}
                href={`/${c!.hub}/${c!.slug}/`}
                className="px-3 py-1.5 text-sm border border-gray-200 rounded-full text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                {c!.title}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3">How to Calculate</h2>
        <ol className="space-y-1.5 list-decimal list-inside text-gray-700">
          {howTo.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Formula</h2>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-2">
          {formula}
        </div>
        <p className="text-gray-600 text-sm">{formulaExplained}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Examples</h2>
        <div className="space-y-2">
          {examples.map((ex, i) => (
            <div key={i} className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-gray-700">{ex.input}</p>
              <p className="text-blue-700 font-bold ml-4 shrink-0">{ex.output}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Use Cases</h2>
        <ul className="space-y-1 text-gray-700 list-disc list-inside text-sm">
          {useCases.map((uc, i) => (
            <li key={i}>{uc}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-800 mb-1">{faq.question}</h3>
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {lookupTable && (
        <section className="mt-8">
          {lookupTable}
        </section>
      )}
    </article>
  )
}
