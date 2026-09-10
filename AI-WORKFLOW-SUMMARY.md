# AI Workflow Explanation

**Project:** Mori Living Landing Page  
**Time:** ~2.5 hours  
**AI Tools:** Claude (Cursor IDE), fal.ai API  

---

## How I Used AI

### 1. Planning & Context (15 mins)

**What I did:**
- Created `CLAUDE.md` - A context document with brand voice, target audience, design principles
- Included: HK interior design market insights, first-time renovator pain points, conversion psychology

**Why this worked:**
- Claude had persistent context across the session
- No need to repeat brand guidelines
- Maintained consistency in copy, design decisions

**Example from CLAUDE.md:**
```markdown
Target Audience: First-time renovators in HK (28-45)
Core Anxiety: "Will contractors disappear? Hidden costs?"
Design Aesthetic: Japanese minimalism (ma principle)
```

---

### 2. Design System with AI (20 mins)

**Prompt Strategy:**
- Referenced `frontend-design` skill to avoid generic AI defaults
- Asked Claude to critique its own work against common templates

**Interaction:**
```
Me: "Apply frontend-design skill. Avoid cream + terracotta defaults."
Claude: Generated forest green + aged brass palette
Me: "Why these colors?"
Claude: "From Japanese materials: forest, brass, paper, stone"
```

**Result:** Distinctive color system documented in `DESIGN-RATIONALE.md`

---

### 3. Component Scaffolding (60 mins)

**Structured approach:**
1. Described desired outcome (not implementation)
2. Let Claude propose component structure
3. Reviewed, iterated 1-2 times
4. Moved to next component

**Example workflow:**

```
Me: "Hero should have rotating backgrounds, brand name 'Mori Living',
     one CTA, minimal text"

Claude: [Generates Hero.tsx with slideshow logic]

Me: "Good. Now portfolio gallery with 7 projects, infinite scroll"

Claude: [Generates Instead.tsx with auto-scroll]
```

**Key insight:** Breaking into small chunks (6-7 components) kept quality high.

---

### 4. AI Image Generation (30 mins)

**Tool:** fal.ai API (flux/schnell model)

**Prompt engineering:**
```
"Professional interior photography of a [space type] in Hong Kong,
[size] sq ft, Japanese-inspired, [materials], [lighting],
architectural photography"
```

**Iteration:**
- Generated 3 hero backgrounds (16:9)
- Generated 7 portfolio projects (4:3)
- Saved all prompts to `docs/AI-IMAGE-PROMPTS.md`

**Why this worked:**
- Specific prompts → consistent style
- Included "Hong Kong" → compact spaces
- Added square footage → realistic scale

---

### 5. Refinement & Documentation (25 mins)

**Claude's role:**
- Fixed Tailwind CSS build errors
- Implemented infinite scroll (no visible jump)
- Reorganized 18 scattered docs → 7 organized files in `docs/`

**Human oversight:**
- Verified visual output in browser
- Tested mobile responsiveness
- Made final design calls

---

## Work Structure

### Context Documents (Always Available)

1. **CLAUDE.md** - Brand voice, design principles
2. **AGENTS.md** - Code standards, Git workflow
3. **DESIGN-RATIONALE.md** - Design decisions log

### Workflow Pattern

```
[Define component goal] 
    → [Claude generates code]
    → [I verify in browser]
    → [Iterate if needed]
    → [Move to next component]
```

### Git Workflow

- Claude committed after each major feature
- Clear commit messages: `feat:`, `fix:`, `docs:`
- 14 clean commits (no "wip" or "update" messages)

---

## How I Provided Context

### 1. Initial Context (One-time)

Created comprehensive `CLAUDE.md`:
```markdown
# Brand: Mori Living
# Audience: First-time HK renovators
# Design: Japanese minimalism
# Colors: Forest green + aged brass (avoid defaults)
# Copy: Specific ("520 sq ft") not generic ("beautiful spaces")
```

### 2. Per-Component Context (As needed)

**Example for testimonials:**
```
Me: "3 testimonials. Use actual project photos as backgrounds.
     Full width, no blur, gradient overlay left-to-right."

Claude: [Understands from CLAUDE.md that photos = project-1/2/4.jpg]
```

### 3. Feedback Loop

When output wasn't right:
```
Me: [Shows screenshot] "Text not readable"
Claude: "Increase overlay opacity from 60% to 85%"
```

---

## Time Breakdown

| Phase | Time | AI Role | Human Role |
|-------|------|---------|------------|
| Planning | 15m | Market analysis, audience insights | Created CLAUDE.md |
| Design System | 20m | Generated palette, critique | Design decisions |
| Components | 60m | Scaffolded 6 components | Verified, iterated |
| Images | 30m | Generated 13 images via API | Wrote prompts |
| Refinement | 25m | Fixed bugs, organized docs | Final QA |

**Total:** 2.5 hours (as requested)

---

## Key Success Factors

### ✅ What Worked Well

1. **Context Document**
   - CLAUDE.md kept brand consistent
   - No repeated explanations

2. **Small Iterations**
   - One component at a time
   - Quick feedback loop

3. **AI for Tedious Work**
   - Scaffolding boilerplate
   - Writing marketing copy
   - Generating images
   - Organizing docs

4. **Human for Judgment**
   - Design decisions
   - Visual verification
   - Final quality control

### ❌ What I'd Do Differently

1. **Earlier visual checks** - Some components needed rework after browser check
2. **More specific prompts upfront** - "Full width" vs "max-w-5xl" confusion
3. **Document structure earlier** - Had to reorganize 18 → 7 docs at end

---

## Specific AI Techniques Used

### 1. Frontend-Design Skill

Referenced Cursor's `frontend-design` skill to avoid generic outputs:
- Avoided cream + terracotta (common AI default)
- Generated distinctive color from materials
- Took aesthetic risk (forest green + brass)

### 2. Prompt Chaining

Built context progressively:
```
Hero → Portfolio → Testimonials → Timeline → Services → Contact
```
Each component referenced previous ones.

### 3. Self-Critique

Asked Claude to critique its own work:
```
Me: "Does this look templated?"
Claude: "Yes, using generic 01/02/03 markers. Should use real weeks."
```

### 4. Documentation as Code

All decisions captured in markdown:
- Design rationale → DESIGN-RATIONALE.md
- Image prompts → AI-IMAGE-PROMPTS.md
- Workflow → WORKFLOW.md

---

## Measurable Outcomes

### Code Quality
- ✅ TypeScript: 0 errors
- ✅ Build: Passed
- ✅ Responsive: 375px to 1440px
- ✅ Images: 13 AI-generated, optimized

### Documentation Quality
- ✅ 7 organized docs in `docs/`
- ✅ All AI prompts saved
- ✅ Design decisions explained
- ✅ README with screenshot

### Time Saved
- ~45 mins: Component scaffolding
- ~30 mins: Marketing copy
- ~20 mins: Design system
- **Total AI acceleration:** ~1.5 hours

---

## Replicating This Workflow

**For your team:**

1. **Create context docs first**
   - Brand voice (CLAUDE.md)
   - Code standards (AGENTS.md)

2. **Structure work in chunks**
   - One component per iteration
   - Verify before moving forward

3. **Document decisions immediately**
   - Why this color?
   - Why this layout?
   - Save AI prompts

4. **Use AI for speed, human for judgment**
   - AI: boilerplate, copy, images
   - Human: design calls, QA, verification

---

**Result:** Production-ready landing page in 2.5 hours with full documentation.

Built by: Antony  
AI Partner: Claude (Anthropic)  
For: InstaAgent Technical Assessment
