# AI Image Generation Prompts

All images for the Mori Living landing page were generated using **fal.ai API** with the **flux/schnell** model.

---

## Hero Background Images (3 images)

**Aspect Ratio:** 16:9 (landscape)  
**Purpose:** Rotating background slideshow for hero section

### Hero 1 - Serene Bedroom
```
Professional interior photography of a serene Japanese-inspired bedroom in Hong Kong, minimalist design, natural wood headboard, white linens, soft natural lighting, clean simple aesthetic, architectural photography, wide angle
```
**File:** `hero-1.jpg`  
**Size:** 379 KB

### Hero 2 - Modern Kitchen
```
Professional interior photography of a modern Japanese kitchen in compact Hong Kong apartment, light wood cabinets, white countertops, minimalist design, natural daylight, clean aesthetic, architectural photography
```
**File:** `hero-2.jpg`  
**Size:** 419 KB

### Hero 3 - Japanese Living Space
```
Professional interior photography of a Japanese-inspired living space in Hong Kong, natural wood furniture, paper lantern lighting, tatami-style seating area, minimalist zen aesthetic, warm ambient lighting, architectural photography
```
**File:** `hero-3.jpg`  
**Size:** 545 KB

---

## Portfolio Project Images (7 images)

**Aspect Ratio:** 4:3 (landscape)  
**Purpose:** Horizontal scrolling project gallery

### Project 1 - Sai Ying Pun Studio
```
Professional interior photography of a compact Japanese-inspired studio apartment in Hong Kong, 420 sq ft, minimalist design with hidden storage solutions, multi-functional furniture, natural wood flooring, white walls, clean lines, natural daylight streaming through windows, wide angle shot showing full space, realistic architectural photography, calm atmosphere
```
**File:** `project-1.jpg`  
**Size:** 493 KB  
**Usage:** Portfolio + Testimonial background (Sarah Chen)

### Project 2 - Taikoo Shing 2BR
```
Professional interior photography of an open-plan Japanese-inspired living room in Hong Kong, 680 sq ft, with wooden sliding doors, natural oak accents, neutral color palette, integrated dining area, soft natural lighting, minimalist furniture, warm inviting atmosphere, architectural photography
```
**File:** `project-2.jpg`  
**Size:** 748 KB  
**Usage:** Portfolio + Testimonial background (Michael Wong)

### Project 3 - Mid-Levels Luxury
```
Professional interior photography of a luxury minimalist apartment in Hong Kong Mid-Levels, 550 sq ft, Japanese aesthetic, custom built-in joinery, integrated LED lighting, high-end materials, monochromatic palette with natural wood accents, serene atmosphere, wide angle architectural shot
```
**File:** `project-3.jpg`  
**Size:** 552 KB  
**Usage:** Portfolio

### Project 4 - Kennedy Town 1BR
```
Professional interior photography of a space-efficient Hong Kong apartment, 480 sq ft, Japanese room dividers creating zones without walls, Kennedy Town, efficient layout, natural materials, neutral tones, smart storage solutions, architectural photography, natural daylight
```
**File:** `project-4.jpg`  
**Size:** 519 KB  
**Usage:** Portfolio + Testimonial background (Emily Lau)

### Project 5 - Wan Chai Dining
```
Professional interior photography of a Japanese-inspired dining area in Hong Kong apartment, wooden dining table, minimalist chairs, pendant lighting, clean aesthetic, natural wood tones, architectural photography
```
**File:** `project-5.jpg`  
**Size:** 687 KB  
**Usage:** Portfolio

### Project 6 - Causeway Bay Bathroom
```
Professional interior photography of a Japanese-inspired bathroom in Hong Kong, natural stone tiles, wood accents, minimalist fixtures, soft lighting, zen atmosphere, architectural photography
```
**File:** `project-6.jpg`  
**Size:** 665 KB  
**Usage:** Portfolio

### Project 7 - Sheung Wan Office
```
Professional interior photography of a Japanese-inspired home office in Hong Kong, minimal desk setup, natural wood shelving, paper window screens, calm workspace, architectural photography
```
**File:** `project-7.jpg`  
**Size:** 826 KB  
**Usage:** Portfolio

---

## Testimonial Backgrounds (3 images - unused)

**Note:** Originally generated abstract backgrounds, but replaced with actual project photos (project-1, project-2, project-4) for better visual consistency.

### Testimonial BG 1
```
Soft blurred abstract background, warm neutral tones, beige and cream colors, gentle gradient, subtle texture, minimalist aesthetic, out of focus, for testimonial card background
```
**File:** `testimonial-1.jpg` (unused)

### Testimonial BG 2
```
Soft blurred abstract background, warm earth tones, sage green and beige, gentle gradient, subtle texture, minimalist aesthetic, out of focus, calm atmosphere, for card background
```
**File:** `testimonial-2.jpg` (unused)

### Testimonial BG 3
```
Soft blurred abstract background, warm wood tones, natural beige and cream, gentle gradient, subtle texture, minimalist aesthetic, out of focus, serene mood, for testimonial background
```
**File:** `testimonial-3.jpg` (unused)

---

## Generation Parameters

**API:** fal.ai  
**Model:** `fal-ai/flux/schnell`  
**Inference Steps:** 4 (fast generation)  
**Authorization:** API key required

### Example API Call (PowerShell)
```powershell
$headers = @{ 
  "Authorization" = "Key YOUR_API_KEY"
  "Content-Type" = "application/json" 
}

$body = @{ 
  prompt = "YOUR_PROMPT_HERE"
  image_size = "landscape_4_3"
  num_inference_steps = 4 
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://fal.run/fal-ai/flux/schnell" `
  -Method Post `
  -Headers $headers `
  -Body $body
```

---

## Design Principles for Prompts

1. **Specify "Professional interior photography"** - Gets architectural quality
2. **Mention "Hong Kong"** - Local context, compact spaces
3. **Include "Japanese-inspired" / "minimalist"** - Brand aesthetic
4. **Add "natural wood", "natural lighting"** - Warm, organic feel
5. **Specify "architectural photography"** - Professional framing
6. **Include square footage** - Realistic scale
7. **Use "wide angle" for full rooms** - Show complete space

---

## Total Image Assets

- **10 images actively used**
- **3 images generated but unused** (abstract testimonial backgrounds)
- **Total file size:** ~6.5 MB
- **Total generation cost:** ~13 API calls

---

## Image Usage Map

| Image | Hero | Portfolio | Testimonial |
|-------|------|-----------|-------------|
| hero-1.jpg | ✅ | - | - |
| hero-2.jpg | ✅ | - | - |
| hero-3.jpg | ✅ | - | - |
| project-1.jpg | - | ✅ | ✅ Sarah |
| project-2.jpg | - | ✅ | ✅ Michael |
| project-3.jpg | - | ✅ | - |
| project-4.jpg | - | ✅ | ✅ Emily |
| project-5.jpg | - | ✅ | - |
| project-6.jpg | - | ✅ | - |
| project-7.jpg | - | ✅ | - |
