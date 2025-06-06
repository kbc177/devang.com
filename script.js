// ===============================
// 1. Set Current Year in Footer
// ===============================
document.getElementById("year").textContent = new Date().getFullYear();


// =====================================
// 2. Scroll-triggered Fade-in Animation
// =====================================

// Select all elements with class 'fade-in'
const faders = document.querySelectorAll('.fade-in');

// Create IntersectionObserver instance
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // Add 'visible' class when in view
    entry.target.classList.add('visible');

    // Stop observing once it has appeared
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.1, // Trigger when 10% is visible
});

// Observe each .fade-in element
faders.forEach(fade => {
  appearOnScroll.observe(fade);
});
