# Image Preloading & Immediate Load Plan

## Current State Analysis

| Image | Location | Current Loading | Size | Priority |
|-------|----------|----------------|------|----------|
| `new-hero-image.png` | Hero.tsx (img) | `loading="eager" decoding="async"` | ~1.7MB | **Critical** (LCP candidate) |
| `hero-background.png` | Hero.tsx (CSS bg) | CSS `background-image` | ~1.1MB | **Critical** (above-fold) |
| 6 signature coffee PNGs | SignatureCoffees.tsx | JS preload in `useEffect` + `loading="eager"` | 1.5-2.4MB each | High (above-fold on scroll) |
| Avatar images (3) | Hero.tsx | `loading="lazy"` | external (Unsplash) | Low |

**Gaps:**
- No HTTP-level `<link rel="preload">` in `index.html`
- No `fetchpriority="high"` on critical `<img>`
- JS-based preload runs after React hydration (late)
- Background image via CSS cannot be preloaded via link tag
- Large PNG files (no WebP/AVIF alternatives)

---

## Proposed Improvements (Priority Order)

### 1. HTTP-Level Preload for Hero Image (High Impact, Low Effort)
Add to `index.html` `<head>`:
```html
<link rel="preload" as="image" href="/images/new-hero-image.png" fetchpriority="high">
<link rel="preload" as="image" href="/images/hero-background.png" fetchpriority="high">
```
- Starts download during HTML parsing, before React mounts
- `fetchpriority="high"` signals criticality to browser

### 2. Add `fetchpriority="high"` to Hero `<img>` (High Impact, Trivial)
```tsx
<img
  src={newHeroImage}
  alt="Coffee brew being poured"
  loading="eager"
  decoding="async"
  fetchpriority="high"
/>
```
- Complements HTTP preload; ensures high priority if preload missed

### 3. Optimize Hero Background (Medium Impact)
Options:
- **A.** Keep CSS bg, add preload link (browser may still delay)
- **B.** Inline as `<img aria-hidden>` with `position: absolute; inset: 0; z-index: -1; object-fit: cover` — enables preload + `fetchpriority`
- **C.** Use `image-set()` with WebP fallback (requires format conversion)

**Recommendation:** Option B — convert to inline `<img>` for preloadability.

### 4. Early Preload for Signature Coffees (Medium Impact)
Move preload from `useEffect` to module scope (runs during bundle execution, before render):
```tsx
// At module top level, outside component
const signatureImages = [
  '/images/cold-brew.png',
  '/images/black-americano.png',
  '/images/cappuccino.png',
  '/images/new-sierra-blend.png',
  '/images/highland-mist-blend.png',
  '/images/velvet-vanilla-mocha.png',
]
signatureImages.forEach(src => { const img = new Image(); img.src = src })
```
- Runs during script execution, not after mount
- Keep `useEffect` as fallback for dynamic imports

### 5. Image Format Optimization (High Impact, More Effort)
- Generate WebP/AVIF variants at build time (Vite plugin: `vite-imagetools` or `vite-plugin-image-optimizer`)
- Use `<picture>` with `type="image/avif"` > `type="image/webp"` > fallback PNG
- Typical savings: 30-50% vs PNG

### 6. Responsive Images (Medium Impact)
- Generate multiple widths (e.g., 400w, 800w, 1200w)
- Use `srcset`/`sizes` on `<img>`
- Vite can automate via plugins

---

## Implementation Sequence

| Step | Task | Files Changed | Est. Complexity |
|------|------|---------------|-----------------|
| 1 | Add preload links to `index.html` | `index.html` | Trivial |
| 2 | Add `fetchpriority="high"` to hero `<img>` | `Hero.tsx` | Trivial |
| 3 | Convert hero background to inline `<img>` + preload | `Hero.tsx`, `index.html` | Low |
| 4 | Move signature preload to module scope | `SignatureCoffees.tsx` | Trivial |
| 5 | Add Vite image optimization plugin + WebP/AVIF | `vite.config.ts`, new images | Medium |
| 6 | Add responsive `srcset` to critical images | `Hero.tsx`, `SignatureCoffees.tsx` | Low |

---

## Validation Plan

1. **Lighthouse/Chrome DevTools**: Measure LCP, FCP, image load waterfall
2. **Network tab**: Verify preloads appear at top of waterfall with high priority
3. **WebPageTest**: Compare before/after on 3G/4G profiles
4. **No regression**: Build passes, no layout shift (CLS), images render correctly

---

## Open Questions

1. **Format conversion**: User previously wanted PNG only. Open to WebP/AVIF for 30-50% size reduction?
2. **Background image**: Convert CSS `background-image` to inline `<img>`? (Enables preload but changes styling approach)
3. **Responsive widths**: Target which breakpoints? (Mobile 400w, Tablet 800w, Desktop 1200w+)
4. **Service Worker**: Cache images for repeat visits? (Not in current scope)

---

## Recommended First Batch (Quick Wins)

Do Steps 1-4 immediately:
- ~5 min implementation
- Zero risk
- Immediate LCP improvement for hero
- Signature coffees start loading earlier