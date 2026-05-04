/* =========================================================================
   KHA MARINE — MAIN JS
   ------------------------------------------------------------------------
   Handles:
     - Sticky/scroll header state
     - Mobile nav drawer
     - Active nav link
     - Footer year
     - Client ribbon population (from data.js)
     - Active page detection
   ========================================================================= */

(function () {
  'use strict';

  /* ---------- Header scroll state -------------------------------------- */
  function initHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 12) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile nav drawer ---------------------------------------- */
  function initNavDrawer() {
    const toggle = document.querySelector('.nav-toggle');
    const drawer = document.querySelector('.nav-drawer');
    if (!toggle || !drawer) return;

    const close = () => {
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    const open = () => {
      document.body.classList.add('menu-open');
      toggle.setAttribute('aria-expanded', 'true');
    };

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      isOpen ? close() : open();
    });

    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ---------- Active nav link ------------------------------------------ */
  function initActiveLink() {
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      if (href === path || (path === '' && href === 'index.html')) {
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ---------- Year in footer ------------------------------------------- */
  function initYear() {
    const el = document.querySelector('[data-year]');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Client ribbon -------------------------------------------- */
  function initRibbon() {
    const track = document.querySelector('.ribbon-track');
    if (!track || !window.KHA || !window.KHA.clients) return;

    const html = window.KHA.clients.map(c => (
      `<img class="ribbon-logo" src="${c.file}" alt="${c.name}" loading="lazy" decoding="async" />`
    )).join('');

    // Duplicate for seamless loop
    track.innerHTML = html + html;
  }

  /* ---------- Init ------------------------------------------------------ */
  function init() {
    initHeader();
    initNavDrawer();
    initActiveLink();
    initYear();
    initRibbon();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
