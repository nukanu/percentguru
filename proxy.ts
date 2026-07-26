import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { CURATED_ANSWER_SLUGS } from "@/lib/content/curated-answers"

// The removed long-tail filler answer pages currently 404 (they are excluded
// from generateStaticParams). Returning 410 Gone instead tells Google the URLs
// are permanently removed, which drops them from the index faster than a 404.
//
// Only slugs matching these digit-based patterns are filler. The static tool
// pages (percentage-calculator, what-is-x-percent-of-y, ...) use literal words,
// never digits, so they never match. Curated answer slugs DO match the digit
// patterns, so they are explicitly allowlisted below and stay live.
const PERCENTAGE_FILLER = [
  /^what-is-\d+-percent-of-\d+$/,
  /^\d+-is-what-percent-of-\d+$/,
  /^what-is-\d+-percent-increase-from-\d+$/,
  /^what-is-\d+-percent-decrease-from-\d+$/,
  /^what-is-\d+-percent-off-\d+$/,
]
const SALARY_FILLER = /^\d+-a-year-is-how-much-an-hour$/

function gone() {
  return new NextResponse("410 Gone", {
    status: 410,
    headers: { "X-Robots-Tag": "noindex" },
  })
}

export function proxy(req: NextRequest) {
  const slug = req.nextUrl.pathname.replace(/\/+$/, "").split("/").pop() ?? ""

  if (req.nextUrl.pathname.startsWith("/percentage/")) {
    if (
      !CURATED_ANSWER_SLUGS.has(slug) &&
      PERCENTAGE_FILLER.some((re) => re.test(slug))
    ) {
      return gone()
    }
  } else if (req.nextUrl.pathname.startsWith("/finance/salary/")) {
    if (SALARY_FILLER.test(slug)) return gone()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/percentage/:path*", "/finance/salary/:path*"],
}
