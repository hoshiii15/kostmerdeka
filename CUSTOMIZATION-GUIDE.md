# 🎨 Customization Guide — Kost Merdeka

Panduan lengkap untuk menyesuaikan konten, gambar, dan informasi kontak di landing page Anda.

---

## 📱 Contact Information

### 1. **WhatsApp Number**

Cari dan ganti semua instance `6281234567890` dengan nomor WhatsApp Anda:

**Lokasi di `index.html`:**

```html
<!-- Line ~215 -->
<a href="tel:+6281234567890" class="phone-link" id="contactPhone"
  >+62 812-3456-7890</a
>

<!-- Line ~217 -->
<a href="https://wa.me/6281234567890" class="btn btn-primary" id="whatsappBtn"
  >WhatsApp</a
>

<!-- Line ~218 -->
<a href="tel:+6281234567890" class="btn btn-secondary" id="phoneBtn">Telepon</a>
```

**Format:**

- `https://wa.me/6281234567890` → ganti dengan nomor Anda (tanpa +, spasi, atau tanda -)
- `tel:+6281234567890` → untuk link telepon
- Display text: `+62 812-3456-7890` → bisa pakai format yang Anda mau

**Contoh:**

```html
<!-- Jika nomor Anda 0821-9999-8888 -->
<a href="https://wa.me/6282199998888">WhatsApp</a>
<a href="tel:+6282199998888">Telepon</a>
<span>+62 821-9999-8888</span>
```

---

### 2. **Email Address**

Update email di section contact:

**Lokasi di `index.html` (line ~220):**

```html
<p>
  <strong>Email:</strong>
  <a href="mailto:info@kostmerdeka.com" id="emailLink">info@kostmerdeka.com</a>
</p>
```

**Ganti dengan:**

```html
<p>
  <strong>Email:</strong>
  <a href="mailto:your@email.com" id="emailLink">your@email.com</a>
</p>
```

---

### 3. **Physical Address**

Update alamat lengkap kost:

**Lokasi di `index.html` (line ~221):**

```html
<p>
  <strong>Alamat:</strong>
  <span id="addressText">Jl. Merdeka No. 123, Malang, Jawa Timur</span>
</p>
```

**Ganti dengan alamat sebenarnya:**

```html
<p>
  <strong>Alamat:</strong>
  <span id="addressText"
    >Jl. Veteran No. 45, Lowokwaru, Malang, Jawa Timur 65145</span
  >
</p>
```

---

## 🗺️ Google Maps Embed

### Cara Update Map:

#### **Opsi 1: Menggunakan Google Maps (Recommended)**

1. Buka [Google Maps](https://maps.google.com)
2. Cari alamat kost Anda
3. Klik tombol **Share** / **Bagikan**
4. Pilih tab **Embed a map** / **Sematkan peta**
5. Copy kode iframe yang diberikan
6. Paste ke `index.html`

**Lokasi di `index.html` (line ~225):**

```html
<iframe
  id="mapEmbed"
  src="https://www.google.com/maps/embed?pb=..."
  allowfullscreen=""
  loading="lazy"
></iframe>
```

#### **Opsi 2: Generate Manual**

Jika Anda tahu koordinat (latitude, longitude):

```html
<iframe
  id="mapEmbed"
  src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=LATITUDE,LONGITUDE"
  allowfullscreen=""
  loading="lazy"
>
</iframe>
```

**Contoh koordinat Malang:**

- Latitude: -7.9666
- Longitude: 112.6326

---

## 🖼️ Images

### Required Images (simpan di folder `images/`):

| File                | Size Recommended   | Purpose                                          |
| ------------------- | ------------------ | ------------------------------------------------ |
| `kost-luar.jpeg`    | 1920x1080px        | Hero background (fallback jika video tidak load) |
| `hero-video.mp4`    | 1920x1080px, <10MB | **NEW!** Video background hero (optional)        |
| `room-standard.jpg` | 800x600px          | Kamar tipe Standard                              |
| `room-deluxe.jpg`   | 800x600px          | Kamar tipe Deluxe                                |
| `room-premium.jpg`  | 800x600px          | Kamar tipe Premium                               |
| `gallery-1.jpg`     | 800x600px          | Galeri foto 1                                    |
| `gallery-2.jpg`     | 800x600px          | Galeri foto 2                                    |
| `gallery-3.jpg`     | 800x600px          | Galeri foto 3                                    |
| `gallery-4.jpg`     | 800x600px          | Galeri foto 4                                    |

### **NEW: Video Background Setup**

#### Option 1: Use Video

1. Rekam video singkat kost Anda (10-15 detik)
2. Compress ke ukuran <10MB dengan tools seperti:
   - [HandBrake](https://handbrake.fr/) (free)
   - [CloudConvert](https://cloudconvert.com/mp4-converter) (online)
3. Save sebagai `hero-video.mp4` di folder `images/`
4. Video akan auto-play di background hero section

**Video Specs:**

- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 atau 1280x720
- Frame rate: 30fps
- Duration: 10-20 detik (loop otomatis)
- File size: <10MB untuk loading cepat

#### Option 2: Image Only (No Video)

Jika tidak ingin pakai video, hapus file `hero-video.mp4` atau rename. Landing page akan otomatis fallback ke image `kost-luar.jpeg`.

---

### Tips Optimasi Gambar:

**Tools untuk compress:**

- [TinyPNG](https://tinypng.com/) — compress PNG/JPG
- [Squoosh](https://squoosh.app/) — online image optimizer
- [ImageOptim](https://imageoptim.com/) — Mac app

**Target file size:**

- Hero image: 200-500KB
- Room images: 100-200KB each
- Gallery images: 150-300KB each
- Video: <10MB

---

## 🏠 Room Information

### Update Room Types & Pricing

**Lokasi di `index.html` (lines ~105-155):**

```html
<!-- Standard Room -->
<div class="room-card reveal stagger-1">
  <img src="images/room-standard.jpg" alt="Kamar Standard" />
  <h3>Standard</h3>
  <p>
    Kamar nyaman dengan fasilitas dasar lengkap. Ideal untuk mahasiswa atau
    pekerja yang mencari hunian terjangkau dengan kualitas terbaik.
  </p>
  <ul>
    <li>Ukuran 3x4 meter</li>
    <li>Kasur single + lemari</li>
    <li>Meja belajar</li>
    <li>Kamar mandi dalam</li>
  </ul>
  <p
    class="price"
    style="font-size: 28px; font-weight: 600; margin-top: 1.5rem;"
  >
    Rp 1.200.000<span style="font-size: 17px; color: var(--muted);"
      >/bulan</span
    >
  </p>
  <a
    href="https://wa.me/6281234567890?text=Halo, saya tertarik dengan Kamar Standard"
    class="btn btn-primary"
    >Hubungi</a
  >
</div>
```

**Yang bisa diubah:**

- **Judul**: `<h3>Standard</h3>` → ganti sesuai tipe kamar Anda
- **Deskripsi**: Paragraph text
- **Fasilitas**: List items di `<ul><li>`
- **Harga**: `Rp 1.200.000` → update sesuai harga sebenarnya
- **WhatsApp link**: Text parameter untuk pre-filled message

**Contoh custom message WhatsApp:**

```html
<a href="https://wa.me/6282199998888?text=Halo, saya ingin info kamar Premium"
  >Hubungi</a
>
```

---

## ✨ Features Section

### Update 6 Feature Cards

**Lokasi di `index.html` (lines ~75-102):**

```html
<div class="feature-card reveal stagger-1">
  <div class="feature-icon">🏠</div>
  <h3>Lokasi Strategis</h3>
  <p>
    Berada di pusat kota dengan akses mudah ke kampus, pusat perbelanjaan, dan
    transportasi umum.
  </p>
</div>
```

**Yang bisa diubah:**

- **Icon**: Emoji atau bisa ganti dengan SVG icon
- **Judul**: `<h3>` text
- **Deskripsi**: `<p>` text

**Icon alternatives:**

- 🏠 → 🏢 (building)
- 📶 → 🌐 (wifi)
- 🔒 → 🛡️ (security)
- 💧 → 🚿 (water)
- ⚡ → 🔌 (electricity)
- 🧹 → ✨ (cleaning)

---

## 💬 Testimonials

### Update Customer Reviews

**Lokasi di `index.html` (lines ~188-206):**

```html
<div class="testimonial active">
  <p class="testimonial-text">
    Fasilitasnya lengkap, pelayanan ramah, dan lokasi strategis. Sangat
    merekomendasikan Kost Merdeka!
  </p>
  <p class="testimonial-author">— Sarah, Mahasiswa</p>
</div>
```

**Tips menulis testimonial:**

- Pendek (1-2 kalimat)
- Spesifik (sebutkan fasilitas/pelayanan tertentu)
- Include nama + pekerjaan/status

**Format author:**

```html
<p class="testimonial-author">— Nama, Status/Pekerjaan</p>
```

---

## 📊 Stats Section

### Update Numbers

**Lokasi di `index.html` (lines ~60-70):**

```html
<div class="stat-item reveal stagger-1">
  <div class="stat-number" data-target="50">0</div>
  <div class="stat-label">Kamar Tersedia</div>
</div>
```

**Yang bisa diubah:**

- `data-target="50"` → angka target untuk animated counter
- `<div class="stat-label">` → label text

**Suggestions:**

- Kamar tersedia
- Penghuni puas
- Tahun pengalaman
- Fasilitas premium

---

## 🎨 Color Scheme (Advanced)

Jika ingin ganti warna, edit di `style.css`:

**Lokasi di `style.css` (lines ~1-10):**

```css
:root {
  --bg: #000000; /* Background (black) */
  --text: #f5f5f7; /* Text (light gray) */
  --muted: #86868b; /* Muted text */
  --accent: #0066cc; /* Accent color (Apple blue) */
  --max-width: 980px; /* Content max width */
  --border-radius: 18px; /* Card corners */
}
```

**Rekomendasi accent colors:**

- Apple Blue: `#0066CC` (current)
- Modern Green: `#34C759`
- Purple: `#AF52DE`
- Orange: `#FF9500`
- Red: `#FF3B30`

---

## 🚀 Quick Start Checklist

- [ ] Ganti nomor WhatsApp (3 lokasi di HTML)
- [ ] Update email address
- [ ] Update alamat lengkap
- [ ] Replace Google Maps embed
- [ ] Upload 9 gambar ke folder `images/`
- [ ] (Optional) Upload video background `hero-video.mp4`
- [ ] Update harga kamar (3 room cards)
- [ ] Custom fasilitas kamar
- [ ] Update feature cards sesuai kebutuhan
- [ ] Ganti testimonials dengan review asli
- [ ] Update stats numbers
- [ ] Test di browser (Chrome, Safari, Firefox)
- [ ] Test responsiveness (mobile, tablet, desktop)
- [ ] Test WhatsApp links
- [ ] Test email links
- [ ] Test video playback (jika pakai video)

---

## 📝 File Structure

```
kost-merdeka2/
├── index.html              ← Main HTML (edit contact info, images, text)
├── style.css               ← Styling (edit colors, spacing)
├── script.js               ← Interactions (edit animations, timings)
├── images/
│   ├── kost-luar.jpeg     ← Hero background image
│   ├── hero-video.mp4     ← NEW! Hero video background (optional)
│   ├── room-standard.jpg  ← Standard room photo
│   ├── room-deluxe.jpg    ← Deluxe room photo
│   ├── room-premium.jpg   ← Premium room photo
│   ├── gallery-1.jpg      ← Gallery photo 1
│   ├── gallery-2.jpg      ← Gallery photo 2
│   ├── gallery-3.jpg      ← Gallery photo 3
│   └── gallery-4.jpg      ← Gallery photo 4
├── README.md              ← Setup instructions
├── SCROLLYTELLING-GUIDE.md  ← Feature documentation
├── APPLE-REDESIGN.md      ← Apple design explained
└── CUSTOMIZATION-GUIDE.md ← This file!
```

---

## 🆘 Troubleshooting

### **Video tidak muncul?**

- Check file size (<10MB recommended)
- Ensure MP4 format (H.264 codec)
- Check filename exact: `hero-video.mp4`
- Clear browser cache dan refresh

### **Map tidak muncul?**

- Check internet connection
- Validate iframe embed code dari Google Maps
- Check browser console untuk errors

### **Gambar tidak muncul?**

- Check path: `images/nama-file.jpg` (case sensitive!)
- Validate file exists di folder `images/`
- Check file extension (.jpg vs .jpeg)

### **WhatsApp link tidak buka?**

- Remove spasi dari nomor: `6282199998888` ✅
- Jangan pakai format: `0821-9999-8888` ❌
- Format: `628...` tanpa `+` untuk `wa.me` link

---

## 💡 Pro Tips

1. **SEO**: Update `<title>` dan `<meta description>` di HTML
2. **Performance**: Compress semua images sebelum upload
3. **Mobile**: Test di real device, bukan cuma browser devtools
4. **Speed**: Gunakan video <5MB untuk mobile users
5. **Backup**: Save original files sebelum edit
6. **Version Control**: Consider using Git untuk track changes

---

**Need help?** Check other guides:

- `README.md` — Basic setup
- `SCROLLYTELLING-GUIDE.md` — Animation features
- `APPLE-REDESIGN.md` — Design philosophy

**Happy customizing!** 🎉
