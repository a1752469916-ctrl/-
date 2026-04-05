// ─── NAV SCROLL ───
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── MOBILE MENU ───
const toggle = document.getElementById('navToggle');
const links  = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  links.classList.toggle('open');
  // close on link click
});
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('open'));
});

// ─── SCROLL REVEAL ───
const reveals = document.querySelectorAll(
  '.course-card, .feature-item, .testimonial, .purchase-card, ' +
  '.teacher-inner, .section-header'
);

reveals.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => io.observe(el));

// ─── HERO ANIMATIONS ───
document.querySelectorAll('.hero-eyebrow, .hero-title, .hero-subtitle, .hero-actions, .hero-stats')
  .forEach((el, i) => {
    el.classList.add('fade-in', `fade-in-delay-${i}`);
  });

// Smooth active state on nav links
const sections = document.querySelectorAll('section[id], header[id]');
const navAs = document.querySelectorAll('.nav-links a');

const sectionIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => {
        a.style.opacity = a.getAttribute('href') === `#${e.target.id}` ? '1' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionIO.observe(s));
