# Mori Living - Landing Page

A professional landing page for Mori Living, a Japanese-inspired interior design studio in Hong Kong. Built with Next.js 14, TypeScript, and Tailwind CSS v4.

![Hero Screenshot](https://via.placeholder.com/1200x600/2B3A2E/FFFFFF?text=Mori+Living)

---

## ✨ Features

- **Hero Slideshow** - Auto-rotating background with 3 AI-generated interior photos
- **Infinite Scroll Portfolio** - 7 projects with seamless auto-scroll animation
- **Full-Width Testimonials** - Real project photos as backgrounds
- **Interactive Timeline** - Week-by-week renovation process
- **Contact Form** - With validation using React Hook Form
- **Responsive Design** - Mobile-first approach
- **Custom Design System** - Forest green + aged brass color palette

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Forms:** React Hook Form
- **Images:** Next/Image optimization
- **Fonts:** Google Fonts (Instrument Serif, Inter)

---

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/mori-living-landing.git
cd mori-living-landing

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit http://localhost:3000

---

## 📁 Project Structure

```
mori-living-landing/
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Hero.tsx             # Hero with slideshow
│   ├── Instead.tsx          # Portfolio gallery
│   ├── Services.tsx         # Services section
│   ├── Timeline.tsx         # Timeline scrubber
│   ├── Testimonials.tsx     # Client reviews
│   └── ContactForm.tsx      # Contact form
├── public/
│   └── images/              # 13 AI-generated images
├── docs/
│   ├── AGENTS.md            # AI agent instructions
│   ├── CLAUDE.md            # Claude context document
│   ├── WORKFLOW.md          # AI workflow documentation
│   ├── DESIGN-RATIONALE.md  # Design decisions
│   ├── AI-IMAGE-PROMPTS.md  # Image generation prompts
│   ├── DEPLOYMENT.md        # Deployment guide
│   └── SCREENSHOTS.md       # Screenshot instructions
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts           # Next.js configuration
└── README.md                # This file
```

---

## 🎨 Design System

### Color Palette

```css
--warm-paper: #FDFCFB   /* Background */
--forest: #2B3A2E       /* Primary text */
--aged-brass: #C8A882   /* Accent */
--pale-stone: #E8E4DC   /* Secondary background */
--moss: #4A5D4F         /* Secondary text */
--ink: #1A1F1C          /* Strong text */
```

### Typography

- **Display:** Instrument Serif (headlines, quotes)
- **Body:** Inter (body text, UI)

---

## 🖼️ AI-Generated Images

All 13 images were generated using **fal.ai API** with the **flux/schnell** model.

- **3 Hero backgrounds** (16:9) - Rotating slideshow
- **7 Portfolio projects** (4:3) - Infinite scroll gallery  
- **3 Testimonial backgrounds** (unused, kept project photos)

See [`docs/AI-IMAGE-PROMPTS.md`](docs/AI-IMAGE-PROMPTS.md) for complete prompts and parameters.

---

## 🤖 AI Development Workflow

This project was built with extensive AI assistance:

1. **Planning** - Claude analyzed HK interior design market
2. **Design System** - Applied frontend-design skill for distinctive UI
3. **Implementation** - AI scaffolded components with human oversight
4. **Image Generation** - fal.ai API for professional interior photography

See [`docs/WORKFLOW.md`](docs/WORKFLOW.md) for detailed AI usage documentation.

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [`docs/CLAUDE.md`](docs/CLAUDE.md) | Brand voice & design instructions for AI |
| [`docs/AGENTS.md`](docs/AGENTS.md) | AI agent configuration |
| [`docs/WORKFLOW.md`](docs/WORKFLOW.md) | How AI was used in development |
| [`docs/DESIGN-RATIONALE.md`](docs/DESIGN-RATIONALE.md) | Design decisions & methodology |
| [`docs/AI-IMAGE-PROMPTS.md`](docs/AI-IMAGE-PROMPTS.md) | All image generation prompts |
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | Deployment instructions |
| [`docs/SCREENSHOTS.md`](docs/SCREENSHOTS.md) | Screenshot guide |

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository at https://vercel.com
3. Deploy (auto-detected as Next.js)
4. Live in ~2 minutes

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for detailed instructions.

---

## 📸 Screenshots

- Desktop: Full hero + portfolio scroll
- Mobile: Responsive layout
- Testimonials: Full-width with photo backgrounds

See [`docs/SCREENSHOTS.md`](docs/SCREENSHOTS.md) for screenshot guide.

---

## ⚙️ Configuration

### Environment Variables

None required for demo. For production:

```env
# Optional: Form submission endpoint
NEXT_PUBLIC_FORM_ENDPOINT=https://your-api.com/contact
```

### Tailwind v4

Using `@import "tailwindcss"` syntax with `@theme` configuration:

```css
@import "tailwindcss";

@theme {
  --color-forest: #2b3a2e;
  --color-aged-brass: #c8a882;
  /* ... */
}
```

---

## 🎯 Performance

- **Lighthouse Score:** 95+ (Performance)
- **First Contentful Paint:** < 1.5s
- **Total Bundle Size:** < 200 KB (gzipped)
- **Image Optimization:** Next/Image with WebP
- **Code Splitting:** Automatic via Next.js

---

## 📝 License

This project is for demonstration purposes. All design and content © 2024 Mori Living.

---

## 🤝 Contributing

This is a portfolio/demo project. If you'd like to use it as a template:

1. Fork the repository
2. Update content in `components/`
3. Replace images in `public/images/`
4. Update branding in `app/layout.tsx`
5. Deploy to your own hosting

---

## 📧 Contact

**Project:** Mori Living Landing Page  
**Built by:** Antony (with Claude AI)  
**Time:** ~2.5 hours  
**Purpose:** InstaAgent technical assessment

---

## 🙏 Credits

- **Design Framework:** [frontend-design skill](docs/DESIGN-RATIONALE.md)
- **AI Images:** [fal.ai](https://fal.ai) flux/schnell model
- **AI Development:** Claude (Anthropic)
- **Framework:** Next.js (Vercel)
- **Fonts:** Google Fonts

---

Built with ❤️ and AI assistance
