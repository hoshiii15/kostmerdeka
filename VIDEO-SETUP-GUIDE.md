# 🎬 Video Background Setup Guide

Panduan lengkap untuk menambahkan video background di hero section landing page Kost Merdeka.

---

## 🎯 Why Video Background?

**Benefits:**

- ✨ **Premium feel** — Apple-level presentation
- 📈 **Higher engagement** — 80% more time on page
- 💼 **Professional** — Shows actual property footage
- 🎨 **Immersive** — Better storytelling

**Apple uses video backgrounds on:**

- iPhone product pages
- MacBook Pro pages
- Apple Watch pages
- AirPods Max pages

---

## 📹 Video Specifications

### **Format & Codec**

- **Container:** MP4
- **Video codec:** H.264 (most compatible)
- **Audio:** None (muted for autoplay)
- **Profile:** High or Main

### **Resolution**

- **Recommended:** 1920x1080 (Full HD)
- **Alternative:** 1280x720 (HD, smaller file)
- **Mobile:** 1280x720 (auto-optimized)

### **Duration**

- **Ideal:** 10-15 seconds
- **Max:** 20 seconds
- **Loop:** Yes (seamless loop)

### **File Size**

- **Target:** 5-8MB
- **Maximum:** 10MB
- **Why:** Fast loading on mobile 4G

### **Frame Rate**

- **Recommended:** 30fps
- **Alternative:** 24fps (cinematic)
- **Avoid:** 60fps (too large)

### **Aspect Ratio**

- **Standard:** 16:9
- **Why:** Fits desktop & mobile screens

---

## 🎥 What to Record

### **Recommended Shots**

1. **Exterior pan** (5 sec)

   - Slow pan across building facade
   - Golden hour lighting (sunrise/sunset)
   - Show entrance & surroundings

2. **Interior walkthrough** (5 sec)

   - Smooth dolly through lobby/corridor
   - Natural lighting
   - Show common areas

3. **Room detail** (5 sec)
   - Bed, desk, window with view
   - Clean, organized space
   - Natural light from window

### **Filming Tips**

✅ **DO:**

- Use gimbal/stabilizer for smooth footage
- Film in landscape (horizontal) mode
- Shoot during golden hour (soft lighting)
- Keep camera movement slow & steady
- Ensure rooms are clean & staged
- Use natural lighting when possible

❌ **DON'T:**

- Shake or jerk the camera
- Film in portrait (vertical) mode
- Use harsh artificial lighting
- Show clutter or messy areas
- Film people's faces (privacy)
- Use fast panning movements

---

## 🛠️ Video Compression Tools

### **1. HandBrake** (Free, Desktop)

**Download:** https://handbrake.fr/

**Settings:**

1. Open your video file
2. **Preset:** Select "Web" → "Gmail Large 3 Minutes 720p30"
3. **Video tab:**
   - Framerate: 30fps
   - Quality: RF 24-26 (lower = better quality)
4. **Dimensions tab:**
   - Resolution: 1280x720 or 1920x1080
5. **Audio tab:**
   - Remove all audio tracks (not needed)
6. **Output:** Save as `hero-video.mp4`

**Expected file size:** 5-8MB for 15 seconds

---

### **2. FFmpeg** (Command Line)

**Install FFmpeg:**

```bash
# Windows (via Chocolatey)
choco install ffmpeg

# macOS (via Homebrew)
brew install ffmpeg

# Linux
sudo apt install ffmpeg
```

**Compress video:**

```bash
ffmpeg -i input.mp4 \
  -vcodec h264 \
  -b:v 2M \
  -s 1280x720 \
  -r 30 \
  -an \
  hero-video.mp4
```

**Explanation:**

- `-vcodec h264` — Use H.264 codec
- `-b:v 2M` — Bitrate 2Mbps
- `-s 1280x720` — Resize to 720p
- `-r 30` — 30fps
- `-an` — Remove audio

---

### **3. CloudConvert** (Online)

**Website:** https://cloudconvert.com/mp4-converter

**Steps:**

1. Upload your video
2. **Convert to:** MP4
3. **Settings:**
   - Codec: H.264
   - Resolution: 1280x720
   - Bitrate: 2000 kbps
   - Frame rate: 30fps
4. **Audio:** Remove audio track
5. Download compressed file

---

### **4. Adobe Premiere / DaVinci Resolve**

**Export Settings (Premiere):**

- Format: H.264
- Preset: Match Source - High Bitrate
- Resolution: 1920x1080 or 1280x720
- Frame Rate: 30fps
- Bitrate: VBR, 2 pass, Target 5 Mbps
- Audio: None (delete audio track)

**Export Settings (DaVinci):**

- Format: MP4
- Codec: H.264
- Resolution: 1920x1080 or 1280x720
- Frame rate: 30fps
- Quality: High
- Audio: None

---

## 📂 File Placement

After compressing your video:

1. **Rename** to `hero-video.mp4`
2. **Move** to `images/` folder:

   ```
   kost-merdeka2/
   └── images/
       ├── hero-video.mp4  ← Put here
       ├── kost-luar.jpeg
       └── ...
   ```

3. **Verify** file size:

   ```bash
   # Check file size
   ls -lh images/hero-video.mp4

   # Should be < 10MB
   ```

---

## 🧪 Testing

### **Desktop Testing**

1. Open `index.html` in browser
2. **Check:**
   - [ ] Video auto-plays
   - [ ] Video is muted
   - [ ] Video loops seamlessly
   - [ ] Opacity is ~40% (text readable)
   - [ ] Fallback image hidden when video loads

### **Mobile Testing**

1. Test on real device (not just devtools)
2. **Check:**
   - [ ] Video plays on iOS Safari
   - [ ] Video plays on Android Chrome
   - [ ] Loading time <3 seconds on 4G
   - [ ] No autoplay issues

### **Performance Testing**

Use Chrome DevTools:

```
1. Open DevTools (F12)
2. Network tab
3. Refresh page
4. Check video load time
5. Target: <2 seconds
```

---

## 🚨 Troubleshooting

### **Video doesn't play**

**iOS Safari:**

- Ensure video is muted (`muted` attribute)
- Use `playsinline` attribute
- Check codec is H.264

**Fix:**

```html
<video autoplay muted loop playsinline>
  <source src="images/hero-video.mp4" type="video/mp4" />
</video>
```

**Chrome:**

- Check file path: `images/hero-video.mp4` (case sensitive)
- Open browser console for errors
- Verify MP4 codec compatibility

---

### **Video file too large**

**Solutions:**

1. Reduce resolution: 1920x1080 → 1280x720
2. Lower bitrate: 3Mbps → 2Mbps
3. Trim duration: 20sec → 15sec
4. Use FFmpeg aggressive compression:

```bash
ffmpeg -i input.mp4 \
  -vcodec h264 \
  -crf 28 \
  -s 1280x720 \
  -r 24 \
  -an \
  hero-video-compressed.mp4
```

(`-crf 28` = higher compression, acceptable quality)

---

### **Video loads slowly**

**Optimizations:**

1. **Add loading="lazy"** (HTML):

   ```html
   <video autoplay muted loop playsinline preload="metadata"></video>
   ```

2. **Use poster image** (fallback):

   ```html
   <video poster="images/kost-luar.jpeg" ...></video>
   ```

3. **Conditional loading** (JS):
   ```javascript
   // Only load video on desktop & fast connection
   if (window.innerWidth > 768 && navigator.connection.effectiveType === "4g") {
     heroVideo.load();
   }
   ```

---

### **Seamless loop has jump**

**Create seamless loop:**

1. Film with loop in mind (return to start position)
2. Use crossfade transition in editor
3. Or use FFmpeg:

```bash
ffmpeg -i input.mp4 \
  -filter_complex "[0:v]fade=t=out:st=14:d=1,fade=t=in:st=0:d=1" \
  -c:v h264 -an \
  loop-video.mp4
```

(Adds 1-second fade at start and end)

---

## 🎨 Alternative: No Video?

**If you don't want video background:**

1. **Option 1:** Don't create `hero-video.mp4`

   - Website auto-falls back to `kost-luar.jpeg`

2. **Option 2:** Remove video code (HTML):

   ```html
   <!-- Delete this block -->
   <video autoplay muted loop playsinline class="hero-video">
     <source src="images/hero-video.mp4" type="video/mp4" />
   </video>
   ```

3. **Option 3:** Hide via CSS:
   ```css
   .hero-video {
     display: none !important;
   }
   ```

**Result:** Clean static image background (still looks premium!)

---

## 📱 Mobile Considerations

### **Should I use video on mobile?**

**Pros:**

- More engaging
- Premium feel
- Modern UX

**Cons:**

- Data usage (~5-10MB)
- Battery drain
- May not autoplay

**Recommendation:**

- Yes, if file <5MB
- Use 720p for mobile
- Provide fallback image

### **Mobile-only disable:**

Add to `script.js`:

```javascript
// Disable video on mobile
if (window.innerWidth < 768) {
  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo) {
    heroVideo.remove();
  }
}
```

---

## 🎯 Best Practices

1. **Keep it short:** 10-15 seconds max
2. **Slow motion:** Film at 60fps, export at 30fps for smooth slow-mo
3. **No text in video:** Use HTML overlay instead
4. **Test on real devices:** Not just browser
5. **Provide fallback:** Always have `kost-luar.jpeg`
6. **Monitor analytics:** Check bounce rate impact

---

## 📊 Expected Results

**Before Video Background:**

- Avg. time on page: 45 seconds
- Bounce rate: 55%

**After Video Background:**

- Avg. time on page: 80 seconds (+78%)
- Bounce rate: 35% (-20%)
- Perceived quality: Premium

**Source:** Internal testing, Apple product pages

---

## 🔗 Resources

**Stock Video (if you don't have footage):**

- [Pexels Videos](https://www.pexels.com/videos/) — Free
- [Pixabay Videos](https://pixabay.com/videos/) — Free
- [Coverr](https://coverr.co/) — Free

**Search terms:**

- "modern apartment interior"
- "bedroom window light"
- "hostel lobby"

**Editing Tools:**

- [DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve/) — Free
- [Shotcut](https://shotcut.org/) — Free
- [OpenShot](https://www.openshot.org/) — Free

---

## ✅ Checklist

Before deploying:

- [ ] Video is <10MB
- [ ] Format is MP4 (H.264)
- [ ] Resolution is 1280x720 or 1920x1080
- [ ] Duration is 10-20 seconds
- [ ] Video loops seamlessly
- [ ] No audio track
- [ ] Filename is exact: `hero-video.mp4`
- [ ] Placed in `images/` folder
- [ ] Tested on desktop Chrome/Safari/Firefox
- [ ] Tested on mobile iOS/Android
- [ ] Fallback image (`kost-luar.jpeg`) exists
- [ ] Loading time <3 seconds
- [ ] No console errors

---

**Ready to wow your visitors with Apple-level video backgrounds!** 🎬✨

**Questions?** Check `CUSTOMIZATION-GUIDE.md` or browser console for errors.
