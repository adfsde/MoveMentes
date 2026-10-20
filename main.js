document.addEventListener('DOMContentLoaded', function () {
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

    var nav = document.querySelector('nav.site-nav');
    if (nav) {
        window.addEventListener('scroll', function () {
            nav.classList.toggle('is-scrolled', window.scrollY > 40);
        }, { passive: true });
    }

    var popup = document.getElementById('entry-popup');
    if (popup) {
        var alreadyShown = false;
        try { alreadyShown = sessionStorage.getItem('mm-popup-shown') === '1'; } catch (e) {}
        if (!alreadyShown) {
            setTimeout(function () {
                popup.classList.add('is-open');
                try { sessionStorage.setItem('mm-popup-shown', '1'); } catch (e) {}
            }, 900);
        }
        var closePopup = function () { popup.classList.remove('is-open'); };
        var closeBtn = popup.querySelector('.popup-close');
        if (closeBtn) closeBtn.addEventListener('click', closePopup);
        popup.addEventListener('click', function (e) { if (e.target === popup) closePopup(); });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePopup(); });
    }
});
