/**
 * NexGen Staging - Modern Interactive JavaScript
 * Lightweight, Vanilla JS, Zero External Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-menu-btn, .mobile-toggle');
  const siteHeader = document.querySelector('.site-header');

  if (mobileToggle && siteHeader) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      siteHeader.classList.toggle('mobile-nav-active');
      const isExpanded = siteHeader.classList.contains('mobile-nav-active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close when clicking a nav link
    document.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => {
        siteHeader.classList.remove('mobile-nav-active');
        mobileToggle.setAttribute('aria-expanded', false);
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (siteHeader.classList.contains('mobile-nav-active') && !siteHeader.contains(e.target)) {
        siteHeader.classList.remove('mobile-nav-active');
        mobileToggle.setAttribute('aria-expanded', false);
      }
    });
  }

  // 2. Sticky Header Elevation on Scroll (Preserves 100% contrast & link visibility)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }
  });

  // 3. Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // 4. Video Play Trigger Click Simulation
  const videoPlayBtn = document.querySelector('.video-play-btn');
  if (videoPlayBtn) {
    videoPlayBtn.addEventListener('click', () => {
      window.open('https://www.youtube.com/channel/UCHeQ91I5-S7ZsIwEAJWZE8w', '_blank');
    });
  }
});
