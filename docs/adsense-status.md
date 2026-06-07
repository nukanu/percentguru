# AdSense Status & Recovery Plan

Living record of the AdSense application, why it was rejected, and what we are
doing about it. Update this as the situation changes.

## Rejection

- **Date received:** 2026-05-25
- **Decision:** Rejected
- **Reason given:** **Low value content**
  > "Your site does not yet meet the criteria of use in the Google publisher
  > network."
- **Google resources cited:**
  - Minimum content requirements — https://support.google.com/adsense/answer/9335564#minimum_content_requirements
  - Unique high-quality content / good UX — https://support.google.com/adsense/answer/10015918
  - Webmaster guidelines: thin content — https://support.google.com/webmasters/answer/9044175#thin-content
  - Webmaster quality guidelines — https://support.google.com/adsense/answer/1348737

## Root cause (our diagnosis)

The site was ~98% thin content: **36 real calculators vs ~1,661 auto-generated,
near-duplicate "answer" pages** (`what-is-X-percent-of-Y`, `X-is-what-percent-of-Y`,
`% increase/decrease/off`, and salary pages). Each answer page was ~50–80 words —
a result box, a two-line calculation, and links. AdSense judges the whole
domain's quality ratio, so the thin pages sank the application.

The same root cause drove an organic traffic collapse in Search Console:
impressions peaked ~8,800/day (2026-05-20) then crashed to ~3–25/day by
2026-06-01 — Google trial-ranked the mass pages, found them thin, and demoted
them. CTR was ~0.03% (the pages ranked for queries Google answers in the SERP,
so nobody clicked).

## What we have done

| Date | Action |
|------|--------|
| 2026-06-07 | `noindex, follow` on all non-curated answer pages + all salary pages. They stay live for direct visitors; reversible. |
| 2026-06-07 | Sitemap trimmed from ~1,700 URLs to ~64 (36 calculators + 23 curated answers + hubs/trust pages). |
| 2026-06-07 | Defined a curated allowlist of the 23 highest-impression answer slugs (`lib/content/curated-answers.ts`). |
| 2026-06-07 | Expanded all 23 curated pages with unique content: intro, two real-world worked examples, a "when you need this" section, and 2–3 unique FAQs each, plus FAQ JSON-LD. |

Net result Google now sees: ~59 quality pages, **zero thin pages indexed.**

## What we still need to do before re-applying

1. **Let Google re-crawl and drop the noindexed pages.** Watch Search Console
   "Pages" report until the indexed count falls to roughly the sitemap size.
   Expect ~2–3 weeks.
2. **Fix the host/canonical mismatch (open).** `percentguru.com` currently
   307-redirects to `www.percentguru.com`, but every canonical/sitemap URL uses
   the non-www host. Decision: standardize on **non-www** (`percentguru.com`).
   Action needed in the **Vercel dashboard** → Project → Domains: set
   `percentguru.com` as the primary domain so `www` issues a 301 to it. The code
   already uses non-www, so no code change is required. Also set the matching
   property as primary in Search Console.
3. **Confirm trust pages are solid** — About, Contact, Privacy, Terms all exist;
   re-read them for completeness before re-applying.
4. **Re-apply to AdSense** only after 1–3 are done and the index has settled.

## Notes

- Do NOT try to enrich all ~1,600 long-tail pages — keep them noindexed.
- If a noindexed slug later shows real, sustained demand, promote it by adding a
  unique entry to `CURATED_ANSWERS` (that automatically indexes it and adds it to
  the sitemap).
