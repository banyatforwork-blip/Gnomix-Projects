# Gnomix Projects Website - Design Guidelines

## Design Approach
**Reference-Based Design**: Mirror the visual language, animations, and polish of the main Gnomix website (gnomix.linkpc.net) while adapting it for a projects showcase format. Draw inspiration from Linear's clean typography and Stripe's gradient sophistication.

## Core Design Principles
- **GNOME-Inspired Minimalism**: Clean, uncluttered layouts with purposeful whitespace
- **Modern Gradient Aesthetics**: Purple-to-blue gradient treatments matching the main site
- **Smooth Micro-Interactions**: Subtle hover states, card elevations, and scroll-triggered animations
- **Professional Polish**: Every element should feel refined and production-ready

## Typography
- **Font Stack**: Inter for all text (via Google Fonts CDN)
- **Hierarchy**:
  - Hero Title: text-5xl md:text-6xl lg:text-7xl, font-bold
  - Section Headers: text-3xl md:text-4xl lg:text-5xl, font-bold
  - Project Titles: text-2xl md:text-3xl, font-semibold
  - Body Text: text-base md:text-lg, font-normal
  - Tags/Metadata: text-sm, font-medium

## Layout System
- **Spacing Units**: Tailwind units of 4, 8, 12, 16, 20, 24 (p-4, gap-8, my-12, etc.)
- **Container**: max-w-7xl mx-auto with px-4 md:px-8
- **Section Padding**: py-16 md:py-24 lg:py-32 for consistent vertical rhythm
- **Grid System**: 
  - Projects: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
  - Community: grid-cols-1 md:grid-cols-2 gap-8

## Hero Section
- **Height**: min-h-screen with flex centering
- **Background**: Animated purple-to-blue gradient (similar to main site)
- **Content**: 
  - Gnomix logo image (centered)
  - Large title "Gnomix" + tagline "Transform Ubuntu Into Pure GNOME"
  - Subtitle: "A collection of open-source projects and tools"
  - Two CTAs: "View GitHub" (primary) + "Join Discord" (secondary) with backdrop-blur-md backgrounds
  - Scroll indicator animation at bottom
- **Animation**: Subtle gradient shift on load, floating scroll indicator

## Projects Showcase Section
- **Layout**: Card grid with 3 columns on desktop
- **Project Cards**:
  - Elevated cards with border and subtle shadow
  - Hover state: lift effect (translate-y-1) and increased shadow
  - "Featured" badge for highlighted projects (purple gradient background)
  - Project name (bold, large)
  - Description (2-3 lines with line clamp)
  - Tag pills (rounded-full, small text, varied subtle backgrounds)
  - GitHub link button at bottom
  - "Archived" badge for retired projects (muted styling)
- **Card Spacing**: p-6, gap-4 internally
- **Tags**: Horizontal scroll on mobile if needed, flex-wrap on desktop

## Community Section
- **Layout**: 2-column grid on desktop, stacked on mobile
- **Cards**: Similar elevation to project cards
- **Discord Card**:
  - Discord logo/icon
  - "Join Discord" heading
  - Description: "Chat with the community, get support, and stay updated"
  - Member count badge
  - CTA button
- **GitHub Card**:
  - GitHub logo/icon
  - "GitHub" heading  
  - Description: "Contribute code, report bugs, and track development"
  - Contributor count
  - CTA button

## Component Specifications

**Buttons**:
- Primary: Gradient purple-to-blue background, white text, rounded-lg, px-8 py-3
- Secondary: Border with gradient outline, transparent background with backdrop-blur-md, rounded-lg
- Hover: Subtle scale (scale-105) and brightness increase
- On images: Always include backdrop-blur-md background

**Cards**:
- Border: border with subtle gray
- Background: Semi-transparent white/dark based on theme
- Rounded: rounded-xl
- Shadow: shadow-md default, shadow-xl on hover
- Padding: p-6 to p-8

**Badges**:
- Featured: rounded-full, px-3 py-1, text-xs, gradient background, white text
- Tags: rounded-full, px-3 py-1, text-xs, subtle background matching tag type
- Beta: Small badge in top-right, purple background

**Navigation** (if added):
- Sticky header with backdrop-blur-md
- Gnomix logo left, nav links center, CTA right
- Height: h-16

## Images
- **Hero Background**: Full-screen gradient overlay (no static image, use animated CSS gradient)
- **Gnomix Logo**: Centered in hero section, max-w-xs with drop shadow
- **Project Icons**: Not required, use emoji or text indicators if needed
- **Favicon**: Include Gnomix favicon in all pages

## Animations
- **Hero Gradient**: Subtle animated gradient background-position shift
- **Scroll Indicator**: Bounce animation (animate-bounce)
- **Card Hover**: Transform translate-y and shadow transition (duration-300)
- **Page Load**: Fade-in animation for sections (opacity 0 to 100)
- **Scroll Trigger**: Stagger fade-in for project cards as they enter viewport
- Keep animations smooth with ease-in-out timing

## Responsive Breakpoints
- Mobile: Base styles
- Tablet: md: (768px)
- Desktop: lg: (1024px)
- Wide: xl: (1280px)

## Accessibility
- High contrast text-to-background ratios
- Focus states on all interactive elements (ring-2 ring-purple-500)
- Semantic HTML (header, main, section, article for cards)
- ARIA labels for icon-only buttons
- Keyboard navigation support

## Data Integration
- Load projects from `data/projects.json`
- Display all project metadata dynamically
- Filter featured projects to top
- Sort archived projects to bottom