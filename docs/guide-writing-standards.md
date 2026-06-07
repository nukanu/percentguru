# Guide / Article Writing Standards (READ BEFORE WRITING ANY GUIDE)

Whenever the user asks for a guide or article on percentguru, it **must not be
thin**. This site was rejected by AdSense for "low value content" once already
(see `docs/adsense-status.md`). Recreating thin or near-duplicate content — even
in article form — would undo that recovery. Quality over quantity, always: one
excellent guide beats three rushed ones.

These standards apply automatically. The user does not need to repeat them in the
prompt.

## Hard requirements (every guide must meet ALL of these)

1. **Length:** at least **800 words** of real prose; aim for **900–1,500**.
   (Word count = rendered body text, not code.)
2. **Structure:** **7+ distinct, topic-specific H2 sections** plus an intro and an
   FAQ. Section headings must reflect the actual topic — not a generic skeleton
   reused across guides.
3. **Genuinely unique:** no sentence or paragraph may be shared with another
   guide. Do **not** take an existing guide and swap the numbers/nouns. Each guide
   gets its own framing, examples, and explanations.
4. **Real teaching value:** go beyond the bare answer. Every guide must include
   at least:
   - worked examples with concrete numbers, AND
   - a "trap" / common mistake / comparison / edge case that a reader wouldn't get
     from a one-line answer.
5. **FAQ:** exactly **5 genuinely non-obvious questions** with substantive
   answers, wired into `faqSchema`.
6. **Internal links:** **3–5 natural, in-context links** to relevant calculators,
   plus cross-links to related guides where it helps the reader. Use descriptive
   anchor text, not "click here".
7. **Schema:** include all three — `articleSchema`, `breadcrumbSchema`,
   `faqSchema` (copy the pattern from an existing guide, e.g.
   `app/guides/how-to-work-out-vat/page.tsx`).
8. **Tone:** plain English, practical, human. No filler, no fluff, no keyword
   stuffing, no AI throat-clearing ("In today's world…").

## Mechanics

- New page: `app/guides/<slug>/page.tsx` (copy an existing guide as the template).
- Add a registry entry to `lib/content/guides.ts` — this **auto-adds it to the
  /guides/ index and the sitemap**. No manual sitemap edit needed.
- Header/footer already link `/guides/`.
- The site uses trailing slashes and the non-www host — already configured, don't
  change them.

## Pre-ship self-check (all must be "yes")

- [ ] 800+ words of real prose?
- [ ] 7+ topic-specific sections + intro + 5-question FAQ?
- [ ] Reads completely differently from every existing guide (no reused text or
      skeleton)?
- [ ] Teaches something beyond the answer (examples + a trap/comparison)?
- [ ] 3–5 in-context calculator links with natural anchors?
- [ ] All three schemas present?
- [ ] Registry entry added?
- [ ] Builds clean, committed, pushed to `main`, and verified 200 on production?

## Cadence

Default to **one guide per request** unless the user explicitly asks for more.
If asked for several at once, push back briefly and recommend doing them one at a
time to protect quality.
