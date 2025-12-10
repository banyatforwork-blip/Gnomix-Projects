# Gnomix Portfolio Design Guidelines

## Design Approach
**Reference-Based:** Closely inspired by gnomix.linkpc.net - modern dark-themed portfolio site with clean sections and card-based layouts. Keep it simple and straightforward, not overly unique.

## Core Visual Style

### Typography
- **Headings:** Bold, modern sans-serif (Inter or similar via Google Fonts)
  - H1: 3xl-4xl, font-bold
  - H2: 2xl-3xl, font-bold  
  - H3: xl-2xl, font-semibold
- **Body:** Base size, font-normal, slightly increased line-height for readability
- **Accent text:** Gradient text for key headlines using rainbow gradient

### Layout System
**Spacing Units:** Consistent use of Tailwind's 4, 8, 12, 16, 24, 32 units
- Section padding: py-16 to py-24
- Card padding: p-6 to p-8
- Gap between elements: gap-4 to gap-8

### Component Library

**Hero Section:**
- Full-width dark background with subtle gradient overlay
- Rainbow gradient accent (matching logo colors)
- Large heading with gradient text treatment
- Subheading and brief description
- Gnomix logo prominently displayed
- CTA button with rounded corners (rounded-lg or rounded-xl)

**Project Cards:**
- Dark card background (bg-gray-900/50 or similar)
- Rounded corners: rounded-xl
- Subtle border or glow effect
- Project title, description, tech stack tags
- Link to GitHub repository
- Hover state: slight lift/glow effect

**Navigation:**
- Simple top nav bar, dark with blur effect
- Logo on left, nav links on right
- Sticky positioning
- Rounded corners on nav items

**Footer:**
- Dark background matching overall theme
- Credit to @chichbo clearly displayed
- Social/GitHub links
- Rounded corners on any contained elements

### Rainbow Gradient Palette
Extract and use the rainbow gradient from the provided logo:
- Apply to hero section accents
- Use for gradient text on headings
- Subtle gradient borders on cards
- Button hover states

### Design Treatment
- **Rounded Corners:** Apply consistently (rounded-lg to rounded-xl)
- **Dark Theme:** Deep grays/blacks as primary backgrounds
- **Glass morphism:** Subtle blur effects on cards/navigation
- **Spacing:** Generous whitespace, never cramped
- **Shadows:** Soft glows and shadows for depth

## Page Structure

1. **Hero Section** (80vh)
   - Rainbow gradient background treatment
   - Gnomix logo and branding
   - Main headline with gradient text
   - Brief introduction
   - Primary CTA button

2. **About/Introduction** 
   - Brief description of Gnomix
   - 2-column layout on desktop (text + visual element)

3. **Projects Showcase**
   - Grid layout: 1 column mobile, 2-3 columns desktop
   - Cards for each project (gnomix_script, etc.)
   - GitHub links clearly visible

4. **Footer**
   - @chichbo credit
   - Links and basic info
   - Consistent dark theme

## Images
- **Hero Background:** Abstract/gradient background or subtle tech-themed imagery with dark overlay
- **Project Cards:** Optional repository preview images or placeholder gradients
- **Logo:** Use provided Gnomix rainbow gradient logo prominently in hero and nav

## Interactions
- Minimal animations - keep it sleek and fast
- Card hover effects: subtle lift and glow
- Smooth scroll behavior
- Button hover: slight brightness/glow increase

## Key Principles
- **Simplicity:** Clean, not overdesigned
- **Consistency:** Rounded corners and dark theme throughout
- **Readability:** High contrast text on dark backgrounds
- **Modern:** Contemporary web design patterns
- **Professional:** Portfolio-quality presentation