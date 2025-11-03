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
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const carouselList = document.querySelector('.carousel-list');
    const testimonials = document.querySelectorAll('.carousel-list .testimonial');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    const carousel = document.querySelector('.testimonial-carousel');

    if (carouselWrapper && carouselList && carousel && testimonials.length > 0) {
        let currentIndex = 0;
        const totalSlides = testimonials.length;
        let autoplay;
        let isDragging = false;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationID = 0;

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

        function setPositionByIndex() {
            currentTranslate = currentIndex * -carouselWrapper.offsetWidth;
            prevTranslate = currentTranslate;
            setSliderPosition();
        }

        function setSliderPosition() {
            carouselList.style.transform = `translateX(${currentTranslate}px)`;
        }

        function goToSlide(index) {
            currentIndex = index;
            carouselList.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            setPositionByIndex();
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
        function touchStart(index) {
            return function (event) {
                isDragging = true;
                startPos = getPositionX(event);
                animationID = requestAnimationFrame(animation);
                carouselList.style.transition = 'none';
                clearInterval(autoplay);
                carousel.style.cursor = 'grabbing';
            };
        }

        function touchMove(event) {
            if (isDragging) {
                const currentPosition = getPositionX(event);
                currentTranslate = prevTranslate + currentPosition - startPos;
            }
        }

        function touchEnd() {
            isDragging = false;
            cancelAnimationFrame(animationID);
            carousel.style.cursor = 'grab';

            const movedBy = currentTranslate - prevTranslate;

            // If moved enough negative then snap to next slide, if moved enough positive snap to prev
            if (movedBy < -100 && currentIndex < totalSlides - 1) {
                currentIndex += 1;
            }
            if (movedBy > 100 && currentIndex > 0) {
                currentIndex -= 1;
            }

            carouselList.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            setPositionByIndex();
            updateDots();
            resetAutoplay();
        }

        function getPositionX(event) {
            return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
        }

        function animation() {
            setSliderPosition();
            if (isDragging) requestAnimationFrame(animation);
        }

        // Event listeners
        carousel.addEventListener('touchstart', touchStart(currentIndex), { passive: true });
        carousel.addEventListener('touchmove', touchMove, { passive: true });
        carousel.addEventListener('touchend', touchEnd);

        carousel.addEventListener('mousedown', touchStart(currentIndex));
        carousel.addEventListener('mousemove', touchMove);
        carousel.addEventListener('mouseup', touchEnd);
        carousel.addEventListener('mouseleave', () => {
            if (isDragging) {
                touchEnd();
            }
        });

        // Set initial cursor and position
        carousel.style.cursor = 'grab';
        setPositionByIndex();
    } // End of carousel if block

    // ===== SMOOTH SCROLL FOR NAVIGATION (Apple easing) =====
    // Delegated handler in capture phase to ensure clicks are handled even
    // if other scripts intercept or stop propagation (fixes issues after deploy).
    (function () {
        const headerOffset = 48; // header height to offset scroll

        function findTargetFromHash(hash) {
            if (!hash || hash === '#') return null;
            // try by ID first
            const id = hash.replace(/^#/, '');
            let target = document.getElementById(id);
            if (target) return target;
            // fallback to querySelector (handles complex selectors)
            try {
                target = document.querySelector(hash);
            } catch (err) {
                target = null;
            }
            return target;
        }

        function smoothScrollTo(target, hash) {
            if (!target) return;
            try {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => {
                    // nudge up to account for fixed header
                    window.scrollBy({ top: -headerOffset, left: 0, behavior: 'smooth' });
                    if (history.replaceState) history.replaceState(null, '', hash);
                }, 300);
            } catch (err) {
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }

        // Capture-phase delegated click listener
        document.addEventListener('click', function (e) {
            const anchor = e.target.closest && e.target.closest('a[href^="#"]');
            if (!anchor) return;

            const hash = anchor.getAttribute('href');
            const target = findTargetFromHash(hash);
            if (!target) {
                // If no in-page target, allow default (could be external or noop)
                return;
            }

            // Prevent default navigation and perform a smooth scroll
            e.preventDefault();
            smoothScrollTo(target, hash);
        }, true); // useCapture = true
    })();

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
