# Deployment Instructions

## Quick Deploy to Vercel

1. Push to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/mori-living-landing.git
git branch -M main
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"

Done! Your landing page will be live in ~2 minutes.

## Environment Variables

None required for this demo version.

In production, you would add:
- `NEXT_PUBLIC_FORM_API_URL` - For form submissions
- `NEXT_PUBLIC_GA_ID` - Google Analytics
- `WHATSAPP_NUMBER` - Client's WhatsApp number

## Custom Domain

In Vercel dashboard:
1. Settings > Domains
2. Add `moriliving.com`
3. Update DNS records as shown
4. SSL certificate auto-generated

## Performance Checklist

Before production:
- [ ] Replace gradient placeholders with real project photos
- [ ] Optimize images (WebP format, lazy loading)
- [ ] Add meta tags for social sharing (OG images)
- [ ] Set up Google Analytics
- [ ] Configure form submission backend
- [ ] Test on real devices (iOS Safari, Chrome Android)
- [ ] Run Lighthouse audit (target 90+ score)
- [ ] Set up error tracking (Sentry)

## Analytics Events to Track

```javascript
// Example GTM events
trackEvent('cta_click', { location: 'hero' });
trackEvent('whatsapp_click', { source: 'sticky_header' });
trackEvent('form_submit', { budget_range: 'HK$400-600K' });
trackEvent('portfolio_view', { project: 'Sai Ying Pun Studio' });
```

## A/B Testing Ideas

1. **Headline variants:**
   - "Your stress-free renovation starts here" (current)
   - "Transform your Hong Kong home with peace of mind"
   - "Renovation without the anxiety"

2. **CTA copy:**
   - "Book Free Consultation" (current)
   - "Get Your Free Quote"
   - "Start Your Project"

3. **Trust signal prominence:**
   - Version A: Above fold (current)
   - Version B: After services section
   - Version C: Sticky badge

## Mobile Testing Devices

Priority:
- iPhone 12/13 (most common in HK)
- Samsung Galaxy S21
- Pixel 6

Test on:
- Safari iOS
- Chrome Android
- WeChat in-app browser (common in HK)

## Known Issues / Future Enhancements

### Known Issues
- Form submission currently logs to console (needs backend)
- Images are gradient placeholders (need real photos)
- WhatsApp number is dummy (+852 1234 5678)

### Future Enhancements
1. Add Cantonese language toggle
2. Before/after image slider
3. Live chat widget
4. Booking calendar integration
5. Video testimonials
6. Virtual tour of completed projects
7. Interactive budget calculator
8. Blog/design tips section

## Support

For technical issues:
- Check deployment logs in Vercel dashboard
- Review browser console for errors
- Test in incognito mode (fresh cache)

## Monitoring

Recommended tools:
- Vercel Analytics (free)
- Google Analytics 4
- Hotjar (heatmaps)
- Microsoft Clarity (session recordings)
