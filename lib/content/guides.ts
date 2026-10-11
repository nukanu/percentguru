// Registry of long-form guide articles (content, not calculators). Drives the
// /guides/ index and the sitemap. Add a new entry when a guide page ships.

export type GuideMeta = {
  slug: string
  title: string
  description: string
  // Short label shown on the index card.
  category: string
  // ISO date for display + Article schema.
  published: string
  updated: string
}

export const guides: GuideMeta[] = [
  {
    slug: "how-to-price-handmade-items",
    title: "How to Price Handmade Items: From Materials and Time to a Price",
    description:
      "One tote bag priced step by step: materials, timed labour, overheads, profit and selling fees. Plus why three popular formulas give $31, $45 and $112 for the same bag, and what to do when the price looks too high.",
    category: "Selling",
    published: "2026-10-12",
    updated: "2026-10-12",
  },
  {
    slug: "ebay-vs-etsy-vs-own-website",
    title: "eBay, Etsy or Your Own Website: Where Should You Sell?",
    description:
      "The same $46 order on eBay, Etsy and your own site: what each one keeps, the Etsy ad fee that changes the answer, what a website really costs once you pay for traffic, and how to choose.",
    category: "Selling",
    published: "2026-10-12",
    updated: "2026-10-12",
  },
  {
    slug: "how-to-calculate-break-even-point",
    title: "How to Calculate Your Break-Even Point (with a Worked Example)",
    description:
      "A coffee cart's numbers from first cup to profit: sorting fixed and variable costs, break-even in units and dollars, a daily sales target, what shifts it most, and three ways the figure flatters you.",
    category: "Business",
    published: "2026-10-12",
    updated: "2026-10-12",
  },
  {
    slug: "how-to-raise-your-prices",
    title: "How to Raise Your Prices (and What to Tell Customers)",
    description:
      "When a price rise is overdue, how to choose the new number, how many customers you can afford to lose, who needs notice, and wording you can copy for shops, regulars and complaints.",
    category: "Business",
    published: "2026-10-12",
    updated: "2026-10-12",
  },
  {
    slug: "how-to-calculate-profit-margin",
    title: "How to Calculate Profit Margin: Gross, Operating and Net",
    description:
      "Follow one small shop's month from sales to what is left: gross, operating and net margin worked step by step, the two mistakes that inflate the figure, and which lever improves it most.",
    category: "Business",
    published: "2026-10-12",
    updated: "2026-10-12",
  },
  {
    slug: "how-to-calculate-markup",
    title: "How to Calculate Markup: From Real Cost to a Price You Can Charge",
    description:
      "Work out your true cost per unit, turn a markup percentage into a selling price, and find the markup in a price you already charge — with a worked batch example and the mistakes that quietly shrink it.",
    category: "Business",
    published: "2026-10-12",
    updated: "2026-10-12",
  },
  {
    slug: "how-to-calculate-your-grade",
    title: "How to Calculate Your Grade: Test Scores, Weighted Grades, and Finals",
    description:
      "Turn any test score into a percentage and letter grade, combine weighted coursework and exams, and work out exactly what you need on the final — with worked examples and a grade-band table.",
    category: "Study",
    published: "2026-07-26",
    updated: "2026-07-26",
  },
  {
    slug: "how-to-calculate-a-discount",
    title: "How to Calculate a Discount (Percent Off, Reversed, and Stacked)",
    description:
      "Work out any sale price in one step, reverse a discount to find the original, and see why 30% off then 20% off is not 50% off — with worked examples and a quick-reference table.",
    category: "Shopping",
    published: "2026-07-26",
    updated: "2026-07-26",
  },
  {
    slug: "salary-to-hourly",
    title: "Salary to Hourly: How to Work Out Your Real Hourly Rate",
    description:
      "Convert an annual salary to an hourly rate, then adjust for unpaid overtime, holiday, and commuting to find what you actually earn per hour — with worked examples.",
    category: "Money",
    published: "2026-06-07",
    updated: "2026-06-07",
  },
  {
    slug: "percentage-increase-and-decrease",
    title: "Percentage Increase and Decrease, Explained with Examples",
    description:
      "How to calculate a percentage increase or decrease, why successive changes don't add up, and how to reverse one to find the original — with shopping, salary, and stat examples.",
    category: "Maths",
    published: "2026-06-07",
    updated: "2026-06-07",
  },
  {
    slug: "how-to-calculate-a-pay-raise",
    title: "How to Calculate a Pay Raise (and What Counts as a Good One)",
    description:
      "Work out the percentage of any pay rise, convert it to real take-home money, and judge it against inflation — with worked examples for hourly, monthly, and annual pay.",
    category: "Money",
    published: "2026-06-07",
    updated: "2026-06-07",
  },
  {
    slug: "markup-vs-margin",
    title: "Markup vs. Margin: The Difference Every Business Owner Should Know",
    description:
      "Markup and margin use the same two numbers but divide by different things — and confusing them quietly erodes profit. Here's the distinction, the formulas, a conversion table, and worked examples.",
    category: "Business",
    published: "2026-06-07",
    updated: "2026-06-07",
  },
  {
    slug: "how-to-calculate-percentages",
    title: "How to Calculate Percentages: The Complete Guide",
    description:
      "The three percentage problems that cover almost everything — finding a percent of a number, working out one number as a percent of another, and percentage change — explained with plain-English methods and worked examples.",
    category: "Maths",
    published: "2026-06-07",
    updated: "2026-06-07",
  },
  {
    slug: "how-to-work-out-vat",
    title: "How to Work Out VAT: A Plain-English UK Guide",
    description:
      "Add VAT, remove VAT, and avoid the most common mistake — with the exact formulas, the UK 20%/5%/0% rates, and worked examples for every step.",
    category: "Tax",
    published: "2026-06-07",
    updated: "2026-06-07",
  },
]
