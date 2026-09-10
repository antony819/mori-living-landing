# AI Workflow Summary

**Project:** Mori Living Landing Page | **Time:** 2.5 hours | **AI Tools:** Claude, fal.ai

---

## How I Used AI

### 1. Context Document First
Created `CLAUDE.md` with brand voice, target audience (HK first-time renovators), and design principles (Japanese minimalism, forest green + aged brass palette). This kept Claude consistent across the entire session without repeating instructions.

### 2. Component-by-Component Build
Asked Claude to scaffold one component at a time (Hero → Portfolio → Testimonials → Timeline → Services → Contact). I verified each in browser before moving forward. This kept quality high and caught issues early.

### 3. AI Image Generation
Used fal.ai API to generate 13 professional interior photos. Wrote specific prompts: "Professional interior photography of [space] in Hong Kong, [size] sq ft, Japanese-inspired, [materials], architectural photography." Saved all prompts to `docs/AI-IMAGE-PROMPTS.md`.

### 4. Applied Frontend-Design Skill
Referenced Cursor's `frontend-design` skill to avoid generic AI templates. Asked Claude to critique its own work ("Does this look templated?"). Result: distinctive design with forest green + aged brass instead of common cream + terracotta defaults.

### 5. Documentation as Code
Had Claude document every decision immediately: design rationale, image prompts, workflow. At end, reorganized 18 scattered docs into 7 organized files in `docs/` folder.

---

## Key Techniques

**Context document** - One CLAUDE.md file maintained consistency  
**Small iterations** - One component at a time with quick feedback  
**AI for speed** - Boilerplate, copy, image generation (~1.5 hours saved)  
**Human for judgment** - Design decisions, visual QA, final verification

---

## Result

Production-ready landing page with 6 sections, 13 AI images, full documentation, in 2.5 hours.

---

Built by: Antony | AI Partner: Claude
