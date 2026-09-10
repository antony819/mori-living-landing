# Prompts Used for AI Generation

## Hero Section Copy

```
Create a compelling hero section for a Hong Kong interior design landing page:

Brand: Mori Living - Japanese-inspired contemporary design
Target: Anxious first-time renovators aged 28-45
Pain points: Contractor scams, budget uncertainty, renovation stress
Solution: One dedicated designer, fixed pricing, 8-12 week timeline

Generate:
1. Headline (emotional benefit-focused)
2. Subheadline (brand positioning)
3. Primary CTA copy
4. Trust signals (3 key metrics)

Tone: Calm, reassuring, professional but warm
Style: Minimalist, not salesy
```

**Result:**
- Headline: "Your stress-free renovation starts here"
- Subhead: "Japanese-inspired design for compact Hong Kong homes. One dedicated designer, from concept to completion."
- Trust signals: 100+ Projects, 8-12 Weeks, HK$400K-1.2M

---

## Testimonial Generation

```
Generate 3 authentic-sounding testimonials for Mori Living:

Context:
- Hong Kong homeowners who completed renovations
- Budget range: HK$400K-1.2M
- Flat sizes: 400-700 sq ft
- Common fears: scams, hidden costs, timeline delays

Include for each:
- Name (Hong Kong-appropriate)
- Location (real HK districts: Sai Ying Pun, Taikoo, Quarry Bay)
- Flat size
- Budget spent
- Specific pain point addressed
- Outcome achieved

Tone: Relieved, grateful, specific (not generic)
```

**Result:** See `Testimonials.tsx`

---

## Process Timeline

```
Visualize Mori Living's 8-12 week renovation process as a trust-building element:

Requirements:
- 5 clear steps from consultation to handover
- Include durations for each step
- Focus on transparency and expectation management
- Address anxiety points (what happens when)

Steps should cover:
1. Initial consultation (free)
2. Design proposal (quotation)
3. Contract signing
4. Construction phase
5. Final handover

Tone: Clear, reassuring, no jargon
```

**Result:** See `Process.tsx`

---

## Services Section

```
Explain Mori Living's full-service interior design in benefit-focused language:

Services:
1. Design (concept to completion)
2. Renovation (construction management)
3. Space optimization (compact Hong Kong homes)

For each service:
- Title (clear, descriptive)
- Benefit (not feature)
- Icon (emoji, simple)

Target: First-time renovators who don't understand what "full-service" means
Tone: Educational but not condescending
```

**Result:** See `Services.tsx`

---

## Contact Form Copy

```
Design a conversion-optimized consultation booking form:

Goals:
- Reduce friction (optional fields)
- Gather minimum viable info for consultation
- Provide escape hatch (WhatsApp alternative)

Required fields:
- Name
- Phone/WhatsApp
- Flat size (helps qualify project scope)
- Start date (urgency indicator)

Optional fields:
- Budget range
- Message

CTA: "Book Free Consultation"
Safety: "No obligation. Just honest advice about your renovation."
```

**Result:** See `ContactForm.tsx`

---

## Portfolio Project Descriptions

```
Generate 4 realistic Hong Kong renovation projects:

Format for each:
- Location (real HK districts)
- Flat size (realistic for HK: 400-700 sq ft)
- Budget (within HK$400K-1.2M range)
- Brief description (design approach, key features)

Projects should showcase:
- Variety of budgets
- Different flat sizes
- Various design solutions (storage, space division, materials)
- Japanese aesthetic consistency

Tone: Specific, factual, not flowery
```

**Result:** See `Portfolio.tsx`

---

## Conversion Copy Framework

```
Primary CTA variations tested:
1. "Book Free Consultation" (chosen - clear action + no risk)
2. "Start Your Renovation" (too committing)
3. "Get Free Quote" (transactional)
4. "Let's Talk" (too casual)

Rationale: "Book Free Consultation" explicitly states:
- Action (book = schedule)
- Benefit (free = no commitment)
- What you get (consultation = advice)
```

---

## Design System Prompts

```
Create a Japanese-inspired color palette for Hong Kong interior design brand:

Requirements:
- Calm, natural, non-corporate
- Works on mobile (readability)
- Accessible (WCAG AA)
- Not sterile (some warmth)

Inspiration: Muji, Japanese tea rooms, natural wood, stone gardens

Result:
- Primary: #FAFAFA (soft white, not harsh)
- Accent: #A8B89E (sage green, calming)
- Text: #2D2D2D (charcoal, readable)
- Secondary: #D4A574 (warm wood, natural)
```

---

## Mobile-First Layout Decisions

```
Priority for 375px width (iPhone SE):

1. Hero CTA above fold (primary goal)
2. Trust signals visible (100+ projects)
3. WhatsApp quick action (HK standard)
4. Touch-friendly buttons (44x44px min)
5. Readable text (16px min, no zoom)
6. Single column layout (no side-scroll)
7. Simplified nav (sticky CTA only)

Test on:
- iPhone SE (375px)
- iPhone 12/13 (390px)
- Pixel (393px)
```

---

## Notes

All prompts were refined iteratively based on:
1. Hong Kong market context (WhatsApp, pricing transparency)
2. Target audience psychographics (anxiety, first-time buyers)
3. Conversion optimization (reduce friction, build trust)
4. Brand consistency (Japanese minimalism)

Time spent on copy generation: ~20 mins
Time saved vs manual writing: ~40 mins
