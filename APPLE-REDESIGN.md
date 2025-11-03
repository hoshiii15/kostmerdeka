# 🍎 Apple-Inspired Redesign — Kost Merdeka

Landing page telah di-redesign dengan inspirasi dari Apple iPhone 17 Pro — fokus pada **minimalism, large typography, immersive scrolling, dan premium aesthetics**.

---

## 🎨 Major Design Changes

### 1. **Dark Theme** (Apple signature)

- Background: Pure black (`#000000`)
- Text: Light gray (`#f5f5f7`) — Apple's exact text color
- Accent: Apple blue (`#0066CC`)
- Muted text: `#86868b` (Apple muted)

**Kenapa?** Apple menggunakan dark backgrounds untuk highlight produk dan create premium feel.

---

### 2. **Typography** (Apple San Francisco inspired)

- Font stack: `-apple-system, BlinkMacSystemFont, 'SF Pro Display'`
- Hero heading: **96px** (responsive down to 32px)
- Large line-height untuk readability: `1.47059` (Apple default)
- Letter-spacing: `-0.015em` untuk tight modern look

**Apple trick**: Line breaks di heading (`<br>`) untuk visual rhythm.

---

### 3. **Fullscreen Hero** (Cinematic)

- `min-height: 100vh` — immersive first impression
- Centered content dengan centered text
- Large subtitle dengan `clamp()` untuk fluid typography
- Radial gradient overlay untuk depth

**Before**: 2-column grid  
**After**: Full-width centered dengan image below

---

### 4. **Scroll Snapping** (Apple smoothness)

```css
html {
  scroll-snap-type: y proximity;
}
.section {
  scroll-snap-align: start;
}
```

Sections "snap" saat scroll — smooth & intentional like Apple product pages.

---

### 5. **Header** (Minimal & Translucent)

- Height: 48px (Apple standard)
- Backdrop blur: `blur(20px)` + `saturate(180%)`
- Background: `rgba(0,0,0,0.8)` — semi-transparent
- Font size: 12px untuk nav (Apple uses small nav text)

**Apple signature**: Glassmorphism effect yang blur konten di belakang.

---

### 6. **Spacing System** (Apple generous whitespace)

```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 4rem;
--spacing-xl: 6rem;
--spacing-xxl: 8rem; /* Sections padding */
```

**Apple principle**: "White space is just as important as content."

---

### 7. **Button Design** (Pill-shaped)

- Border-radius: `980px` — Apple's pill shape
- Minimal padding: `12px 22px`
- Font size: 17px (Apple body size)
- Hover: subtle `scale(1.02)`

**Removed**: Complex ripple effects  
**Added**: Subtle transforms

---

### 8. **Cards** (Minimal borders)

- Background: `rgba(255,255,255,0.03)` — barely visible
- Border: `1px solid rgba(255,255,255,0.1)` — subtle
- Border-radius: 18px (Apple's larger radius)
- Hover: lift + border brightness increase

**Apple principle**: Content speaks for itself, minimal chrome.

---

### 9. **Images** (Large & Cinematic)

- Gallery images: 320px height (vs 160px before)
- Room images: 280px height
- Border-radius: 12-18px
- Hover: subtle scale down to 0.98 (Apple "press" effect)

---

### 10. **Testimonials Carousel** (Minimal UI)

- Centered text, large quote (24px)
- Buttons: absolute positioned circles
- Background: barely visible `rgba(255,255,255,0.03)`
- Padding: generous 60px 80px

**Removed**: Quote marks  
**Added**: Clean, minimal presentation

---

### 11. **Stats Section** (Gradient numbers)

- Massive numbers: 72px (responsive down to 40px)
- Gradient text fill (white to semi-transparent)
- Border separators top/bottom
- Slower counter animation (2.5s vs 2s)

**Apple trick**: Numbers dengan gradient create depth without color.

---

### 12. **CTA Section** (Centered, bold)

- Centered layout (vs 2-column before)
- Large heading: 64px
- Stacked buttons
- Phone number as link with `tel:` protocol

**Apple approach**: One clear action, minimal distraction.

---

## 🚀 Technical Improvements

### Cubic-Bezier Easing (Apple signature)

```css
transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
```

Apple's custom easing untuk smooth, natural animations.

### RequestAnimationFrame (Performance)

```javascript
if (!ticking) {
  window.requestAnimationFrame(updateScrollProgress);
  ticking = true;
}
```

Optimized scroll handlers — 60fps smooth.

### Intersection Observer Tuning

```javascript
{
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
}
```

Elements reveal earlier untuk smoother experience.

### Scroll-Based Image Scaling

```javascript
const scale = 1 + (1 - scrollRatio) * 0.05;
```

Hero image scales subtly as you scroll — Apple product page effect.

---

## 📱 Responsive Breakpoints (Apple standard)

```css
@media (max-width: 1068px) {
  /* iPad Pro landscape */
}
@media (max-width: 734px) {
  /* iPhone/iPad portrait */
}
@media (max-width: 480px) {
  /* Small phones */
}
```

**Mobile changes**:

- Navigation hidden (ready for hamburger menu)
- Single column layouts
- Reduced font sizes dengan `clamp()`
- Testimonial carousel simplified

---

## 🎯 Apple Design Principles Applied

### 1. **Minimalism**

- Removed unnecessary borders
- Reduced color palette to monochrome + 1 accent
- Minimal UI chrome

### 2. **Hierarchy Through Size**

- Large headings (96px → 64px → 56px)
- Clear visual hierarchy without colors
- Generous line-height

### 3. **Premium Materials**

- Glassmorphism (backdrop-blur)
- Subtle gradients
- Dark backgrounds

### 4. **Performance**

- Smooth 60fps animations
- RequestAnimationFrame
- Optimized observers

### 5. **Accessibility**

- High contrast (white on black)
- Large touch targets (44px+ buttons)
- Semantic HTML

---

## 🔄 Before vs After Comparison

| Aspect         | Before            | After (Apple-style)      |
| -------------- | ----------------- | ------------------------ |
| **Background** | White             | Pure black               |
| **Header**     | Opaque white      | Translucent blur         |
| **Hero**       | 2-column grid     | Fullscreen centered      |
| **Headings**   | 32-40px           | 64-96px                  |
| **Buttons**    | Square 8px radius | Pill 980px radius        |
| **Spacing**    | Tight (2-3rem)    | Generous (8rem)          |
| **Cards**      | Visible borders   | Minimal borders          |
| **Animations** | Standard ease     | Cubic-bezier custom      |
| **Mobile nav** | Visible small     | Hidden (hamburger ready) |
| **Carousel**   | Colorful          | Minimal grayscale        |

---

## 💡 Next Steps (Optional Enhancements)

### 1. **Video Background** (true Apple experience)

```html
<video autoplay muted loop playsinline>
  <source src="hero-video.mp4" type="video/mp4" />
</video>
```

Replace hero image dengan looping video.

### 2. **Hamburger Menu** (mobile)

Animated hamburger icon untuk mobile navigation.

### 3. **Sticky Product Sections**

Seperti Apple product pages — image sticky while text scrolls.

### 4. **Image Sequence on Scroll**

Frame-by-frame image animation on scroll (advanced).

### 5. **3D Transforms**

Subtle 3D card tilts on hover.

### 6. **Custom Cursor**

Large custom cursor untuk desktop (optional luxury).

---

## 📚 Apple References Used

- iPhone 17 Pro page layout & spacing
- San Francisco typography system
- Glassmorphism dari macOS Big Sur+
- Pill buttons dari iOS/iPadOS
- Dark mode aesthetics dari Apple Watch pages
- Cubic-bezier easing dari Apple Motion guidelines

---

## ✅ Quality Checklist

- [x] Dark theme implemented
- [x] Large responsive typography
- [x] Fullscreen hero section
- [x] Translucent header dengan backdrop-blur
- [x] Scroll snapping proximity
- [x] Apple cubic-bezier easing
- [x] Minimal borders & chrome
- [x] Generous spacing (8rem sections)
- [x] Pill-shaped buttons
- [x] Gradient text effects
- [x] Smooth 60fps animations
- [x] Mobile responsive breakpoints
- [x] Optimized performance

---

**Result**: Premium, minimalist, Apple-level landing page! 🎉

**File sizes**:

- CSS: ~12KB (optimized)
- JS: ~6KB (vanilla, no deps)
- HTML: ~11KB

**Total**: ~29KB before images — blazing fast! ⚡
