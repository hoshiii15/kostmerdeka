# Kost Merdeka — Landing Page

Ini adalah landing page statis sederhana untuk _Kost Merdeka_. Buatannya minimal, elegan, dan responsif dengan palet monokrom + aksen biru tua.

## ✨ Professional Scrollytelling Features

Landing page ini dilengkapi dengan efek scrollytelling modern:

- **Scroll Progress Bar** — Indikator progress di atas halaman saat scroll
- **Scroll-triggered Animations** — Elemen muncul dengan animasi saat masuk viewport
- **Parallax Effect** — Hero image bergerak lebih lambat saat scroll untuk depth effect
- **Staggered Reveals** — Animasi berurutan untuk features dan room cards
- **Animated Counters** — Statistik yang menghitung otomatis saat terlihat
- **Smooth Scroll** — Navigasi halus dengan custom easing
- **Interactive Hover States** — Transformasi 3D dan shadow pada cards
- **Enhanced Typography** — Gradient text pada heading utama

## Files Structure

- `index.html` — Halaman utama dengan 7 seksi (Hero, Features, **Stats**, Rooms, Gallery & Map, Testimonials, CTA)
- `style.css` — Styling utama dengan animations, transitions, dan hover effects
- `script.js` — Intersection Observer, parallax, counter animations, dan carousel

## Placeholder Images

Semua gambar berada di folder `images/` dan saat ini berfungsi sebagai placeholder. Silakan ganti file berikut dengan foto berkualitas tinggi Anda:

- `images/hero.jpg` — hero utama (tampak depan gedung)
- `images/room-standard.jpg`, `images/room-deluxe.jpg`, `images/room-premium.jpg` — foto tiap tipe kamar
- `images/gallery-1.jpg` ... `images/gallery-4.jpg` — galeri tambahan

Jika folder `images/` kosong, Anda dapat menambahkan foto dan memberi nama sesuai daftar di atas.

## Customization Guide

### Mengubah lokasi peta

Peta ter-embed di `index.html` menggunakan query Google Maps `Universitas Merdeka Malang`. Untuk mengganti ke alamat yang tepat, ubah atribut `src` iframe, contoh:

```html
<iframe
  src="https://www.google.com/maps?q=Jalan+Contoh+No+1+City&output=embed"
  ...
></iframe>
```

### Mengganti nomor WhatsApp

Link WhatsApp pada tombol-tombol booking menggunakan nomor placeholder `+6281234567890`. Ganti ke nomor asli di `index.html` (semua `wa.me/` links).

### Mengubah warna aksen

Edit variabel CSS di `style.css`:

```css
:root {
  --accent: #0b3d91; /* Ganti dengan kode warna pilihan Anda */
  --accent-light: #1a5bb8;
}
```

Untuk warna emas, gunakan: `--accent: #d4af37;` dan `--accent-light: #f0d475;`

### Menyesuaikan statistik

Edit nilai `data-target` pada elemen `.stat-number` di bagian Stats:

```html
<span class="stat-number" data-target="50" data-suffix="+">0+</span>
```

## Performance Tips

- Kompres foto sebelum upload (gunakan TinyPNG atau ImageOptim)
- Format optimal: WebP untuk web modern, fallback JPEG
- Ukuran rekomendasi:
  - Hero image: 1200x800px
  - Room images: 800x600px
  - Gallery images: 600x600px

## Browser Compatibility

- Chrome/Edge 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Mobile browsers (iOS Safari, Chrome Mobile) ✅

Intersection Observer dan CSS transforms didukung semua browser modern.

## Notes & Next Steps

- Tambahkan foto asli ke folder `images/`.
- Saya menggunakan teks "Dekat Universitas Merdeka" sebagai asumsi awal. Jika Anda ingin nama lokasi lain, beri tahu saya dan saya akan sesuaikan peta dan teks lokasi.
- Jika mau, saya bisa menambahkan ikon SVG yang lebih detil, animasi kecil, atau versi PDF untuk cetak.

Jika mau, saya dapat juga:

- Menghasilkan versi bahasa Inggris.
- Mengoptimalkan gambar kecil (responsive srcset).
- Menyambungkan form kontak atau integrasi booking.
