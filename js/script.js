// Sticky nav 
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Scroll reveal via IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Highlight today's hours row 
const todayIdx = new Date().getDay();
const todayRow = document.querySelector(`#hours-table tr[data-day="${todayIdx}"]`);
if (todayRow) todayRow.classList.add('is-today');