# AI Workflow Documentation

## Project Context

This landing page was built for Mori Living, targeting Hong Kong homeowners through Meta ads with the goal of converting traffic into free design consultation bookings.

## AI Tools Used

1. **Claude (Cursor AI Agent)** - Primary development partner
2. **fal.ai** - AI image generation for placeholder visuals
3. **GitHub Copilot** - Code suggestions and completions

## Workflow Structure

### Phase 1: Research & Planning (15 mins)

**Context Provided to AI:**
- Brand: Japanese-inspired contemporary design
- Target: HK homeowners aged 28-45
- Goal: Convert Meta ad traffic to consultations
- Key metrics: HK$400K-1.2M projects, 100+ completed, 8-12 weeks
- Primary CTA: Book Free Consultation

**AI Assistance:**
- Analyzed Hong Kong interior design market
- Identified conversion optimization best practices
- Recommended mobile-first approach (HK mobile usage ~90%)
- Suggested WhatsApp integration (standard in HK)

### Phase 2: Design Direction (20 mins)

**Prompt to AI:**
```
Design a landing page for Mori Living following these principles:
- Japanese minimalism (muji-inspired)
- Trust-building for high-ticket service (HK$400K-1.2M)
- Mobile-first for Hong Kong market
- Clear conversion path to consultation booking
```

**AI Generated:**
- Component structure
- Color palette (neutral earth tones, accent green)
- Typography hierarchy
- Layout wireframes

### Phase 3: Implementation (90 mins)

**Tech Stack Decision:**
- Next.js 14 (modern, fast, SEO-friendly)
- Tailwind CSS (rapid styling, consistency)
- TypeScript (type safety, better AI suggestions)
- Framer Motion (smooth animations)

**Component Breakdown:**

1. **Hero Section**
   - AI prompt: "Create a compelling hero for luxury interior design targeting anxious first-time renovators"
   - Generated headline emphasizing peace of mind
   - CTA above fold

2. **Services Section**
   - AI prompt: "Explain full-service interior design in benefit-focused language"
   - Generated 3 key services with icons

3. **Portfolio Gallery**
   - AI prompt: "Design a gallery showcasing compact HK homes with before/after"
   - Generated responsive grid layout
   - Used fal.ai for placeholder interior images

4. **Process Timeline**
   - AI prompt: "Visualize 8-12 week design process as trust-building element"
   - Generated 5-step timeline with milestones

5. **Social Proof**
   - AI prompt: "Create authentic-sounding testimonials for HK renovation clients"
   - Generated testimonials with specific pain points/solutions

6. **Contact Form**
   - AI prompt: "Design conversion-optimized consultation booking form"
   - Generated multi-step form with progress indicator
   - WhatsApp alternative for local preference

### Phase 4: Optimization (30 mins)

**Performance:**
- Image optimization (Next.js Image component)
- Lazy loading below fold
- Preload hero image

**Conversion Optimization:**
- Multiple CTAs (hero, sticky header, form section)
- Trust signals (100+ projects, pricing transparency)
- Reduced friction (optional fields, WhatsApp shortcut)

**Mobile Optimization:**
- Touch-friendly CTAs (min 44x44px)
- Simplified navigation
- Optimized images for mobile viewport

### Phase 5: Polish & Testing (15 mins)

- Responsive testing (mobile, tablet, desktop)
- Form validation
- Accessibility audit (keyboard navigation, ARIA labels)
- Performance check (Lighthouse)

## AI Agent Instructions

### Context Documents Created

**CLAUDE.md** - Project-specific instructions for AI agent:
- Brand voice (professional but warm, Japanese aesthetic)
- Target audience psychographics
- Conversion goals
- Technical constraints
- Hong Kong market context

**design-system.md** - Design specifications:
- Color palette
- Typography scale
- Spacing system
- Component patterns

## Key Learnings

### What Worked Well

1. **Iterative prompting** - Starting broad, then refining specifics
2. **Context documents** - CLAUDE.md gave consistent brand voice
3. **Component-based approach** - Easier to iterate sections independently
4. **AI for copy** - Generated benefit-focused marketing copy

### Challenges Solved

1. **Cultural localization** - AI initially used US-style copy; refined with "Hong Kong market" context
2. **Price sensitivity** - AI suggested hiding pricing; insisted on transparency for trust
3. **Mobile-first** - Repeatedly reminded AI to prioritize mobile UX

## Prompts Archive

Key prompts saved in `/prompts` directory:
- `hero-section.txt`
- `conversion-copy.txt`
- `testimonials.txt`
- `process-timeline.txt`

## Time Breakdown

- Research & Planning: 15 mins
- Design Direction: 20 mins
- Implementation: 90 mins
- Optimization: 30 mins
- Polish & Testing: 15 mins
- **Total: ~2.5 hours**

## Results

**Key Metrics Optimized For:**
- Above-fold CTA visibility
- Mobile-responsive design
- Trust signal prominence
- Form completion friction reduction
- Page load performance (<3s)

**Conversion Elements:**
- 3 CTA placements
- Social proof (testimonials, project count)
- Risk reduction (free consultation)
- Price transparency
- WhatsApp quick action

## Next Steps (If More Time)

1. A/B test variations (headline, CTA copy)
2. Add live chat integration
3. Implement analytics tracking
4. Create Cantonese version
5. Add video testimonials
6. Integrate booking calendar
