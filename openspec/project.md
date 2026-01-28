# Project Context

## Purpose

Landing page profesional untuk **Group Company** yang menampilkan brand utama dan portfolio sub-company dalam presentasi visual yang modern dan elegan. Halaman ini berfungsi sebagai company profile digital yang memperkenalkan grup perusahaan beserta anak-anak perusahaannya kepada calon klien, investor, dan partner bisnis.

### Goals

- Menampilkan identitas brand Group Company dengan visual impact tinggi
- Showcase 5 sub-company dengan slider/carousel interaktif
- Memberikan pengalaman user yang smooth di semua device (fully responsive)
- Desain profesional yang mencerminkan kredibilitas perusahaan

## Tech Stack

- **HTML5** - Semantic markup dengan accessibility support
- **CSS3** - Pure CSS tanpa framework (no Bootstrap/Tailwind)
- **JavaScript (Vanilla)** - Pure JS tanpa library eksternal (no jQuery)
- **Google Fonts** - Poppins atau Inter (sans-serif modern)

## Project Conventions

### Code Style

#### HTML

- Gunakan semantic HTML5 elements (`<header>`, `<section>`, `<footer>`, `<nav>`)
- Indentasi menggunakan 2 spaces
- Attribute values dalam double quotes
- Self-closing tags untuk void elements (`<img />`, `<br />`)
- Class naming: kebab-case (contoh: `hero-section`, `slider-container`)

#### CSS

- Gunakan CSS Custom Properties (variables) untuk colors, spacing, dan typography
- Mobile-first approach dengan media queries untuk larger screens
- BEM-like naming untuk class selectors (block\_\_element--modifier)
- Organisasi: Reset → Variables → Base → Layout → Components → Utilities
- Hindari `!important` kecuali benar-benar diperlukan

#### JavaScript

- ES6+ syntax (const/let, arrow functions, template literals)
- Strict mode enabled (`'use strict';`)
- camelCase untuk variables dan functions
- PascalCase untuk class names
- Deskriptif naming (contoh: `initSlider()`, `handleNextSlide()`)
- Comments untuk logic yang kompleks

### Architecture Patterns

#### File Structure

```
src/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles (single file)
├── js/
│   └── script.js       # All JavaScript (single file)
└── assets/
    └── images/
        └── logo.png    # Group Company logo
```

#### CSS Architecture

- CSS Variables untuk theming dan konsistensi
- Responsive breakpoints:
  - Extra Small: < 480px
  - Mobile Small: < 640px
  - Mobile Large: 640px - 767px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

#### JavaScript Architecture

- IIFE atau module pattern untuk encapsulation
- Event delegation untuk performance
- State management sederhana untuk slider

### Testing Strategy

- Manual testing di multiple browsers (Chrome, Firefox, Safari, Edge)
- Responsive testing menggunakan browser DevTools
- Accessibility testing dengan keyboard navigation
- Performance check dengan Lighthouse

### Git Workflow

- Main branch: `main`
- Feature branches: `feature/nama-fitur`
- Commit messages: imperative mood ("Add slider component", "Fix mobile layout")

## Domain Context

### Brand Identity

- **Logo**: Menggunakan `src/assets/images/logo.png`
- **Company Name**: "GROUP COMPANY" (placeholder, customizable)

### Sub-Companies (5 total)

Placeholder content dengan industri berbeda:

1. **Sub Company A** - Technology & Innovation
2. **Sub Company B** - Manufacturing Excellence
3. **Sub Company C** - Energy Solutions
4. **Sub Company D** - Financial Services
5. **Sub Company E** - Healthcare & Wellness

### Visual Design Reference

Berdasarkan mockup:

- Logo Group besar di bagian atas (hero section) - centered, circular/rounded
- Section slider menampilkan 5 logo sub-company dalam format horizontal
- Color scheme: Orange accent (#f9a857 atau similar) untuk logo placeholders
- Clean white/light gray background

## Important Constraints

### Technical Constraints

- ❌ **TIDAK** menggunakan jQuery atau library slider eksternal
- ❌ **TIDAK** menggunakan CSS framework (Bootstrap, Tailwind, dll)
- ❌ **TIDAK** boleh ada horizontal overflow di semua breakpoint
- ❌ **TIDAK** boleh ada broken layout saat resize window
- ✅ Pure vanilla JavaScript only
- ✅ Pure CSS3 only
- ✅ Single page (no routing)

### Performance Constraints

- Minimal DOM complexity untuk fast loading
- Smooth transitions tanpa flicker
- Optimized untuk mobile devices

### Accessibility Requirements

- ARIA labels untuk navigation elements
- Keyboard navigation support (arrow keys)
- Color contrast ratio minimal 4.5:1
- Alt text untuk semua gambar

## External Dependencies

### Google Fonts

```html
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

atau

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### Placeholder Images

- Sub-company images: `https://placehold.co/` service
- Format: `https://placehold.co/600x400/f9a857/ffffff?text=Logo+Sub+Company`

### Assets

- Group Logo: `src/assets/images/logo.png`

## Design Specifications

### Color Scheme

```css
:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-secondary: #0f172a;
  --color-background: #f8fafc;
  --color-accent: #ffffff;
  --color-text-muted: #64748b;
  --color-orange: #f9a857; /* untuk placeholders */
}
```

### Typography Scale

```css
:root {
  /* Desktop */
  --font-logo: 2rem;
  --font-heading: 2.5rem;
  --font-body: 1.1rem;

  /* Mobile */
  --font-logo-mobile: 1.3rem;
  --font-heading-mobile: 1.5rem;
  --font-body-mobile: 0.95rem;
}
```

### Spacing System

```css
:root {
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 40px;
  --spacing-xl: 60px;
  --container-max-width: 1200px;
}
```

## Slider Specifications

### Auto-play Behavior

- Interval: 5 detik
- Pause on hover (desktop)
- Pause on touch (mobile)

### Navigation

- Arrow buttons (← →) dengan hover effect
- Dot indicators dengan active state
- Infinite loop
- Keyboard navigation (arrow keys)
- Touch swipe support (mobile)

### Transitions

- Smooth fade atau slide effect
- Easing function untuk natural movement
- Duration: 300-500ms
