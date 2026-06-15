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
| 2026-06-07 | Host canonicalization: `www` now 301-redirects to apex `percentguru.com` (was the reverse, 307). Set in Vercel by making the apex the primary domain. |
| 2026-06-07 | Enabled `trailingSlash: true` so served URLs match the trailing-slash canonicals/sitemap (Next was 308-redirecting `/path/` → `/path`). |
| 2026-06-15 | **Switched filler from noindex → deleted (404).** Set `dynamicParams = false` + a `PUBLISH_FILLER` flag (default `false`) on both `app/percentage/[answer]/page.tsx` and `app/finance/salary/[answer]/page.tsx`. Now only the 23 curated answer slugs build; every other answer/salary URL returns 404. Reason: noindex was propagating too slowly (GSC 6/12 showed only 2 pages "Excluded by noindex"); 404 is a cleaner delete signal. The generator code stays in the files as the archive — flip `PUBLISH_FILLER` to `true` to republish the full long-tail set. |

Net result Google now sees: ~59 quality pages, **zero thin pages indexed**, on a
single canonical host with URLs that resolve 200 (no redirect chains).

## What we still need to do before re-applying

1. **Let Google re-crawl and drop the noindexed pages.** Watch Search Console
   "Pages" report until the indexed count falls to roughly the sitemap size.
   Expect ~2–3 weeks.
2. **Set the `percentguru.com` (non-www) property as primary in Search Console**
   and re-submit the sitemap, so GSC matches the new canonical host.
3. **Confirm trust pages are solid** — About, Contact, Privacy, Terms all exist;
   re-read them for completeness before re-applying.
4. **Re-apply to AdSense** only after 1–3 are done and the index has settled.

## Target index ratio (what to watch in Search Console → Pages)

**Goal in ~2–4 weeks:**

- **Indexed: ~71 pages** (grows as guides are added). That is the whole sitemap —
  homepage + 2 hubs + 36 calculators + 23 curated answer pages + 4 trust pages
  (About, Contact, Privacy, Terms) + the /guides/ index and each guide article.
  This is the number that proves the cleanup worked.
- **Not indexed → "Excluded by 'noindex' tag": ~1,640+.** This is the filler
  Google has correctly dropped. Seeing this reason climb into the thousands is
  the positive signal, not a problem.

**Snapshot 2026-06-07 (start point):** Indexed **1.55K**, Not indexed **3.01K**.
The 1.55K is still mostly filler that Google hasn't re-crawled yet — it should
fall steadily toward ~71. Re-apply to AdSense once Indexed is roughly **50–80**
(not before).

**Don't be alarmed if total "Not indexed" stays high (3K+).** It is inflated by
non-content URLs that are expected and harmless: old `www` URLs now redirecting
to the apex, old non-trailing-slash URLs now redirecting, and duplicate/alternate
variants. Those are normal. The only two numbers that matter are: **Indexed falling to ~71**, and **"Excluded by 'noindex'" rising to ~1,640**.

## Notes

- Do NOT try to enrich all ~1,600 long-tail pages — keep them noindexed.
- If a noindexed slug later shows real, sustained demand, promote it by adding a
  unique entry to `CURATED_ANSWERS` (that automatically indexes it and adds it to
  the sitemap).
