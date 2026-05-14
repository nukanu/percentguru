import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { generatePageMetadata } from "@/lib/seo/metadata"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { fmt } from "@/lib/calculators/utils"

const PERCENTS = [5, 10, 15, 20, 25, 30, 33, 40, 50, 60, 66, 75, 80, 90]
const NUMBERS = [20, 25, 30, 40, 50, 60, 75, 80, 100, 120, 150, 200, 250, 300, 400, 500, 750, 1000]

function parseSlug(answer: string): { p: number; n: number } | null {
  const match = answer.match(/^what-is-(\d+)-percent-of-(\d+)$/)
  if (!match) return null
  const p = parseInt(match[1])
  const n = parseInt(match[2])
  if (!PERCENTS.includes(p) || !NUMBERS.includes(n)) return null
  return { p, n }
}

function calc(p: number, n: number): number {
  return (p / 100) * n
}

export function generateStaticParams() {
  return PERCENTS.flatMap((p) =>
    NUMBERS.map((n) => ({ answer: `what-is-${p}-percent-of-${n}` }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ answer: string }>
}): Promise<Metadata> {
  const { answer } = await params
  const parsed = parseSlug(answer)
  if (!parsed) return {}
  const { p, n } = parsed
  const result = fmt(calc(p, n))
  return generatePageMetadata({
    title: `What is ${p}% of ${n}? — Answer: ${result}`,
    description: `${p}% of ${n} is ${result}. See the step-by-step calculation and use the free percentage calculator for any value.`,
    path: `/percentage/${answer}/`,
    keywords: [
      `what is ${p} percent of ${n}`,
      `${p}% of ${n}`,
      `${p} percent of ${n}`,
    ],
  })
}

export default async function AnswerPage({
  params,
}: {
  params: Promise<{ answer: string }>
}) {
  const { answer } = await params
  const parsed = parseSlug(answer)
  if (!parsed) notFound()

  const { p, n } = parsed
  const result = calc(p, n)
  const resultFormatted = fmt(result)
  const decimal = p / 100

  const relatedSamePercent = NUMBERS.filter((x) => x !== n)
    .slice(0, 3)
    .map((x) => ({ p, n: x, result: fmt(calc(p, x)) }))

  const relatedSameNumber = PERCENTS.filter((x) => x !== p)
    .slice(0, 3)
    .map((x) => ({ p: x, n, result: fmt(calc(x, n)) }))

  return (
    <article className="mx-auto max-w-2xl px-4 pb-12">
      <div className="pt-8">
        <Breadcrumb
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Percentage Calculators", href: "/percentage/" },
            {
              name: `What is ${p}% of ${n}?`,
              href: `/percentage/what-is-${p}-percent-of-${n}/`,
            },
          ]}
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        What is {p}% of {n}?
      </h1>

      <div className="bg-blue-50 border border-blue-100 rounded-xl px-6 py-6 mb-8 text-center">
        <p className="text-gray-600 text-sm mb-1">
          {p}% of {n} =
        </p>
        <p className="text-5xl font-bold text-blue-700">{resultFormatted}</p>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3">
          How to calculate {p}% of {n}
        </h2>
        <ol className="space-y-2 text-gray-700 list-decimal list-inside">
          <li>
            Convert {p}% to a decimal: {p} ÷ 100 = {decimal}
          </li>
          <li>
            Multiply by {n}: {decimal} × {n} ={" "}
            <strong>{resultFormatted}</strong>
          </li>
        </ol>
        <div className="mt-3 bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800">
          {n} × {decimal} = {resultFormatted}
        </div>
      </section>

      <section className="mb-8 border border-gray-200 rounded-xl px-5 py-4 bg-gray-50">
        <p className="text-gray-700 text-sm">
          Need a different value?{" "}
          <Link
            href="/percentage/what-is-x-percent-of-y/"
            className="text-blue-600 hover:underline font-medium"
          >
            Use the percentage calculator
          </Link>{" "}
          to find any percent of any number instantly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
          Other {p}% calculations
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {relatedSamePercent.map(({ p: rp, n: rn, result: rr }) => (
            <Link
              key={`${rp}-${rn}`}
              href={`/percentage/what-is-${rp}-percent-of-${rn}/`}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors flex flex-col"
            >
              <span className="text-xs text-gray-500">
                {rp}% of {rn}
              </span>
              <span className="font-bold text-gray-900 mt-0.5">{rr}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
          Other percentages of {n}
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {relatedSameNumber.map(({ p: rp, n: rn, result: rr }) => (
            <Link
              key={`${rp}-${rn}`}
              href={`/percentage/what-is-${rp}-percent-of-${rn}/`}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors flex flex-col"
            >
              <span className="text-xs text-gray-500">
                {rp}% of {rn}
              </span>
              <span className="font-bold text-gray-900 mt-0.5">{rr}</span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}
