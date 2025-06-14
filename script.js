// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true
});

// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animate progress bars when in view
function animateProgressBars() {
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
}

window.addEventListener('load', animateProgressBars);

// Optional: Gallery modal logic (Bootstrap handles modal, so no extra JS needed)
// You can add more interactivity here if you want 