(function () {
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.addEventListener('DOMContentLoaded', function () {

        /* PRELOADER / WELCOME ANIMATION */
        var preloader = document.getElementById('preloader');
        var popupReadyAt = 900; // ms from now before the entry popup may show; raised once welcome anim runs
        if (preloader) {
            var hidePreloader = function () {
                if (preloader.classList.contains('is-hidden')) return;
                preloader.classList.add('is-hidden');
                openEntryPopup();
            };
            preloader.addEventListener('click', hidePreloader);

            if (window.gsap && !reduceMotion) {
                var tl = gsap.timeline({ onComplete: hidePreloader });
                tl.set('#preloader-logo', { scale: 0.9, y: 10, opacity: 0 })
                  .set('.preloader-dot', { scale: 0, opacity: 0 })
                  .set('#preloader-tag', { opacity: 0, y: 8 })
                  .to('#preloader-logo', { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' })
                  .to('.preloader-dot', { scale: 1, opacity: 1, duration: 0.3, stagger: 0.04, ease: 'power2.out' }, '-=0.3')
                  .to('#preloader-tag', { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.15')
                  .to({}, { duration: 0.3 })
                  .to('#preloader', { opacity: 0, duration: 0.4, ease: 'power1.inOut' });
                popupReadyAt = 400;
            } else {
                document.body.classList.add('no-gsap');
                window.addEventListener('load', function () { setTimeout(hidePreloader, 600); });
            }
            setTimeout(hidePreloader, 6000); // absolute safety net
        }

        /* SCROLL REVEAL */
        var items = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window) || items.length === 0) {
            items.forEach(function (el) { el.classList.add('is-visible'); });
        } else {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });
            items.forEach(function (el) { observer.observe(el); });
        }

        /* NAV: floating island on scroll + SCROLL PROGRESS BAR */
        var nav = document.querySelector('nav.site-nav');
        var progressBar = document.getElementById('scroll-progress');
        window.addEventListener('scroll', function () {
            if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 40);
            if (progressBar) {
                var h = document.documentElement;
                var scrollable = h.scrollHeight - h.clientHeight;
                var pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
                progressBar.style.width = pct + '%';
            }
        }, { passive: true });

        /* ENTRY POPUP — shows on every visit (short-term Narón enrollment push) */
        var popup = document.getElementById('entry-popup');
        function openEntryPopup() {
            if (!popup) return;
            setTimeout(function () { popup.classList.add('is-open'); }, popupReadyAt);
        }
        if (popup) {
            var closePopup = function () { popup.classList.remove('is-open'); };
            var closeBtn = popup.querySelector('.popup-close');
            if (closeBtn) closeBtn.addEventListener('click', closePopup);
            popup.addEventListener('click', function (e) { if (e.target === popup) closePopup(); });
            document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePopup(); });
            if (!preloader) openEntryPopup(); // no preloader on this page: show on its own timer
        }

        if (reduceMotion) return; // skip decorative motion below for users who asked for less

        /* 3D TILT + CURSOR GLOW on cards */
        var tiltEls = document.querySelectorAll('.card, .photo-card, .featured-movementes');
        tiltEls.forEach(function (el) {
            el.classList.add('tilt-glow');
            el.addEventListener('mousemove', function (e) {
                var r = el.getBoundingClientRect();
                var x = e.clientX - r.left, y = e.clientY - r.top;
                var rotateY = ((x / r.width) - 0.5) * 8;
                var rotateX = ((y / r.height) - 0.5) * -8;
                el.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
                el.style.setProperty('--mx', (x / r.width) * 100 + '%');
                el.style.setProperty('--my', (y / r.height) * 100 + '%');
            });
            el.addEventListener('mouseleave', function () {
                el.style.transform = '';
            });
        });

        /* MAGNETIC BUTTONS */
        var magnetEls = document.querySelectorAll('.btn-primary, .btn-whatsapp');
        magnetEls.forEach(function (el) {
            el.classList.add('btn-magnetic');
            el.addEventListener('mousemove', function (e) {
                var r = el.getBoundingClientRect();
                var x = e.clientX - (r.left + r.width / 2);
                var y = e.clientY - (r.top + r.height / 2);
                el.style.transform = 'translate(' + (x * 0.18) + 'px,' + (y * 0.3) + 'px)';
            });
            el.addEventListener('mouseleave', function () {
                el.style.transform = '';
            });
        });

        /* COUNT-UP NUMBERS */
        var counters = document.querySelectorAll('.count-up');
        if (counters.length && 'IntersectionObserver' in window) {
            var countObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    var el = entry.target;
                    var target = parseInt(el.getAttribute('data-target'), 10) || 0;
                    var duration = 1200;
                    var start = null;
                    function step(ts) {
                        if (!start) start = ts;
                        var progress = Math.min((ts - start) / duration, 1);
                        el.textContent = Math.floor(progress * target);
                        if (progress < 1) requestAnimationFrame(step);
                        else el.textContent = target;
                    }
                    requestAnimationFrame(step);
                    countObserver.unobserve(el);
                });
            }, { threshold: 0.5 });
            counters.forEach(function (el) { countObserver.observe(el); });
        }
    });
})();
