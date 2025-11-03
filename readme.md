# 🏠 Kost Merdeka — Premium Landing Page# Kost Merdeka — Landing Page



Landing page profesional dengan **Apple-inspired design**, scrollytelling effects, **video background**, dan **hamburger menu** mobile.Ini adalah landing page statis sederhana untuk _Kost Merdeka_. Buatannya minimal, elegan, dan responsif dengan palet monokrom + aksen biru tua.



---## ✨ Professional Scrollytelling Features



## ✨ New Features (v2.0)Landing page ini dilengkapi dengan efek scrollytelling modern:



### 🎬 **Video Background**- **Scroll Progress Bar** — Indikator progress di atas halaman saat scroll

- Auto-playing hero video dengan smooth fade-in- **Scroll-triggered Animations** — Elemen muncul dengan animasi saat masuk viewport

- Image fallback jika video tidak load- **Parallax Effect** — Hero image bergerak lebih lambat saat scroll untuk depth effect

- Optimized untuk mobile & desktop- **Staggered Reveals** — Animasi berurutan untuk features dan room cards

- Opacity 40% untuk text readability- **Animated Counters** — Statistik yang menghitung otomatis saat terlihat

- **Smooth Scroll** — Navigasi halus dengan custom easing

### 📱 **Hamburger Menu**- **Interactive Hover States** — Transformasi 3D dan shadow pada cards

- Full-screen mobile menu dengan smooth slide-in animation- **Enhanced Typography** — Gradient text pada heading utama

- Backdrop blur glassmorphism effect

- Auto-close saat link diklik## Files Structure

- Prevents body scroll saat menu open

- `index.html` — Halaman utama dengan 7 seksi (Hero, Features, **Stats**, Rooms, Gallery & Map, Testimonials, CTA)

### 📞 **Enhanced Contact Info**- `style.css` — Styling utama dengan animations, transitions, dan hover effects

- Formatted contact details dengan IDs untuk easy updates- `script.js` — Intersection Observer, parallax, counter animations, dan carousel

- Clickable email, phone, WhatsApp links

- Separate address field## Placeholder Images

- Professional styling dengan accent colors

Semua gambar berada di folder `images/` dan saat ini berfungsi sebagai placeholder. Silakan ganti file berikut dengan foto berkualitas tinggi Anda:

---

- `images/hero.jpg` — hero utama (tampak depan gedung)

## 🚀 Quick Start- `images/room-standard.jpg`, `images/room-deluxe.jpg`, `images/room-premium.jpg` — foto tiap tipe kamar

- `images/gallery-1.jpg` ... `images/gallery-4.jpg` — galeri tambahan

### 1. **Add Images**

Masukkan gambar ke folder `images/`:Jika folder `images/` kosong, Anda dapat menambahkan foto dan memberi nama sesuai daftar di atas.

- `kost-luar.jpeg` — Hero background (1920x1080px)

- `hero-video.mp4` — **NEW!** Video background (optional, <10MB)## Customization Guide

- `room-standard.jpg`, `room-deluxe.jpg`, `room-premium.jpg`

- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`, `gallery-4.jpg`### Mengubah lokasi peta



### 2. **Update Contact Info**Peta ter-embed di `index.html` menggunakan query Google Maps `Universitas Merdeka Malang`. Untuk mengganti ke alamat yang tepat, ubah atribut `src` iframe, contoh:



#### WhatsApp Number (3 locations in index.html)```html

Ganti `6281234567890` dengan nomor Anda:<iframe

```html  src="https://www.google.com/maps?q=Jalan+Contoh+No+1+City&output=embed"

<!-- Line ~300 -->  ...

<a href="https://wa.me/6281234567890?text=..." id="whatsappBtn">></iframe>

```

<!-- Line ~301 -->

<a href="tel:+6281234567890" id="phoneBtn">### Mengganti nomor WhatsApp



<!-- Line ~304 -->Link WhatsApp pada tombol-tombol booking menggunakan nomor placeholder `+6281234567890`. Ganti ke nomor asli di `index.html` (semua `wa.me/` links).

<a href="tel:+6281234567890" id="contactPhone">+62 812-3456-7890</a>

```### Mengubah warna aksen



#### Email & AddressEdit variabel CSS di `style.css`:

```html

<!-- Line ~305 -->```css

<a href="mailto:info@kostmerdeka.com" id="emailLink">:root {

  --accent: #0b3d91; /* Ganti dengan kode warna pilihan Anda */

<!-- Line ~306 -->  --accent-light: #1a5bb8;

<span id="addressText">Jl. Merdeka No. 123, Malang</span>}

``````



### 3. **Update Google Maps**Untuk warna emas, gunakan: `--accent: #d4af37;` dan `--accent-light: #f0d475;`

```html

<!-- Line ~260 -->### Menyesuaikan statistik

<iframe id="mapEmbed" src="https://www.google.com/maps?q=..."></iframe>

```Edit nilai `data-target` pada elemen `.stat-number` di bagian Stats:



Get embed code from [Google Maps](https://maps.google.com):```html

1. Search your location<span class="stat-number" data-target="50" data-suffix="+">0+</span>

2. Click "Share" → "Embed a map"```

3. Copy iframe code

## Performance Tips

### 4. **Optional: Add Video Background**

- Kompres foto sebelum upload (gunakan TinyPNG atau ImageOptim)

**Video Specs:**- Format optimal: WebP untuk web modern, fallback JPEG

- Format: MP4 (H.264 codec)- Ukuran rekomendasi:

- Resolution: 1920x1080 or 1280x720  - Hero image: 1200x800px

- Duration: 10-20 seconds (loops)  - Room images: 800x600px

- File size: **<10MB**  - Gallery images: 600x600px

- Filename: `hero-video.mp4`

## Browser Compatibility

**Compress tools:**

- [HandBrake](https://handbrake.fr/) (free)- Chrome/Edge 90+ ✅

- [CloudConvert](https://cloudconvert.com/mp4-converter) (online)- Firefox 88+ ✅

- FFmpeg: `ffmpeg -i input.mp4 -vcodec h264 -b:v 2M -s 1280x720 hero-video.mp4`- Safari 14+ ✅

- Mobile browsers (iOS Safari, Chrome Mobile) ✅

**No video?** Just skip this step — website auto-falls back to image!

Intersection Observer dan CSS transforms didukung semua browser modern.

### 5. **Test**

Open `index.html` in browser and check:## Notes & Next Steps

- [ ] Video plays (if added)

- [ ] All images load- Tambahkan foto asli ke folder `images/`.

- [ ] WhatsApp link works- Saya menggunakan teks "Dekat Universitas Merdeka" sebagai asumsi awal. Jika Anda ingin nama lokasi lain, beri tahu saya dan saya akan sesuaikan peta dan teks lokasi.

- [ ] Email link opens mail app- Jika mau, saya bisa menambahkan ikon SVG yang lebih detil, animasi kecil, atau versi PDF untuk cetak.

- [ ] Map shows correct location

- [ ] Hamburger menu works on mobile (<734px)Jika mau, saya dapat juga:

- [ ] Scroll animations smooth

- Menghasilkan versi bahasa Inggris.

---- Mengoptimalkan gambar kecil (responsive srcset).

- Menyambungkan form kontak atau integrasi booking.

## 📁 File Structure

```
kost-merdeka2/
├── index.html                  # Main HTML
├── style.css                   # Apple-style CSS  
├── script.js                   # Scrollytelling JS
├── images/
│   ├── kost-luar.jpeg         # Hero fallback
│   ├── hero-video.mp4         # 🆕 Video (optional)
│   ├── room-*.jpg             # Room photos
│   └── gallery-*.jpg          # Gallery photos
├── README.md                  # This file
├── CUSTOMIZATION-GUIDE.md     # Detailed guide
├── VIDEO-SETUP-GUIDE.md       # 🆕 Video tutorial
├── APPLE-REDESIGN.md          # Design explained
└── SCROLLYTELLING-GUIDE.md    # Animation features
```

---

## 🎨 Features

### Design
- ⬛ **Dark theme** dengan glassmorphism header
- 📝 **Large typography** (96px headings) responsive
- 🎬 **Video background** dengan fallback
- 📏 **Fullscreen hero** (100vh immersive)
- 🎯 **Scroll snapping** untuk smooth transitions

### Mobile
- 🍔 **Hamburger menu** dengan slide-in animation
- 📱 **Responsive** untuk all device sizes
- 👆 **Touch-optimized** dengan 44px+ buttons

### Scrollytelling
- 📊 Scroll progress bar
- 👁️ Intersection Observer reveals
- ⛰️ Parallax effect (desktop)
- 🔢 Animated counters
- ⏱️ Stagger animations

### Technical
- ⚡ Pure vanilla JavaScript (no dependencies)
- 🎨 Apple cubic-bezier easing `(0.16, 1, 0.3, 1)`
- 📱 `requestAnimationFrame` untuk 60fps
- 🚀 Optimized for Core Web Vitals

**File sizes:**
- HTML: ~12KB
- CSS: ~14KB  
- JS: ~7KB
- **Total:** ~33KB (before media)

---

## 🎨 Customization

### Change Accent Color
Edit `style.css` (line ~7):
```css
--accent: #0066CC;  /* Change this */
```

**Popular colors:**
- Apple Blue: `#0066CC` (current)
- Green: `#34C759`
- Purple: `#AF52DE`
- Orange: `#FF9500`

### Update Room Prices
Edit `index.html` (lines ~190, ~220, ~240):
```html
<div class="price">Rp 1.200.000<span>/bln</span></div>
```

### Change Stats
Edit `index.html` (lines ~55-68):
```html
<span class="stat-number" data-target="50">0</span>
```

---

## 📱 Responsive Breakpoints

- **Desktop:** >1068px (full layout)
- **iPad Pro:** ≤1068px (adjusted spacing)
- **iPad/Mobile:** ≤734px (hamburger menu, single column)
- **Small Mobile:** ≤480px (optimized touch)

---

## 🆘 Troubleshooting

### Video not playing?
✅ Check file size (<10MB)  
✅ Ensure MP4 format (H.264)  
✅ Filename exact: `hero-video.mp4`  
✅ Clear browser cache  

### Hamburger menu not working?
✅ Test on mobile or resize <734px  
✅ Check console for JS errors  
✅ Verify script.js loaded

### Images not showing?
✅ Check path: `images/file.jpg` (case sensitive)  
✅ Verify files exist  
✅ Check extension (.jpg vs .jpeg)

### WhatsApp not opening?
✅ Format: `wa.me/628xxxxx` (no + in URL)  
✅ Use `tel:+628xxxxx` for phone  

---

## 📚 Documentation

- **CUSTOMIZATION-GUIDE.md** — Step-by-step customization
- **VIDEO-SETUP-GUIDE.md** — 🆕 Complete video tutorial
- **APPLE-REDESIGN.md** — Apple design philosophy  
- **SCROLLYTELLING-GUIDE.md** — Animation features

---

## 🚀 Performance

**Lighthouse targets:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

**Optimizations:**
- `requestAnimationFrame` for scroll
- `IntersectionObserver` for reveals
- Lazy loading images
- Optimized video (H.264)
- No external dependencies

---

## 🎯 SEO Tips

1. **Update meta tags:**
   ```html
   <title>Kost Merdeka — Hunian Premium di Malang</title>
   <meta name="description" content="...">
   ```

2. **Optimize images:**
   - Use WebP format
   - Add alt text
   - Compress with TinyPNG

3. **Add sitemap.xml**

---

## 📄 License

Free to use for personal and commercial projects.

---

**Made with ❤️ using Apple design principles**

**Version 2.0** — Now with video background & hamburger menu! 🎉
