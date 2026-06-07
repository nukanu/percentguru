# CLAUDE.md — PercentGuru (v4 FINAL)

Read this before making any changes.

---

## CORE RULE

Do not redesign or reinvent anything.  
Follow existing patterns exactly.

All changes must support:
- SEO growth
- Long-term monetization potential
- Minimal complexity

---

## PRIMARY GOAL

This is a search-driven website designed to:
1. Rank on Google
2. Provide real user value

Every change must move the site toward:
"content + tool" (NOT tool-only)

---

## PRIORITY RULES

Always prioritize work in this order:

1. Improve content quality on existing pages
2. Add missing trust pages (About, Contact, Privacy, Terms)
3. Improve internal linking
4. Add new high-value calculators

Do NOT add new calculators if existing pages are low-quality.

---

## EXECUTION RULES

- Keep responses short
- Do not over-explain
- Do not suggest unnecessary improvements
- Do not introduce new patterns unless required
- Prefer reuse over creation
- Avoid large refactors unless explicitly requested

Goal:
Minimize token usage and reduce errors

---

## BEFORE WRITING CODE

1. Find an existing calculator page
2. Copy its structure exactly
3. Reuse components and patterns
4. Do not introduce new patterns unless necessary

---

## CALCULATOR REQUIREMENTS

Every calculator page must include:

- working calculator logic
- intro text (clear, specific, real-world use cases)
- "How to calculate" section (step-by-step + formula)
- 2–3 worked examples
- "When to use" section
- "Advanced scenarios"
- FAQ (non-obvious questions)
- internal links
- meta description

IMPORTANT:
Each page must provide value even without the calculator.

---

## PAGE COMPLETENESS

A page is DONE only if all sections exist:

- intro
- how to calculate
- examples
- use cases
- FAQ

If any section is missing → NOT complete

---

## CONTENT RULES

- Avoid generic phrases
- No filler content
- Must be practical and useful
- Avoid repetition across pages
- Each page must feel unique
- Write in clear, human, practical language
- Avoid robotic or templated phrasing

---

## GUIDES / ARTICLES

Before writing ANY guide or article (the `/guides/` section), you MUST read and
follow `docs/guide-writing-standards.md`. Guides must never be thin or
near-duplicate — that is what got the site rejected by AdSense. The criteria in
that file apply automatically; the user does not need to restate them.

---

## SEARCH INTENT

Every page must solve a real user problem.

Assume user is searching:
- a specific task
- a real scenario

Content must directly solve it.

---

## INTERNAL LINKING

Each page must:
- link to 3–5 relevant pages
- use natural anchor text
- avoid repeating same links everywhere
- place links naturally inside content (not only in lists)

---

## SEO RULES

- Unique title + meta description
- Avoid keyword cannibalization

---

## SIMPLICITY RULE

- Do not add new features unless asked
- Do not overengineer
- Improve existing > create new

---

## CHANGE SCOPE

- Modify only necessary files
- Do not touch unrelated code
- Minimize risk

---

## QA CHECK

Before finishing:

- No broken UI
- Calculator works
- No default 0
- All sections present
- No placeholder text
- No duplicate content
- Internal links present

Fix issues before finishing.

---

## 🔴 COMPLETION RULE (CRITICAL)

A task is NOT complete unless ALL conditions are met:

1. Changes are committed to git  
2. Changes are pushed to the correct branch (`main`)  
3. Vercel production deployment is triggered  
4. Changes are visible on production  

If any condition fails → task is NOT complete

---

## 🔴 STRICT DEPLOYMENT RULES

- Always push to `main`
- Localhost ≠ done
- Build success ≠ done
- Do not assume push worked — verify it
- Do not assume deployment worked — verify it

---

## 🔴 DEPLOYMENT WORKFLOW (MANDATORY)

After making changes:

### 1. Commit
git add .
git commit -m "<msg>"

### 2. Push
git push origin main

### 3. Verify Git
- Correct branch (`main`)
- `git status` is clean
- Commit exists in history

### 4. Verify Deployment
- https://percentguru.com/ loads
- Changes are visible on production

If any step fails → STOP and say task is not complete

---

## 🔴 REQUIRED OUTPUT (PROOF)

Before declaring task complete, ALWAYS output:

Branch:
<current branch>

Git status:
<output>

Last commit:
<git log -1 --oneline>

Push result:
<confirmation>

Production URL:
https://percentguru.com/

Verification:
<what exactly is visible on production>

If you cannot provide this →  
"Task is not complete — deployment not verified."

---

## OUTPUT

- Keep responses short
- List changes briefly
- INCLUDE deployment proof (mandatory)
