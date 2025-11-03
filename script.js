// Apple-style Professional Scrollytelling
document.addEventListener('DOMContentLoaded', function () {
    // Year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ===== HAMBURGER MENU TOGGLE =====
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking nav link
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ===== VIDEO BACKGROUND HANDLER =====
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.addEventListener('loadeddata', () => {
            heroVideo.classList.add('loaded');
        });

        // Fallback if video doesn't load
        setTimeout(() => {
            if (!heroVideo.classList.contains('loaded')) {
                heroVideo.style.display = 'none';
            }
        }, 3000);
    }

    // ===== SCROLL PROGRESS BAR (Apple style) =====
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);

    let ticking = false;
    function updateScrollProgress() {
        const winScroll = window.pageYOffset || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height);
        progressBar.style.transform = `scaleX(${scrolled})`;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollProgress);
            ticking = true;
        }
    });
    updateScrollProgress();

    // ===== HEADER EFFECTS ON SCROLL =====
    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // ===== PARALLAX EFFECT ON HERO IMAGE (subtle Apple-style) =====
    const heroMedia = document.querySelector('.hero-media img');
    if (heroMedia && window.innerWidth > 734) { // Desktop only
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.15; // Subtle parallax
            if (scrolled < 800) {
                heroMedia.style.transform = `translateY(${rate}px) scale(1)`;
            }
        });
    }

    // ===== INTERSECTION OBSERVER FOR SCROLL REVEALS (Apple cubic-bezier) =====
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ===== ANIMATED COUNTERS (Apple smooth counting) =====
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(num => countObserver.observe(num));
    }

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const suffix = element.getAttribute('data-suffix') || '';
        const duration = 2500; // Apple uses slower, smoother animations
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Apple easing function (ease-out cubic)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(easeOut * target);

            element.textContent = current + suffix;

            if (frame === totalFrames) {
                clearInterval(counter);
                element.textContent = target + suffix;
            }
        }, frameDuration);
    }

    // ===== TESTIMONIALS CAROUSEL (Apple smooth) =====
    const list = document.querySelectorAll('.carousel-list .testimonial');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let idx = 0;
    const total = list.length;

    function show(i) {
        list.forEach((el, n) => {
            el.classList.toggle('active', n === i);
        });
    }

    function next() {
        idx = (idx + 1) % total;
        show(idx);
    }
    function prev() {
        idx = (idx - 1 + total) % total;
        show(idx);
    }

    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);

    // Auto rotate every 7s (Apple uses slower intervals)
    let autoplay = setInterval(next, 7000);
    const carousel = document.querySelector('.testimonial-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
        carousel.addEventListener('mouseleave', () => autoplay = setInterval(next, 7000));
    }

    // ===== SMOOTH SCROLL FOR NAVIGATION (Apple easing) =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 48; // Apple header height
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== GALLERY IMAGE INTERACTION (Apple minimal) =====
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function () {
            // Simple focus effect (could expand to lightbox)
            const currentTransform = this.style.transform;
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = currentTransform || '';
            }, 200);
        });
    });

    // ===== SCROLL-BASED IMAGE SCALING (Apple product pages effect) =====
    const heroImage = document.querySelector('.hero-media img');
    if (heroImage && window.innerWidth > 734) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const scrollRatio = entry.intersectionRatio;
                const scale = 1 + (1 - scrollRatio) * 0.05; // Subtle scale
                if (entry.isIntersecting) {
                    heroImage.style.transform = `scale(${Math.min(scale, 1.05)})`;
                }
            });
        }, {
            threshold: Array.from({ length: 100 }, (_, i) => i / 100)
        });

        observer.observe(document.querySelector('.hero'));
    }
});
