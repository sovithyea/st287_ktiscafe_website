// Sticky nav
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
  backToTop.classList.toggle('visible', window.scrollY > 600);
}, { passive: true });

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navOverlay = document.getElementById('nav-overlay');

function openNav() {
  navLinks.classList.add('open');
  navOverlay.classList.add('open');
  hamburger.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.setAttribute('aria-label', 'Close menu');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  navLinks.classList.remove('open');
  navOverlay.classList.remove('open');
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Open menu');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeNav() : openNav();
});

navOverlay.addEventListener('click', closeNav);
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeNav));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) closeNav();
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Today's hours row highlight
const now = new Date();
// Phnom Penh is UTC+7
const phnomPenhOffset = 7 * 60;
const localOffset = now.getTimezoneOffset();
const phnomPenhDate = new Date(now.getTime() + (phnomPenhOffset + localOffset) * 60000);
const todayIdx = phnomPenhDate.getDay();
const currentHour = phnomPenhDate.getHours();

const todayRow = document.querySelector(`#hours-table tr[data-day="${todayIdx}"]`);
if (todayRow) todayRow.classList.add('is-today');

// Open / Closed badge + today's hours in the info strip
const statusEl = document.getElementById('nav-status');
const infoToday = document.getElementById('info-today');

if (todayRow) {
  const openHour = parseInt(todayRow.dataset.open, 10);
  const closeHour = parseInt(todayRow.dataset.close, 10);
  const isOpen = currentHour >= openHour && currentHour < closeHour;
  const hours = todayRow.cells[1].textContent.trim();
  const dayName = todayRow.cells[0].textContent.trim();

  if (statusEl) {
    statusEl.textContent = isOpen ? 'Open now' : 'Closed';
    statusEl.classList.add(isOpen ? 'is-open' : 'is-closed');
  }

  if (infoToday) {
    infoToday.textContent = isOpen
      ? `Open now \u00b7 until ${closeHour}:00`
      : `Closed \u00b7 ${dayName} ${hours}`;
    if (!isOpen) infoToday.classList.add('info-today-closed');
  }
}

// Menu category tabs
const tabs = document.querySelectorAll('.tab-btn');
const cards = document.querySelectorAll('.menu-card');
const menuEmpty = document.getElementById('menu-empty');

tabs.forEach(tab => {
  tab.setAttribute('aria-pressed', tab.classList.contains('active') ? 'true' : 'false');

  tab.addEventListener('click', () => {
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-pressed', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-pressed', 'true');

    const filter = tab.dataset.filter;
    let shown = 0;
    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !match);
      if (match) shown++;
    });
    if (menuEmpty) menuEmpty.hidden = shown > 0;
  });
});

// Back to top
const backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
