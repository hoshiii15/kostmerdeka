// Apple-style Professional Scrollytelling
document.addEventListener('DOMContentLoaded', function () {
    // Year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ===== HAMBURGER MENU TOGGLE =====
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.getElementById('main-nav') || document.querySelector('.nav');

    function closeMenu() {
        if (!hamburger || !navMenu) return;
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    function openMenu() {
        if (!hamburger || !navMenu) return;
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            const isOpen = navMenu.classList.contains('active');
            if (isOpen) closeMenu(); else openMenu();
        });

        // Close menu when clicking nav link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        // Close on ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' || e.key === 'Esc') {
                closeMenu();
            }
        });

        // Click outside to close (mobile)
        document.addEventListener('click', (e) => {
            if (!navMenu.classList.contains('active')) return;
            // If click target is inside nav or hamburger, ignore
            if (navMenu.contains(e.target) || hamburger.contains(e.target)) return;
            closeMenu();
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

    // ===== TESTIMONIALS CAROUSEL (Slide Animation) =====
    const carouselList = document.querySelector('.carousel-list');
    const testimonials = document.querySelectorAll('.carousel-list .testimonial');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    const carousel = document.querySelector('.testimonial-carousel');
    
    let currentIndex = 0;
    const totalSlides = testimonials.length;
    let autoplay;
    
    // Create dots dynamically
    if (dotsContainer && totalSlides > 0) {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetAutoplay();
            });
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function goToSlide(index, animate = true) {
        if (!carouselList) return;
        
        currentIndex = index;
        const offset = -currentIndex * 100;
        
        if (animate) {
            carouselList.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        } else {
            carouselList.style.transition = 'none';
        }
        
        carouselList.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    function nextSlide() {
        const newIndex = (currentIndex + 1) % totalSlides;
        goToSlide(newIndex);
    }

    function prevSlide() {
        const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(newIndex);
    }

    function resetAutoplay() {
        clearInterval(autoplay);
        autoplay = setInterval(nextSlide, 7000);
    }

    // Button controls
    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoplay();
    });
    
    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoplay();
    });

    // Auto rotate
    if (carousel) {
        autoplay = setInterval(nextSlide, 7000);
        carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
        carousel.addEventListener('mouseleave', resetAutoplay);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!carousel) return;
        const rect = carousel.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                resetAutoplay();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                resetAutoplay();
            }
        }
    });

    // Touch/Swipe support with live tracking
    if (carousel && carouselList) {
        let startX = 0;
        let startY = 0;
        let isDragging = false;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationID = 0;

        // Touch events
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isDragging = true;
            animationID = requestAnimationFrame(animation);
            carouselList.style.transition = 'none';
            clearInterval(autoplay);
        }, { passive: true });

        carousel.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const diffX = currentX - startX;
            const diffY = Math.abs(currentY - startY);
            
            // Only horizontal swipe
            if (Math.abs(diffX) > diffY) {
                const slideWidth = carousel.offsetWidth;
                currentTranslate = prevTranslate + (diffX / slideWidth) * 100;
                
                // Limit swipe range
                const maxTranslate = 0;
                const minTranslate = -(totalSlides - 1) * 100;
                currentTranslate = Math.max(minTranslate, Math.min(maxTranslate, currentTranslate));
            }
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            cancelAnimationFrame(animationID);
            
            const movedBy = currentTranslate - prevTranslate;
            
            // Determine if should change slide
            if (Math.abs(movedBy) > 15) { // 15% threshold
                if (movedBy < 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            } else {
                goToSlide(currentIndex);
            }
            
            prevTranslate = -currentIndex * 100;
            currentTranslate = prevTranslate;
            resetAutoplay();
        });

        // Mouse drag events
        carousel.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
            animationID = requestAnimationFrame(animation);
            carouselList.style.transition = 'none';
            carousel.style.cursor = 'grabbing';
            clearInterval(autoplay);
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const currentX = e.clientX;
            const diffX = currentX - startX;
            const slideWidth = carousel.offsetWidth;
            currentTranslate = prevTranslate + (diffX / slideWidth) * 100;
            
            // Limit drag range
            const maxTranslate = 0;
            const minTranslate = -(totalSlides - 1) * 100;
            currentTranslate = Math.max(minTranslate, Math.min(maxTranslate, currentTranslate));
        });

        carousel.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            cancelAnimationFrame(animationID);
            carousel.style.cursor = 'grab';
            
            const movedBy = currentTranslate - prevTranslate;
            
            if (Math.abs(movedBy) > 15) {
                if (movedBy < 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            } else {
                goToSlide(currentIndex);
            }
            
            prevTranslate = -currentIndex * 100;
            currentTranslate = prevTranslate;
            resetAutoplay();
        });

        carousel.addEventListener('mouseleave', () => {
            if (isDragging) {
                isDragging = false;
                cancelAnimationFrame(animationID);
                carousel.style.cursor = 'grab';
                goToSlide(currentIndex);
                prevTranslate = -currentIndex * 100;
                currentTranslate = prevTranslate;
            }
        });

        function animation() {
            if (isDragging) {
                carouselList.style.transform = `translateX(${currentTranslate}%)`;
                requestAnimationFrame(animation);
            }
        }

        // Set initial cursor
        carousel.style.cursor = 'grab';
        prevTranslate = 0;
        currentTranslate = 0;
    }

    // ===== SMOOTH SCROLL FOR NAVIGATION (Apple easing) =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prefer the element's hash (handles absolute URLs too)
            const hash = this.hash || this.getAttribute('href');
            if (!hash || hash === '#') return; // ignore empty anchors

            // Try to resolve the target element
            let target = null;
            try {
                target = document.querySelector(hash);
            } catch (err) {
                // invalid selector, try by id fallback
                const id = hash.replace(/^#/, '');
                target = document.getElementById(id);
            }

            if (!target) {
                // If target not found, allow default behavior (or no-op)
                // Log in console to help debug missing IDs
                console.warn('Smooth-scroll: target not found for', hash);
                return;
            }

            // Only prevent default when we will handle scrolling
            e.preventDefault();
            const headerOffset = 48; // Apple header height

            // Use scrollIntoView for more consistent browser behavior, then adjust for fixed header
            try {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                // After a short delay, nudge the page up by headerOffset to account for fixed header.
                // Use a timeout because scrollIntoView is async and browsers vary in timing.
                setTimeout(() => {
                    // Use instant behavior on the nudge to avoid double-smooth animation issues
                    window.scrollBy({ top: -headerOffset, left: 0, behavior: 'smooth' });
                    // update the fragment identifier in the URL without jumping
                    if (history.replaceState) {
                        history.replaceState(null, '', hash);
                    } else {
                        location.hash = hash;
                    }
                }, 300);
            } catch (err) {
                // Fallback to manual calculation
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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
