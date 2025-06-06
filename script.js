// ===============================
// 1. Set Current Year in Footer
// ===============================
document.getElementById("year").textContent = new Date().getFullYear();


// =====================================
// 2. Scroll-triggered Fade-in Animation
// =====================================

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.1,
});

faders.forEach(fade => {
  appearOnScroll.observe(fade);
});


// =============================
// 3. Typing Animation in Header
// =============================

const phrases = [
  "Computer Science Student",
  "Web Developer",
  "Problem Solver"
];

const typingElement = document.getElementById("typing-text");
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  const displayed = currentPhrase.substring(0, letterIndex);
  typingElement.textContent = displayed;

  if (!isDeleting && letterIndex < currentPhrase.length) {
    letterIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && letterIndex > 0) {
    letterIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}

type();
