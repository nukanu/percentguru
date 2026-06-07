// Unique, hand-written content for the curated answer pages that stay indexed.
// Each entry must read distinctly — same section structure is fine, duplicate
// prose is not. The route renders these sections on top of the live calculation.
// The keys here ARE the indexable allowlist (see CURATED_ANSWER_SLUGS below).

export type CuratedAnswer = {
  intro: string
  examples: { title: string; body: string }[]
  useCase: string
  faqs: { question: string; answer: string }[]
}

export const CURATED_ANSWERS: Record<string, CuratedAnswer> = {
  "what-is-3-percent-of-400": {
    intro:
      "Three percent of 400 is 12. A 3% rate looks tiny, but on a base of 400 it still works out to a meaningful 12 — which is why it turns up in everyday money math like low-rate sales tax, cashback offers, payment-processing fees, and modest annual raises.",
    examples: [
      {
        title: "A 3% payment-processing fee",
        body: "A freelancer invoices a client $400 and the payment platform keeps 3%. The fee is 400 × 0.03 = $12, so $388 actually lands in the account.",
      },
      {
        title: "3% cashback on a $400 purchase",
        body: "Buy a $400 appliance on a card paying 3% cashback and you earn back 400 × 0.03 = $12 in rewards.",
      },
    ],
    useCase:
      "Reach for this whenever a small rate hits a few-hundred-dollar amount: interest on a $400 balance, a 3% restocking fee, or a 3% pay rise on $400 weekly pay. Convert 3% to 0.03 and multiply — the method never changes.",
    faqs: [
      {
        question: "Is 3% of 400 the same as 400% of 3?",
        answer: "Yes. 3% of 400 and 400% of 3 both equal 12, because 0.03 × 400 = 4 × 3. Percentages are commutative this way.",
      },
      {
        question: "How do I add 3% to 400 instead of finding the part?",
        answer: "Multiply by 1.03: 400 × 1.03 = 412. That is the total after a 3% increase, versus 12 for the increase amount on its own.",
      },
    ],
  },

  "what-is-25-percent-of-25": {
    intro:
      "Twenty-five percent of 25 is 6.25. Twenty-five percent is just one quarter, so this is the same as splitting 25 into four equal parts — each part is 6.25. The fact that the percentage and the number match (25 and 25) is a coincidence; the answer is still a clean quarter.",
    examples: [
      {
        title: "A quarter off a $25 item",
        body: "A $25 T-shirt is marked 25% off. The discount is 25 × 0.25 = $6.25, so you pay $25 − $6.25 = $18.75.",
      },
      {
        title: "Splitting a tip four ways",
        body: "A $25 tip shared equally between four servers gives each 25% of 25 = $6.25.",
      },
    ],
    useCase:
      "Use it any time you need a quarter of 25 — a 25%-off coupon on a $25 order, one of four equal shares, or a deposit set at 25% of a $25 booking fee. Dividing by 4 gives the same answer as multiplying by 0.25.",
    faqs: [
      {
        question: "Why is 25% of 25 not a whole number?",
        answer: "Because 25 does not divide evenly into 4. A quarter of 25 is 6.25 — six and a quarter — even though both figures are 25.",
      },
      {
        question: "Is 25% of 25 the same as dividing 25 by 4?",
        answer: "Yes. 25% means one quarter, so 25 ÷ 4 = 6.25 gives the identical result.",
      },
    ],
  },

  "what-is-33-percent-of-50": {
    intro:
      "Thirty-three percent of 50 is 16.5. People often reach for 33% as a stand-in for \"a third,\" but a true third of 50 is 16.67, so 33% is very slightly less — 16.5. The gap matters when you are checking a test score, a discount, or a split that needs to be exact.",
    examples: [
      {
        title: "Scoring 33% on a 50-mark test",
        body: "A student who earns 33% on a paper marked out of 50 gets 50 × 0.33 = 16.5 marks — usually rounded to 16 or 17 depending on the marking scheme.",
      },
      {
        title: "A 33% deposit on a $50 booking",
        body: "A venue asks for 33% upfront on a $50 booking: 50 × 0.33 = $16.50 now, with $33.50 due later.",
      },
    ],
    useCase:
      "This comes up with one-third splits, exam results out of 50, and \"33% off\" sale tags. If you actually mean a precise third, use 33.33% (16.67) rather than a flat 33%.",
    faqs: [
      {
        question: "Is 33% of 50 the same as a third of 50?",
        answer: "Almost. A third of 50 is 16.67, while 33% of 50 is 16.5. They differ by about 0.17 because 33% is slightly under one-third.",
      },
      {
        question: "What is 33.33% of 50?",
        answer: "16.665, which rounds to 16.67 — the exact one-third value, slightly more than the 16.5 you get from a flat 33%.",
      },
    ],
  },

  "what-is-3-percent-of-250": {
    intro:
      "Three percent of 250 is 7.5. This is a common figure for a 3% savings-account interest payment, a 3% agency fee, or a 3% pay rise on a $250 weekly wage — small per cycle, but it compounds over a year.",
    examples: [
      {
        title: "3% annual interest on $250 saved",
        body: "Leave $250 in an account paying 3% a year and you earn 250 × 0.03 = $7.50 in interest over twelve months.",
      },
      {
        title: "A 3% booking fee on $250 tickets",
        body: "Concert tickets cost $250 and the site adds a 3% service fee: 250 × 0.03 = $7.50, making the total $257.50.",
      },
    ],
    useCase:
      "Use it for low-rate interest, service charges, and small commissions on a mid-sized amount. To find the new total after the fee, multiply by 1.03 instead: 250 × 1.03 = 257.50.",
    faqs: [
      {
        question: "How much is 3% of $250 per month if 3% is annual?",
        answer: "Divide the yearly figure by 12: $7.50 ÷ 12 ≈ $0.63 per month, ignoring compounding.",
      },
      {
        question: "What is 6% of 250 for comparison?",
        answer: "15 — exactly double 3% of 250, since doubling the rate doubles the result.",
      },
    ],
  },

  "what-is-15-percent-of-350": {
    intro:
      "Fifteen percent of 350 is 52.5. Fifteen percent is the classic restaurant-tip rate in the US, so this is what you would add on a $350 group dinner — and it is also a handy commission or sales-tax figure on a $350 sale.",
    examples: [
      {
        title: "A 15% tip on a $350 bill",
        body: "A large dinner comes to $350. A 15% tip is 350 × 0.15 = $52.50, bringing the total to $402.50.",
      },
      {
        title: "15% commission on a $350 sale",
        body: "A salesperson earning 15% on a $350 order takes home 350 × 0.15 = $52.50 in commission.",
      },
    ],
    useCase:
      "Lean on this for tipping, commissions, and 15%-off promotions on a few-hundred-dollar amount. A quick mental check: 10% of 350 is 35 and 5% is 17.5, and 35 + 17.5 = 52.5.",
    faqs: [
      {
        question: "What is the total bill with a 15% tip on $350?",
        answer: "$402.50. Multiply by 1.15: 350 × 1.15 = 402.50, which is the meal plus the $52.50 tip.",
      },
      {
        question: "How do I work out 15% of 350 in my head?",
        answer: "Take 10% (35) and add half of that for the extra 5% (17.5): 35 + 17.5 = 52.5.",
      },
    ],
  },

  "what-is-1-percent-of-50": {
    intro:
      "One percent of 50 is 0.5. One percent simply means \"one out of every hundred,\" so 1% of 50 is half a unit. It is the building block for fast mental percentages: once you know 1% of a number, you can scale it to any other percentage.",
    examples: [
      {
        title: "Using 1% as a stepping stone",
        body: "Need 7% of 50? Find 1% first (0.5), then multiply by 7: 0.5 × 7 = 3.5. The 1% value makes any percentage of 50 easy.",
      },
      {
        title: "A 1% fee on a $50 transfer",
        body: "A money transfer of $50 with a 1% fee costs 50 × 0.01 = $0.50 in charges.",
      },
    ],
    useCase:
      "1% values are most useful as a shortcut: compute 1% once, then multiply up. They also appear in low fees, daily-interest figures, and fine-grained adjustments on small amounts.",
    faqs: [
      {
        question: "How do I find 1% of any number quickly?",
        answer: "Move the decimal point two places left. For 50 that gives 0.50, so 1% of 50 is 0.5.",
      },
      {
        question: "What is 10% of 50 compared with 1%?",
        answer: "10% of 50 is 5 — ten times the 1% value of 0.5, because 10% is ten times 1%.",
      },
    ],
  },

  "what-is-1-percent-of-20": {
    intro:
      "One percent of 20 is 0.2. Because 1% is one hundredth, this is just 20 split into a hundred equal pieces — each piece is 0.2. Knowing 1% of 20 lets you build up to any other percentage of 20 in seconds.",
    examples: [
      {
        title: "Scaling from 1% to 25%",
        body: "1% of 20 is 0.2, so 25% of 20 is 0.2 × 25 = 5. Starting from the 1% value avoids fiddly decimals.",
      },
      {
        title: "A 1% rounding adjustment on $20",
        body: "Trimming a $20 price by 1% removes 20 × 0.01 = $0.20, leaving $19.80.",
      },
    ],
    useCase:
      "Use the 1%-of-20 value as a quick multiplier for any percentage of 20, or for tiny fees and price tweaks on a $20 amount.",
    faqs: [
      {
        question: "Is 1% of 20 the same as 20% of 1?",
        answer: "Yes — both equal 0.2, because 0.01 × 20 and 0.2 × 1 give the same product.",
      },
      {
        question: "What is 5% of 20?",
        answer: "1. That is five times 1% of 20 (0.2 × 5 = 1).",
      },
    ],
  },

  "what-is-33-percent-of-70": {
    intro:
      "Thirty-three percent of 70 is 23.1. Like most \"33%\" calculations, this is used as an approximate third — a true third of 70 is 23.33, so the flat 33% lands just below at 23.1.",
    examples: [
      {
        title: "33% off a $70 jacket",
        body: "A $70 jacket marked 33% off saves you 70 × 0.33 = $23.10, dropping the price to $46.90.",
      },
      {
        title: "A roughly one-third share of 70",
        body: "Splitting 70 hours of work so one person covers about a third means 33% of 70 = 23.1 hours for that person.",
      },
    ],
    useCase:
      "Handy for one-third estimates, 33%-off sale tags, and rough splits of 70. For an exact third, use 33.33% (23.33) rather than 33%.",
    faqs: [
      {
        question: "What is a true third of 70?",
        answer: "23.33 (70 ÷ 3). A flat 33% gives 23.1, which is about 0.23 less than an exact third.",
      },
      {
        question: "What is 66% of 70?",
        answer: "46.2 — double 33% of 70, since 66% is twice 33%.",
      },
    ],
  },

  "what-is-4-percent-of-15": {
    intro:
      "Four percent of 15 is 0.6. A 4% rate on a small base like 15 stays under a single unit, which is typical of low sales-tax rates, small fees, and minor interest amounts.",
    examples: [
      {
        title: "4% sales tax on a $15 purchase",
        body: "A $15 item in a region with 4% sales tax adds 15 × 0.04 = $0.60, for a total of $15.60.",
      },
      {
        title: "A 4% tip rounded up",
        body: "A 4% surcharge on a $15 bill is 15 × 0.04 = $0.60, so the bill becomes $15.60.",
      },
    ],
    useCase:
      "Use it for low tax rates, small service fees, and minor adjustments on a $15 amount. Multiply by 1.04 (= 15.60) when you want the total including the 4%.",
    faqs: [
      {
        question: "What is 4% of $15 in cents?",
        answer: "60 cents exactly — 15 × 0.04 = 0.60.",
      },
      {
        question: "How does 4% of 15 compare with 8% of 15?",
        answer: "8% of 15 is 1.2, exactly twice the 0.6 you get from 4%.",
      },
    ],
  },

  "what-is-75-percent-of-45": {
    intro:
      "Seventy-five percent of 45 is 33.75. Seventy-five percent is three quarters, so this is 45 with one quarter removed — useful for big sale discounts, progress bars, and \"three-quarters done\" estimates.",
    examples: [
      {
        title: "75% off a $45 item in a clearance sale",
        body: "A $45 item at 75% off has a discount of 45 × 0.75 = $33.75, so you pay just $11.25.",
      },
      {
        title: "Three quarters of a 45-minute task",
        body: "If you are 75% through a 45-minute job, you have done 45 × 0.75 = 33.75 minutes — about 33 minutes and 45 seconds.",
      },
    ],
    useCase:
      "Use it for three-quarter shares, deep discounts, and progress tracking. Because 75% is 3 ÷ 4, you can also compute it as 45 ÷ 4 × 3 = 33.75.",
    faqs: [
      {
        question: "What is left after taking 75% of 45?",
        answer: "11.25 — the remaining quarter (25%) of 45.",
      },
      {
        question: "Is 75% of 45 the same as 45 minus 25% of 45?",
        answer: "Yes. 25% of 45 is 11.25, and 45 − 11.25 = 33.75, matching 75% of 45.",
      },
    ],
  },

  "what-is-80-percent-of-70": {
    intro:
      "Eighty percent of 70 is 56. Eighty percent is a common threshold — pass marks, attendance minimums, and \"four-fifths\" shares — so this figure shows up in grading and target-tracking as often as in discounts.",
    examples: [
      {
        title: "Scoring 80% on a 70-point test",
        body: "A student who scores 80% on a 70-point exam earns 70 × 0.80 = 56 points.",
      },
      {
        title: "Hitting 80% of a 70-unit target",
        body: "A team aiming for 70 sales that reaches 80% of target has made 70 × 0.80 = 56 sales.",
      },
    ],
    useCase:
      "Use it for pass thresholds, attendance and completion rates, four-fifths shares, and 80%-off sales. Since 80% is 4 ÷ 5, you can also do 70 ÷ 5 × 4 = 56.",
    faqs: [
      {
        question: "How many points short of 70 is 80%?",
        answer: "14. 80% of 70 is 56, leaving 70 − 56 = 14 (the remaining 20%).",
      },
      {
        question: "Is 80% of 70 the same as 70% of 80?",
        answer: "Yes — both equal 56, because 0.8 × 70 = 0.7 × 80.",
      },
    ],
  },

  "what-is-60-percent-of-350": {
    intro:
      "Sixty percent of 350 is 210. Sixty percent represents the larger share of a split, so this is what you get when a majority portion — of a budget, a goal, or a discount — is applied to 350.",
    examples: [
      {
        title: "A 60%/40% budget split of $350",
        body: "Splitting a $350 budget 60/40 puts 350 × 0.60 = $210 in the larger pot and $140 in the smaller.",
      },
      {
        title: "60% progress toward a 350-unit goal",
        body: "A fundraiser targeting $350 that is 60% funded has raised 350 × 0.60 = $210 so far.",
      },
    ],
    useCase:
      "Use it for majority shares, progress toward a 350 target, and 60%-off sales. A mental shortcut: 6 × 35 = 210, since 60% of 350 is 6 tens of 35.",
    faqs: [
      {
        question: "What is the other 40% of 350?",
        answer: "140. The two parts add back to the whole: 210 + 140 = 350.",
      },
      {
        question: "What is 60% of 350 as a fraction?",
        answer: "Three fifths. 60% = 3 ÷ 5, and 350 ÷ 5 × 3 = 210.",
      },
    ],
  },

  "what-is-3-percent-of-150": {
    intro:
      "Three percent of 150 is 4.5. A 3% rate on 150 is the kind of figure you meet with low-rate fees, small commissions, and 3% annual raises — modest on its own but worth tracking when it repeats.",
    examples: [
      {
        title: "A 3% surcharge on a $150 bill",
        body: "A $150 invoice with a 3% late fee adds 150 × 0.03 = $4.50, making the balance $154.50.",
      },
      {
        title: "3% interest on $150 owed",
        body: "Carrying a $150 balance at 3% costs 150 × 0.03 = $4.50 in interest for the period.",
      },
    ],
    useCase:
      "Use it for small fees, low interest, and minor commissions on a $150 amount. To get the total after the charge, multiply by 1.03: 150 × 1.03 = 154.50.",
    faqs: [
      {
        question: "What is 3% of 150 doubled?",
        answer: "9 — which is 6% of 150, since doubling the rate doubles the result.",
      },
      {
        question: "Is 3% of 150 the same as 1.5% of 300?",
        answer: "Yes, both equal 4.5: halving the rate and doubling the base leaves the product unchanged.",
      },
    ],
  },

  "what-is-80-percent-of-35": {
    intro:
      "Eighty percent of 35 is 28. Because 80% is four fifths, this is 35 with one fifth taken away — a figure that appears in grading, completion rates, and four-fifths shares as much as in sales.",
    examples: [
      {
        title: "Scoring 80% on a 35-mark quiz",
        body: "A student earning 80% on a 35-mark quiz scores 35 × 0.80 = 28 marks.",
      },
      {
        title: "80% off a $35 item",
        body: "A clearance item at 80% off a $35 price saves 35 × 0.80 = $28, leaving $7 to pay.",
      },
    ],
    useCase:
      "Use it for pass marks, four-fifths portions, and steep discounts on a $35 amount. As 80% is 4 ÷ 5, you can also compute 35 ÷ 5 × 4 = 28.",
    faqs: [
      {
        question: "What is the remaining 20% of 35?",
        answer: "7. The parts add back to the whole: 28 + 7 = 35.",
      },
      {
        question: "Is 80% of 35 the same as 35% of 80?",
        answer: "Yes — both come to 28, because 0.8 × 35 = 0.35 × 80.",
      },
    ],
  },

  "what-is-75-percent-of-35": {
    intro:
      "Seventy-five percent of 35 is 26.25. Seventy-five percent is three quarters, so this is 35 with a single quarter removed — the value behind \"three-quarters done\" estimates and 75%-off clearance tags.",
    examples: [
      {
        title: "75% off a $35 item",
        body: "A $35 item at 75% off has a discount of 35 × 0.75 = $26.25, so you pay $8.75.",
      },
      {
        title: "Three quarters of a 35-hour week",
        body: "A part-timer working 75% of a 35-hour week puts in 35 × 0.75 = 26.25 hours.",
      },
    ],
    useCase:
      "Use it for three-quarter shares, deep discounts, and part-time hours based on 35. Since 75% is 3 ÷ 4, you can also do 35 ÷ 4 × 3 = 26.25.",
    faqs: [
      {
        question: "What is left after 75% of 35?",
        answer: "8.75 — the remaining quarter of 35.",
      },
      {
        question: "How do I get 75% of 35 from 25%?",
        answer: "25% of 35 is 8.75; multiply by three for 75%: 8.75 × 3 = 26.25.",
      },
    ],
  },

  "what-is-4-percent-of-45": {
    intro:
      "Four percent of 45 is 1.8. A 4% rate on 45 stays under two units, the kind of small figure you see with low sales taxes, modest fees, and minor interest on a $45 amount.",
    examples: [
      {
        title: "4% sales tax on a $45 purchase",
        body: "A $45 item taxed at 4% adds 45 × 0.04 = $1.80, for a total of $46.80.",
      },
      {
        title: "A 4% card fee on $45",
        body: "Paying a $45 bill on a card with a 4% surcharge costs an extra 45 × 0.04 = $1.80.",
      },
    ],
    useCase:
      "Use it for low tax rates, small surcharges, and minor interest on a $45 amount. Multiply by 1.04 (= 46.80) when you want the total including the 4%.",
    faqs: [
      {
        question: "What is 4% of 45 rounded to cents?",
        answer: "$1.80 exactly — no rounding needed, since 45 × 0.04 = 1.8.",
      },
      {
        question: "What is 8% of 45?",
        answer: "3.6 — double 4% of 45, because the rate has doubled.",
      },
    ],
  },

  "what-is-75-percent-of-15": {
    intro:
      "Seventy-five percent of 15 is 11.25. Seventy-five percent is three quarters, so this is 15 with one quarter removed — useful for partial portions, progress estimates, and 75%-off deals on a small amount.",
    examples: [
      {
        title: "75% off a $15 item",
        body: "A $15 item at 75% off saves 15 × 0.75 = $11.25, leaving just $3.75 to pay.",
      },
      {
        title: "Three quarters of a 15-minute timer",
        body: "At 75% through a 15-minute timer, 15 × 0.75 = 11.25 minutes have passed — 11 minutes 15 seconds.",
      },
    ],
    useCase:
      "Use it for three-quarter shares, short-task progress, and steep discounts on a $15 amount. Because 75% is 3 ÷ 4, you can also do 15 ÷ 4 × 3 = 11.25.",
    faqs: [
      {
        question: "What is the remaining quarter of 15?",
        answer: "3.75 — the 25% left after taking 75% (11.25) from 15.",
      },
      {
        question: "Is 75% of 15 the same as 15% of 75?",
        answer: "Yes — both equal 11.25, since 0.75 × 15 = 0.15 × 75.",
      },
    ],
  },

  "what-is-3-percent-of-750": {
    intro:
      "Three percent of 750 is 22.5. On a larger base like 750, even a low 3% rate produces a noticeable 22.5 — which is why it matters for interest, fees, and raises calculated on bigger amounts.",
    examples: [
      {
        title: "3% interest on $750 saved",
        body: "A $750 balance earning 3% a year returns 750 × 0.03 = $22.50 in interest.",
      },
      {
        title: "A 3% agent fee on $750",
        body: "A booking worth $750 with a 3% agent fee costs 750 × 0.03 = $22.50 in commission.",
      },
    ],
    useCase:
      "Use it for interest, commissions, and service fees on a $750 amount. To find the total after a 3% charge, multiply by 1.03: 750 × 1.03 = 772.50.",
    faqs: [
      {
        question: "How much is 3% of 750 per month if it is an annual rate?",
        answer: "About $1.88 (22.50 ÷ 12), ignoring compounding.",
      },
      {
        question: "What is 3% of 750 compared with 3% of 250?",
        answer: "22.5 versus 7.5 — three times larger, because 750 is three times 250.",
      },
    ],
  },

  "what-is-15-percent-off-150": {
    intro:
      "Fifteen percent off 150 saves you 22.50, so the sale price is 127.50. A 15% discount is one of the most common promotional rates, and on a $150 item it knocks off a clean 22.50.",
    examples: [
      {
        title: "A 15%-off coupon on a $150 order",
        body: "Applying a 15%-off code to a $150 cart removes 150 × 0.15 = $22.50, bringing the total to $127.50.",
      },
      {
        title: "A seasonal 15% sale",
        body: "A $150 jacket in a 15%-off sale costs $127.50 — you save $22.50 versus the full price.",
      },
    ],
    useCase:
      "Use it for promo codes, seasonal sales, and member discounts on a $150 item. The fast way to the final price is to multiply by 0.85: 150 × 0.85 = 127.50.",
    faqs: [
      {
        question: "What is the final price after 15% off 150?",
        answer: "$127.50 — the original $150 minus the $22.50 discount.",
      },
      {
        question: "Why does multiplying by 0.85 give the sale price directly?",
        answer: "Taking 15% off leaves 85% of the price, and 0.85 × 150 = 127.50 skips the subtraction step.",
      },
    ],
  },

  "what-is-3-percent-of-350": {
    intro:
      "Three percent of 350 is 10.5. A 3% rate on 350 is the kind of figure that turns up in low-rate fees, small commissions, and 3% pay rises — modest each time but meaningful when it recurs.",
    examples: [
      {
        title: "A 3% processing fee on $350",
        body: "A $350 payment with a 3% processing fee costs 350 × 0.03 = $10.50 in charges.",
      },
      {
        title: "A 3% raise on $350 weekly pay",
        body: "A 3% raise on $350 a week adds 350 × 0.03 = $10.50, lifting weekly pay to $360.50.",
      },
    ],
    useCase:
      "Use it for small fees, low commissions, and modest raises on a $350 amount. To get the total after a 3% addition, multiply by 1.03: 350 × 1.03 = 360.50.",
    faqs: [
      {
        question: "What is 3% of 350 versus 30% of 350?",
        answer: "10.5 versus 105 — exactly ten times larger, since 30% is ten times 3%.",
      },
      {
        question: "Is 3% of 350 a whole number?",
        answer: "No — it is 10.5, halfway between 10 and 11.",
      },
    ],
  },

  "what-is-30-percent-of-175": {
    intro:
      "Thirty percent of 175 is 52.5. Thirty percent is a popular discount and tax-band figure, so this is what comes off a $175 item in a 30%-off sale or what a 30% share of 175 works out to.",
    examples: [
      {
        title: "30% off a $175 item",
        body: "A $175 item at 30% off saves 175 × 0.30 = $52.50, dropping the price to $122.50.",
      },
      {
        title: "A 30% deposit on $175",
        body: "A 30% deposit on a $175 booking is 175 × 0.30 = $52.50 now, with $122.50 to follow.",
      },
    ],
    useCase:
      "Use it for 30%-off sales, deposits, and tax or commission bands on a $175 amount. A quick check: 10% of 175 is 17.5, and three times that is 52.5.",
    faqs: [
      {
        question: "What is the price after 30% off 175?",
        answer: "$122.50 — multiply by 0.70 (175 × 0.70) to get there in one step.",
      },
      {
        question: "Is 30% of 175 the same as 175% of 30?",
        answer: "Yes, both equal 52.5, because 0.30 × 175 = 1.75 × 30.",
      },
    ],
  },

  "what-is-33-percent-of-35": {
    intro:
      "Thirty-three percent of 35 is 11.55. As with most 33% figures, this is used as a near-third — a true third of 35 is 11.67, so a flat 33% comes in slightly lower at 11.55.",
    examples: [
      {
        title: "33% off a $35 item",
        body: "A $35 item marked 33% off saves 35 × 0.33 = $11.55, leaving $23.45 to pay.",
      },
      {
        title: "A roughly one-third share of 35",
        body: "Dividing 35 tasks so one person handles about a third gives that person 33% of 35 = 11.55 — round to 12 in practice.",
      },
    ],
    useCase:
      "Handy for one-third estimates, 33%-off tags, and rough splits of 35. For an exact third, use 33.33% (11.67) instead of a flat 33%.",
    faqs: [
      {
        question: "What is a true third of 35?",
        answer: "11.67 (35 ÷ 3). A flat 33% gives 11.55, about 0.12 less.",
      },
      {
        question: "What is 66% of 35?",
        answer: "23.1 — double 33% of 35, since 66% is twice 33%.",
      },
    ],
  },

  "what-is-25-percent-of-40": {
    intro:
      "Twenty-five percent of 40 is 10. Twenty-five percent is one quarter, so this splits 40 cleanly into four parts of 10 — one of the tidiest percentage results, which is why it is a favourite worked example.",
    examples: [
      {
        title: "25% off a $40 item",
        body: "A $40 item at 25% off saves 40 × 0.25 = $10, so you pay $30.",
      },
      {
        title: "A quarter of a 40-hour week",
        body: "One quarter of a 40-hour work week is 40 × 0.25 = 10 hours.",
      },
    ],
    useCase:
      "Use it for quarter shares, 25%-off sales, and any four-way split of 40. Dividing by 4 (40 ÷ 4 = 10) gives the same answer as multiplying by 0.25.",
    faqs: [
      {
        question: "What is left after 25% of 40?",
        answer: "30 — the remaining three quarters of 40.",
      },
      {
        question: "Is 25% of 40 the same as 40% of 25?",
        answer: "Yes — both equal 10, because 0.25 × 40 = 0.40 × 25.",
      },
    ],
  },
}

// The keys of CURATED_ANSWERS are the only answer pages kept in Google's index.
export const CURATED_ANSWER_SLUGS = new Set<string>(Object.keys(CURATED_ANSWERS))
