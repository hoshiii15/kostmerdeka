# 🎨 Scrollytelling Features Guide — Kost Merdeka

Panduan lengkap fitur-fitur professional scrollytelling yang telah ditambahkan ke landing page.

## 📊 Fitur yang Ditambahkan

### 1. **Scroll Progress Bar** (Top of Page)

- Bar biru di bagian atas halaman yang mengikuti progress scroll
- Smooth animation saat user scroll
- Membantu orientasi user di halaman panjang

**Lokasi**: Otomatis ter-inject di `<body>` via JavaScript

---

### 2. **Scroll-Triggered Animations**

Setiap section muncul dengan animasi saat masuk viewport:

#### Classes yang tersedia:

- `.reveal` — Fade in + slide up
- `.reveal-left` — Slide dari kiri
- `.reveal-right` — Slide dari kanan
- `.stagger-1` sampai `.stagger-6` — Delay bertahap

#### Bagian yang menggunakan:

- Hero copy (`.reveal-left`)
- Hero image (`.reveal-right`)
- Section titles (`.reveal`)
- Feature cards (`.reveal .stagger-1` hingga `.stagger-6`)
- Room cards (`.reveal .stagger-1/2/3`)
- Gallery images (`.reveal .stagger-1/2/3/4`)
- Stats counters (`.reveal .stagger-1/2/3`)
- CTA section (`.reveal-left` & `.reveal-right`)

**Tech**: Intersection Observer API untuk deteksi viewport

---

### 3. **Parallax Effect** (Hero Section)

- Hero image bergerak lebih lambat dari scroll (0.3x speed)
- Menciptakan depth illusion yang elegan
- Hanya aktif saat hero section terlihat

**Implementasi**: `window.addEventListener('scroll')` dengan transform calculation

---

### 4. **Animated Statistics Counter**

Angka di bagian Stats menghitung dari 0 ke target value saat section terlihat:

- **50+** Penghuni Aktif
- **100%** Tingkat Kepuasan
- **24/7** Keamanan Siaga
- **5 Thn** Pengalaman

**HTML Structure**:

```html
<span class="stat-number" data-target="50" data-suffix="+">0+</span>
```

**Custom attributes**:

- `data-target` — Angka tujuan
- `data-suffix` — Text setelah angka (opsional)

---

### 5. **Enhanced Navigation**

- Smooth scroll ke section dengan offset untuk fixed header
- Underline animation pada hover
- Button hover dengan ripple effect

**Features**:

- Sticky header dengan blur backdrop
- Shadow muncul saat scroll
- Brand logo scale on hover

---

### 6. **Interactive Card Hover States**

#### Feature Cards:

- Lift up 8px saat hover
- Icon rotate & scale 1.15x
- Shadow enhancement
- Background color change

#### Room Cards:

- Lift up 12px saat hover
- Image zoom 1.1x (zoom in effect)
- Enhanced shadow
- Smooth cubic-bezier transition

#### Gallery Images:

- Scale 1.05x on hover
- Shadow enhancement
- Clickable dengan simple scale animation

---

### 7. **Gradient Text Effect** (Hero H1)

- Gradient dari `--text` ke `--accent`
- Modern webkit text-fill technique
- Fallback untuk browser lama

---

### 8. **Button Ripple Effect**

- Circular ripple dari center saat hover
- Subtle lift animation
- Enhanced shadow

---

### 9. **Testimonial Carousel**

- Auto-rotate setiap 6 detik
- Pause on hover
- Smooth fade transitions
- Circular navigation buttons dengan hover transform

---

### 10. **Responsive Design Enhancements**

- Mobile: Navigation disembunyikan (tambahkan hamburger menu jika perlu)
- Tablet: 2-column gallery
- Desktop: Full 4-column gallery
- Stats adapt dari 4 → 2 → 1 kolom

---

## 🎨 Color Palette

```css
--bg: #ffffff         /* Pure white background */
--text: #111111       /* Almost black text */
--muted: #6b6b6b      /* Gray for secondary text */
--surface: #f6f6f6    /* Light gray for cards */
--accent: #0b3d91     /* Deep navy blue */
--accent-light: #1a5bb8 /* Lighter blue for gradients */
```

### Alternatif Warna Aksen:

**Emas/Gold** (premium feel):

```css
--accent: #d4af37;
--accent-light: #f0d475;
```

**Hijau Emerald** (natural/eco):

```css
--accent: #047857;
--accent-light: #10b981;
```

**Burgundy** (sophisticated):

```css
--accent: #7c2d12;
--accent-light: #dc2626;
```

---

## 🚀 Performance Optimizations

### CSS:

- `will-change: transform` pada hero image untuk GPU acceleration
- Transitions menggunakan `transform` & `opacity` (smooth 60fps)
- `backdrop-filter` untuk modern glassmorphism effect

### JavaScript:

- Intersection Observer (lebih efisien dari scroll listeners)
- Throttled scroll events untuk parallax
- Event delegation untuk gallery clicks

---

## 📱 Testing Checklist

- [ ] Scroll progress bar muncul dan update smooth
- [ ] Semua sections fade in saat scroll
- [ ] Parallax effect pada hero image (desktop only)
- [ ] Stats counter berjalan saat visible
- [ ] Feature cards hover dengan icon rotate
- [ ] Room cards hover dengan image zoom
- [ ] Gallery images hover & clickable
- [ ] Testimonial carousel auto-rotate & pause on hover
- [ ] Navigation smooth scroll dengan offset
- [ ] CTA buttons ripple effect
- [ ] Responsive di mobile, tablet, desktop

---

## 🔧 Troubleshooting

### Animasi tidak muncul?

1. Cek browser support untuk Intersection Observer (Chrome 58+, Firefox 55+)
2. Pastikan `script.js` ter-load setelah DOM ready
3. Buka browser console untuk errors

### Parallax tersendat?

- Batasi parallax hanya untuk desktop: tambahkan check `window.innerWidth > 900`
- Gunakan `requestAnimationFrame` untuk smoother animation

### Stats counter tidak berjalan?

- Pastikan `data-target` attribute ada
- Check apakah Intersection Observer mentrigger

---

## 💡 Ide Pengembangan Lanjutan

1. **Mobile Navigation Menu** — Hamburger menu untuk mobile
2. **Image Lightbox** — Fullscreen gallery viewer
3. **Form Kontak** — Inline form di CTA section
4. **Virtual Tour** — 360° view integration
5. **Lazy Loading** — Defer offscreen images
6. **Dark Mode Toggle** — Theme switcher
7. **Loading Animation** — Splash screen saat pertama kali load
8. **Scroll Snap** — Snap to sections on scroll (optional)

---

## 📚 Resources & Credits

- **Font**: Inter from Google Fonts
- **Icons**: Custom SVG (inline)
- **Animations**: CSS3 Transitions & Transforms
- **JavaScript**: Vanilla JS (no dependencies!)

**Total File Size**:

- HTML: ~10KB
- CSS: ~8KB
- JS: ~5KB
- **Total**: ~23KB (sebelum images) 🚀

---

**Dibuat dengan ❤️ untuk Kost Merdeka**
