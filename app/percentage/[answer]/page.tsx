import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { generatePageMetadata } from "@/lib/seo/metadata"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { fmt } from "@/lib/calculators/utils"

// Pattern 1: what-is-20-percent-of-100
const PERCENTS = [5, 10, 15, 20, 25, 30, 33, 40, 50, 60, 66, 75, 80, 90]
const NUMBERS = [20, 25, 30, 40, 50, 60, 75, 80, 100, 120, 150, 200, 250, 300, 400, 500, 750, 1000]

// Pattern 2: 15-is-what-percent-of-60
const PARTS = [5, 10, 12, 15, 18, 20, 25, 30, 40, 50, 60, 75, 80, 100]
const WHOLES = [20, 25, 40, 50, 75, 100, 120, 150, 200, 250, 300, 400, 500, 1000]

// Pattern 3: what-is-10-percent-increase-from-50
const INCREASE_PERCENTS = [3, 5, 10, 15, 20, 25, 30, 40, 50]
const INCREASE_BASES = [10, 20, 25, 50, 100, 150, 200, 250, 300, 400, 500, 1000]

type ParsedAnswer =
  | { type: "whatIsXPctOfY"; p: number; n: number }
  | { type: "xIsWhatPctOfY"; part: number; whole: number }
  | { type: "pctIncreaseFrom"; p: number; base: number }

function parseSlug(answer: string): ParsedAnswer | null {
  const m1 = answer.match(/^what-is-(\d+)-percent-of-(\d+)$/)
  if (m1) {
    const p = parseInt(m1[1])
    const n = parseInt(m1[2])
    if (PERCENTS.includes(p) && NUMBERS.includes(n)) return { type: "whatIsXPctOfY", p, n }
  }
  const m2 = answer.match(/^(\d+)-is-what-percent-of-(\d+)$/)
  if (m2) {
    const part = parseInt(m2[1])
    const whole = parseInt(m2[2])
    if (PARTS.includes(part) && WHOLES.includes(whole)) return { type: "xIsWhatPctOfY", part, whole }
  }
  const m3 = answer.match(/^what-is-(\d+)-percent-increase-from-(\d+)$/)
  if (m3) {
    const p = parseInt(m3[1])
    const base = parseInt(m3[2])
    if (INCREASE_PERCENTS.includes(p) && INCREASE_BASES.includes(base)) return { type: "pctIncreaseFrom", p, base }
  }
  return null
}

export function generateStaticParams() {
  const type1 = PERCENTS.flatMap((p) =>
    NUMBERS.map((n) => ({ answer: `what-is-${p}-percent-of-${n}` }))
  )
  const type2 = PARTS.flatMap((part) =>
    WHOLES.map((whole) => ({ answer: `${part}-is-what-percent-of-${whole}` }))
  )
  const type3 = INCREASE_PERCENTS.flatMap((p) =>
    INCREASE_BASES.map((base) => ({ answer: `what-is-${p}-percent-increase-from-${base}` }))
  )
  return [...type1, ...type2, ...type3]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ answer: string }>
}): Promise<Metadata> {
  const { answer } = await params
  const parsed = parseSlug(answer)
  if (!parsed) return {}

  if (parsed.type === "whatIsXPctOfY") {
    const { p, n } = parsed
    const result = fmt((p / 100) * n)
    return generatePageMetadata({
      title: `What is ${p}% of ${n}? — Answer: ${result}`,
      description: `${p}% of ${n} is ${result}. See the step-by-step calculation and use the free percentage calculator for any value.`,
      path: `/percentage/${answer}/`,
      keywords: [`what is ${p} percent of ${n}`, `${p}% of ${n}`, `${p} percent of ${n}`],
    })
  } else if (parsed.type === "xIsWhatPctOfY") {
    const { part, whole } = parsed
    const result = fmt((part / whole) * 100)
    return generatePageMetadata({
      title: `${part} is What Percent of ${whole}? — Answer: ${result}%`,
      description: `${part} is ${result}% of ${whole}. See the step-by-step calculation and formula.`,
      path: `/percentage/${answer}/`,
      keywords: [
        `${part} is what percent of ${whole}`,
        `what percent is ${part} of ${whole}`,
        `${part} out of ${whole} as a percentage`,
      ],
    })
  } else {
    const { p, base } = parsed
    const increase = (p / 100) * base
    const result = fmt(base + increase)
    return generatePageMetadata({
      title: `What is ${p}% Increase from ${base}? — Answer: ${result}`,
      description: `A ${p}% increase from ${base} equals ${result}. The increase amount is ${fmt(increase)}. See the step-by-step calculation.`,
      path: `/percentage/${answer}/`,
      keywords: [
        `what is ${p} percent increase from ${base}`,
        `${p}% increase from ${base}`,
        `${p} percent increase of ${base}`,
      ],
    })
  }
}

export default async function AnswerPage({
  params,
}: {
  params: Promise<{ answer: string }>
}) {
  const { answer } = await params
  const parsed = parseSlug(answer)
  if (!parsed) notFound()

  if (parsed.type === "whatIsXPctOfY") {
    return <WhatIsXPctOfY p={parsed.p} n={parsed.n} />
  }
  if (parsed.type === "xIsWhatPctOfY") {
    return <XIsWhatPctOfY part={parsed.part} whole={parsed.whole} />
  }
  return <PctIncreaseFrom p={parsed.p} base={parsed.base} />
}

function WhatIsXPctOfY({ p, n }: { p: number; n: number }) {
  const result = (p / 100) * n
  const resultFmt = fmt(result)
  const decimal = p / 100

  const relatedSamePercent = NUMBERS.filter((x) => x !== n)
    .slice(0, 3)
    .map((x) => ({ p, n: x, result: fmt((p / 100) * x) }))

  const relatedSameNumber = PERCENTS.filter((x) => x !== p)
    .slice(0, 3)
    .map((x) => ({ p: x, n, result: fmt((x / 100) * n) }))

  return (
    <article className="mx-auto max-w-2xl px-4 pb-12">
      <div className="pt-8">
        <Breadcrumb
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Percentage Calculators", href: "/percentage/" },
            { name: `What is ${p}% of ${n}?`, href: `/percentage/what-is-${p}-percent-of-${n}/` },
          ]}
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">What is {p}% of {n}?</h1>

      <div className="bg-blue-50 border border-blue-100 rounded-xl px-6 py-6 mb-8 text-center">
        <p className="text-gray-600 text-sm mb-1">{p}% of {n} =</p>
        <p className="text-5xl font-bold text-blue-700">{resultFmt}</p>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3">How to calculate {p}% of {n}</h2>
        <ol className="space-y-2 text-gray-700 list-decimal list-inside">
          <li>Convert {p}% to a decimal: {p} ÷ 100 = {decimal}</li>
          <li>Multiply by {n}: {decimal} × {n} = <strong>{resultFmt}</strong></li>
        </ol>
        <div className="mt-3 bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800">
          {n} × {decimal} = {resultFmt}
        </div>
      </section>

      <section className="mb-8 border border-gray-200 rounded-xl px-5 py-4 bg-gray-50">
        <p className="text-gray-700 text-sm">
          Need a different value?{" "}
          <Link href="/percentage/what-is-x-percent-of-y/" className="text-blue-600 hover:underline font-medium">
            Use the percentage calculator
          </Link>{" "}
          to find any percent of any number instantly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">Other {p}% calculations</h2>
        <div className="grid grid-cols-3 gap-2">
          {relatedSamePercent.map(({ p: rp, n: rn, result: rr }) => (
            <Link
              key={`${rp}-${rn}`}
              href={`/percentage/what-is-${rp}-percent-of-${rn}/`}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors flex flex-col"
            >
              <span className="text-xs text-gray-500">{rp}% of {rn}</span>
              <span className="font-bold text-gray-900 mt-0.5">{rr}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">Other percentages of {n}</h2>
        <div className="grid grid-cols-3 gap-2">
          {relatedSameNumber.map(({ p: rp, n: rn, result: rr }) => (
            <Link
              key={`${rp}-${rn}`}
              href={`/percentage/what-is-${rp}-percent-of-${rn}/`}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors flex flex-col"
            >
              <span className="text-xs text-gray-500">{rp}% of {rn}</span>
              <span className="font-bold text-gray-900 mt-0.5">{rr}</span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}

function XIsWhatPctOfY({ part, whole }: { part: number; whole: number }) {
  const result = (part / whole) * 100
  const resultFmt = fmt(result)

  const relatedSameWhole = PARTS.filter((x) => x !== part)
    .slice(0, 3)
    .map((x) => ({ part: x, whole, result: fmt((x / whole) * 100) }))

  const relatedSamePart = WHOLES.filter((x) => x !== whole)
    .slice(0, 3)
    .map((x) => ({ part, whole: x, result: fmt((part / x) * 100) }))

  return (
    <article className="mx-auto max-w-2xl px-4 pb-12">
      <div className="pt-8">
        <Breadcrumb
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Percentage Calculators", href: "/percentage/" },
            {
              name: `${part} is what percent of ${whole}?`,
              href: `/percentage/${part}-is-what-percent-of-${whole}/`,
            },
          ]}
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {part} is What Percent of {whole}?
      </h1>

      <div className="bg-blue-50 border border-blue-100 rounded-xl px-6 py-6 mb-8 text-center">
        <p className="text-gray-600 text-sm mb-1">{part} out of {whole} =</p>
        <p className="text-5xl font-bold text-blue-700">{resultFmt}%</p>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3">
          How to calculate {part} as a percentage of {whole}
        </h2>
        <ol className="space-y-2 text-gray-700 list-decimal list-inside">
          <li>Divide {part} by {whole}: {part} ÷ {whole} = {fmt(part / whole)}</li>
          <li>Multiply by 100: {fmt(part / whole)} × 100 = <strong>{resultFmt}%</strong></li>
        </ol>
        <div className="mt-3 bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800">
          ({part} ÷ {whole}) × 100 = {resultFmt}%
        </div>
      </section>

      <section className="mb-8 border border-gray-200 rounded-xl px-5 py-4 bg-gray-50">
        <p className="text-gray-700 text-sm">
          Need a different value?{" "}
          <Link href="/percentage/x-is-what-percent-of-y/" className="text-blue-600 hover:underline font-medium">
            Use the X is what percent of Y calculator
          </Link>{" "}
          for any two numbers instantly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
          Other values out of {whole}
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {relatedSameWhole.map(({ part: rp, whole: rw, result: rr }) => (
            <Link
              key={`${rp}-${rw}`}
              href={`/percentage/${rp}-is-what-percent-of-${rw}/`}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors flex flex-col"
            >
              <span className="text-xs text-gray-500">{rp} of {rw}</span>
              <span className="font-bold text-gray-900 mt-0.5">{rr}%</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
          {part} out of other totals
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {relatedSamePart.map(({ part: rp, whole: rw, result: rr }) => (
            <Link
              key={`${rp}-${rw}`}
              href={`/percentage/${rp}-is-what-percent-of-${rw}/`}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors flex flex-col"
            >
              <span className="text-xs text-gray-500">{rp} of {rw}</span>
              <span className="font-bold text-gray-900 mt-0.5">{rr}%</span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}

function PctIncreaseFrom({ p, base }: { p: number; base: number }) {
  const increaseAmt = (p / 100) * base
  const newValue = base + increaseAmt
  const newFmt = fmt(newValue)
  const incFmt = fmt(increaseAmt)

  const relatedPercents = INCREASE_PERCENTS.filter((x) => x !== p)
    .slice(0, 3)
    .map((x) => ({ p: x, base, result: fmt(base + (x / 100) * base) }))

  const relatedBases = INCREASE_BASES.filter((x) => x !== base)
    .slice(0, 3)
    .map((x) => ({ p, base: x, result: fmt(x + (p / 100) * x) }))

  return (
    <article className="mx-auto max-w-2xl px-4 pb-12">
      <div className="pt-8">
        <Breadcrumb
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Percentage Calculators", href: "/percentage/" },
            { name: `${p}% increase from ${base}`, href: `/percentage/what-is-${p}-percent-increase-from-${base}/` },
          ]}
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">What is {p}% Increase from {base}?</h1>

      <div className="bg-blue-50 border border-blue-100 rounded-xl px-6 py-6 mb-8 text-center">
        <p className="text-gray-600 text-sm mb-1">{p}% increase from {base} =</p>
        <p className="text-5xl font-bold text-blue-700">{newFmt}</p>
        <p className="text-sm text-gray-500 mt-2">Increase amount: +{incFmt}</p>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3">How to calculate {p}% increase from {base}</h2>
        <ol className="space-y-2 text-gray-700 list-decimal list-inside">
          <li>Find {p}% of {base}: {base} × {p / 100} = {incFmt}</li>
          <li>Add to the original: {base} + {incFmt} = <strong>{newFmt}</strong></li>
        </ol>
        <div className="mt-3 bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800">
          {base} × (1 + {p}/100) = {base} × {1 + p / 100} = {newFmt}
        </div>
      </section>

      <section className="mb-8 border border-gray-200 rounded-xl px-5 py-4 bg-gray-50">
        <p className="text-gray-700 text-sm">
          Need a different percentage increase?{" "}
          <Link href="/percentage/percentage-increase-calculator/" className="text-blue-600 hover:underline font-medium">
            Use the percentage increase calculator
          </Link>{" "}
          for any two values.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">Other % increases from {base}</h2>
        <div className="grid grid-cols-3 gap-2">
          {relatedPercents.map(({ p: rp, base: rb, result: rr }) => (
            <Link
              key={`${rp}-${rb}`}
              href={`/percentage/what-is-${rp}-percent-increase-from-${rb}/`}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors flex flex-col"
            >
              <span className="text-xs text-gray-500">{rp}% of {rb}</span>
              <span className="font-bold text-gray-900 mt-0.5">{rr}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">{p}% increase from other values</h2>
        <div className="grid grid-cols-3 gap-2">
          {relatedBases.map(({ p: rp, base: rb, result: rr }) => (
            <Link
              key={`${rp}-${rb}`}
              href={`/percentage/what-is-${rp}-percent-increase-from-${rb}/`}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors flex flex-col"
            >
              <span className="text-xs text-gray-500">{rp}% of {rb}</span>
              <span className="font-bold text-gray-900 mt-0.5">{rr}</span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}
