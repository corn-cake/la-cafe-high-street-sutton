# Landing Page Generator

Create a modern, conversion-focused landing page for the company described below. Use Next.js with Tailwind CSS. Server components by default, client components only when needed for interactivity.

---

## Company Information

**Company Name:** {{COMPANY_NAME}}

**One-liner:** {{ONE_LINER}}
<!-- What does the company do in one sentence? -->

**Target Audience:** {{TARGET_AUDIENCE}}
<!-- Who is this for? Be specific. -->

**Main Problem Solved:** {{PROBLEM}}
<!-- What pain point does this address? -->

**Key Features/Benefits:**
<!-- List 3-5 main selling points -->
- {{FEATURE_1}}
- {{FEATURE_2}}
- {{FEATURE_3}}

**Call to Action:** {{CTA_TEXT}}
<!-- e.g., "Start Free Trial", "Book a Demo", "Get Started" -->

**CTA Link:** {{CTA_LINK}}

---

## Optional Details

**Pricing:** {{PRICING}}
<!-- Leave empty if not applicable -->

**Social Proof:**
<!-- Testimonials, client logos, stats like "10,000+ users" -->
{{SOCIAL_PROOF}}

**FAQ:**
<!-- Common questions and answers -->
{{FAQ}}

---

## Raw Context Dump

Paste any unstructured information about the company here. This can include:
- Website copy, pitch decks, investor materials
- Product descriptions, feature lists
- Customer testimonials, reviews
- Competitor comparisons
- Brand guidelines, tone of voice
- Any other relevant context

```
{{RAW_CONTEXT}}
```

---

## Instructions for Claude

1. If structured fields above are filled, use them directly
2. If only raw context is provided, extract the relevant information
3. If both are provided, structured fields take priority but raw context adds depth

**Generate these sections:**
- Hero with headline, subheadline, and primary CTA
- Problem/pain points section
- Features/benefits (use icons or cards)
- Social proof (if provided)
- FAQ accordion (if provided)
- Final CTA section
- Simple footer

**Design preferences:**
- Clean, minimal aesthetic
- Good whitespace
- Mobile-first responsive
- Accessible (semantic HTML, good contrast)
- Dark mode support

**Do not:**
- Over-engineer or add unnecessary abstractions
- Create separate component files unless truly reusable
- Add placeholder content - use only what's provided
