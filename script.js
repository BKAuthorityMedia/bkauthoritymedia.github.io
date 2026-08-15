document.addEventListener("DOMContentLoaded", () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Intersection Observer for fade-up animations
    if (!prefersReducedMotion) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -10% 0px', // Trigger slightly before it hits the bottom
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Stop observing once it has faded in
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const fadeElements = document.querySelectorAll('.fade-up');
        fadeElements.forEach(el => observer.observe(el));
    } else {
        // If reduced motion is enabled, make everything visible immediately
        const fadeElements = document.querySelectorAll('.fade-up');
        fadeElements.forEach(el => el.classList.add('visible'));
    }
});
