# Screenshots Guide

## How to Capture Screenshots

### Desktop View (1440px)
1. Open http://localhost:3000 in Chrome
2. Set viewport to 1440x900 (Cmd+Shift+M, responsive mode)
3. Capture full page screenshots:
   - Hero section
   - Services section
   - Portfolio grid
   - Process timeline
   - Testimonials
   - Contact form
   - Full page scroll

### Mobile View (375px - iPhone SE)
1. Set viewport to 375x667
2. Capture:
   - Hero (above fold)
   - Services (stacked)
   - Portfolio (single column)
   - Process (vertical timeline)
   - Contact form
   - Sticky header (after scroll)

### Tablet View (768px - iPad)
1. Set viewport to 768x1024
2. Capture key breakpoints

## Screenshot Checklist

- [ ] Desktop - Hero with CTA
- [ ] Desktop - Full page scroll
- [ ] Mobile - Hero above fold
- [ ] Mobile - Contact form
- [ ] Mobile - Sticky header visible
- [ ] Hover states (Portfolio cards)
- [ ] Form validation errors
- [ ] Success state (form submitted)

## Tools

**Recommended:**
- Chrome DevTools (F12 > Device Toolbar)
- Full Page Screen Capture extension
- macOS: Cmd+Shift+4 (region capture)
- Windows: Win+Shift+S (snipping tool)

**Professional:**
- Browserstack (cross-browser testing)
- LambdaTest (automated screenshots)

## Key Features to Highlight

### Hero Section
- Clean Japanese aesthetic
- Clear value proposition
- Trust signals (100+ projects)
- Dual CTAs (Form + WhatsApp)

### Mobile Optimization
- Touch-friendly buttons
- Readable text (no zoom needed)
- Sticky CTA bar
- Fast loading

### Conversion Elements
- Multiple CTAs throughout
- Social proof (testimonials)
- Price transparency
- Low-friction form

## Annotations (Optional)

If adding annotations to screenshots:
1. Highlight primary CTA
2. Mark trust signals
3. Indicate scroll depth
4. Show responsive breakpoints
5. Point out WhatsApp quick action

## Example Filename Structure

```
screenshots/
  desktop/
    01-hero.png
    02-services.png
    03-portfolio.png
    04-process.png
    05-testimonials.png
    06-contact-form.png
    07-full-page.png
  mobile/
    01-hero-above-fold.png
    02-services.png
    03-portfolio.png
    04-form.png
    05-sticky-header.png
  tablet/
    01-hero.png
    02-form.png
```

## Tips for Best Results

1. **Clear browser cache** before capturing
2. **Use real viewport sizes** (not zoomed browser)
3. **Capture interactions** (hover, focus states)
4. **Show responsive behavior** (side-by-side comparisons)
5. **Include URL bar** for context (localhost:3000)

## What to Capture for Submission

**Minimum:**
- 1 desktop full-page screenshot
- 1 mobile hero screenshot
- 1 contact form screenshot

**Recommended:**
- Desktop full scroll
- Mobile full scroll
- Key interaction states
- Responsive comparison grid

## After Capturing

1. Optimize images (TinyPNG, Squoosh)
2. Name clearly (desktop-hero.png, mobile-form.png)
3. Add to `/screenshots` folder in repo
4. Reference in submission email

## Live Site Screenshots

Once deployed to Vercel:
1. Use production URL
2. Test real mobile devices (iOS Safari, Chrome Android)
3. Share Vercel preview link with InstaAgent
4. Optional: Record short video walkthrough (Loom)
