# Design Spec - TISS About Page Animations Upgrade

We are upgrading the **About Page** ([AboutPage.tsx](file:///c:/Users/zidan/Downloads/project-genesis/apps/landing/src/pages/AboutPage.tsx)) of the Tirtayasa Information Security Society landing application to integrate premium, high-performance animations from [React Bits](https://reactbits.dev/). This ensures 100% visual consistency and aesthetic cohesion with the Home Page design system.

---

## Design Objectives

1. **Visual Cohesion**: Align the typography, headers, card borders, and entrance animations of the About Page with the Home Page.
2. **Interactive Engagement**: Animate static numbers and cards into responsive, living components (counters and cursor-following glow cards).
3. **Flawless Performance**: Use lightweight, dependency-free implementations relying on native CSS transitions and `requestAnimationFrame` to maintain zero package bloating.

---

## Proposed Changes

### 1. [NEW] [CountUp.tsx](file:///c:/Users/zidan/Downloads/project-genesis/apps/landing/src/components/CountUp.tsx)
A reusable, high-performance number animation component.
* **Mechanism**: Uses `requestAnimationFrame` with a quadratic deceleration easing function (`easeOutQuad`) to count up smoothly from 0 to the target.
* **Viewport Trigger**: Employs `IntersectionObserver` so the counting animation triggers exactly when the number scrolls into the user's viewport.
* **Configuration**:
  ```typescript
  interface CountUpProps {
    to: number;
    from?: number;
    duration?: number;
    delay?: number;
    className?: string;
    startOnVisible?: boolean;
  }
  ```

### 2. [MODIFY] [AboutPage.tsx](file:///c:/Users/zidan/Downloads/project-genesis/apps/landing/src/pages/AboutPage.tsx)
Integrate all visual upgrades and interactive components:

#### A. Scroll Entrance Animations
* Wrap all four major sections (Hero, Origins, Topology, Vision/Mission) in `<ScrollReveal>` to trigger elegant, hardware-accelerated fade-and-slide entry transitions on scroll.

#### B. Heading Typewriter Animations
Replace static text headings with the `<TextType>` component to type the headers once when they enter the viewport:
* **Philosophy Heading**: Types `"The Null Protocol"` (using `showCursor={true}` and `cursorCharacter="|"`).
* **Origins Heading**: Types `"Our Origins"` (using `showCursor={true}` and `cursorCharacter="|"`).
* **Topology Heading**: Types `"Organizational Topology"` (using `showCursor={true}` and `cursorCharacter="|"`).

#### C. Milestone Counters
Replace static statistics numbers with `<CountUp />` components:
* **2026** (Establishment): Counts from `0` to `2026` over `2.5` seconds.
* **50+** (Active Members): Counts from `0` to `50` over `2.0` seconds (appending the static `+` sign).
* **12** (CTF Podiums): Counts from `0` to `12` over `1.5` seconds.

#### D. Bento Grid Interactive Glow Cards
Wrap the L0, L1, and L2 cards in `<SpotlightCard>` with custom, theme-appropriate pendaran (*glow*) colors:
* **Level 0 Card** (Foundational): Standard subtle grey glow (`spotlightColor="rgba(255, 255, 255, 0.05)"` or dark mode equivalent).
* **Level 1 Card** (Operational): Vibrant blue glow matching the primary team color (`spotlightColor="rgba(30, 111, 217, 0.15)"`).
* **Level 2 Card** (Executive): Royal purple glow matching the executive command styling (`spotlightColor="rgba(122, 63, 209, 0.15)"`).

---

## Verification Plan

### 1. Build & Compilation
* Run `npm run build` inside `apps/landing` to confirm that the new `CountUp` component compiles cleanly with zero TypeScript errors or type safety issues.

### 2. Linting & Quality
* Run `npm run lint` inside `apps/landing` to ensure that all changes adhere to the developer coding standards.

### 3. Visual Verification
* Open the browser at [http://localhost:3000/about](http://localhost:3000/about) (or navigate via navbar) and verify:
  * Headers type cleanly when visible.
  * Numbers count up smoothly on scroll.
  * Bento grid cards glow and track mouse cursor accurately.
  * Scroll transitions are hardware-accelerated and smooth.
