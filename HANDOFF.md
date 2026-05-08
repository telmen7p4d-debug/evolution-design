# Design Handoff - Evolution

## 0. Approval Record

- **Homepage options shown:** 3 (Clean Minimal, Dark Luxury, Bold Mix)
- **Selected option:** Option B - Dark Luxury (Balenciaga-inspired)
- **Preview artifact file paths:**
  - `output/evolution/designs/homepage-option-a.png`
  - `output/evolution/designs/homepage-option-b.png`
  - `output/evolution/designs/homepage-option-c.png`
- **Pencil project paths used:**
  - `output/evolution/designs/homepage-directions.pen`
  - `output/evolution/designs/design.pen`
- **Confirmation:** Homepage previews covered the full homepage section flow
- **Design files:** `design.pen` and `design.png` exported from approved direction
- **Locked constraints:**
  - All-black aesthetic (#0A0A0A background)
  - Sharp edges (no rounded corners except CTAs)
  - Uppercase typography with letter-spacing
  - Minimal, high-contrast design

## 1. Frontend Build Map

### Pages to Build:
1. **Homepage** (`/`)
   - Header (fixed, transparent)
   - Hero Section (full-screen, centered)
   - Shipping Banner
   - Featured Products (3 products)
   - About/Philosophy Section
   - Client Testimonials
   - Newsletter CTA
   - Footer

2. **Product Detail** (`/products/[id]`)
   - Product image
   - Product info (name, price, description)
   - Size selector
   - Add to cart button

3. **About** (`/about`)
   - Hero banner
   - Company story
   - Values grid (3 values)

4. **Contact** (`/contact`)
   - Contact information
   - Contact form

### Component Inventory:
- Header (sticky, transparent → solid on scroll)
- Footer
- Button (primary: white fill, secondary: outline)
- Product Card (image, name, price)
- Section Title (uppercase, letter-spaced)
- Testimonial Card

### Animation Requirements:
- **Motion Level:** 3 (Expressive)
- Hero text: Fade in + slide up on load
- Products: Stagger fade-in on scroll
- Testimonials: Slide up on scroll
- Buttons: Scale on hover
- Page transitions: Fade

## 2. erxes CMS Field Map

### Homepage Sections:
1. Hero (title, subtitle, CTA)
2. Shipping Banner (text)
3. Featured Products (product refs)
4. About/Philosophy (title, content)
5. Testimonials (3 cards with quote + author)
6. Newsletter (title, subtitle, button)

### Pages:
- Home (`/`)
- Shop (`/products`)
- About (`/about`)
- Contact (`/contact`)

### Navigation Menu:
- SHOP
- COLLECTIONS
- ABOUT
- CONTACT

### Footer Menu:
- PRIVACY POLICY
- TERMS OF SERVICE
- CONTACT

## Design System

### Colors:
- **Background:** #0A0A0A (primary), #111111 (secondary), #1A1A1A (cards)
- **Text:** #FFFFFF (primary), #999999 (secondary), #666666 (muted)
- **Accent:** #FFFFFF (buttons), #333333 (borders)

### Typography:
- **Font:** Inter (all weights)
- **Hero:** 120-140px, weight 900, letter-spacing 12-16px
- **H2:** 48-72px, weight 700, letter-spacing 4-8px
- **Body:** 16-18px, weight 400
- **Labels:** 12-14px, weight 400, letter-spacing 1-3px

### Spacing:
- **Section padding:** 120-160px vertical
- **Content padding:** 32-48px horizontal
- **Gap scale:** 16, 24, 32, 48, 64

### Borders:
- **Primary:** 1px solid #333333
- **CTA buttons:** 1px solid #FFFFFF
- **No rounded corners** (except CTA buttons: 0px)

## Technical Requirements

### Packages:
- Next.js 14+
- Tailwind CSS
- Framer Motion (animations)
- Lenis (smooth scroll)
- Apollo Client (erxes integration)
- Jotai (state management)

### Responsive Breakpoints:
- Desktop: 1440px+
- Tablet: 768px-1439px
- Mobile: <768px

## Content Tone
- **Voice:** Luxurious, exclusive, confident
- **Style:** Minimal, uppercase, letter-spaced
- **Language:** English (default)
