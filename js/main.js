// Nails by Lexie — script commun à toutes les pages

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('siteHeader');
  const nav = document.getElementById('siteNav');
  const toggle = document.getElementById('menuToggle');

  // Fond du header au défilement
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });
    // Active dès le chargement si la page n'est pas en haut (ex: ancre)
    header.classList.toggle('scrolled', window.scrollY > 40);
  }

  // Menu mobile
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => nav.classList.remove('open'))
    );
  }
});
