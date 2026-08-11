/**
 * Mr. Pravin Chaudhari - Director & CEO Portfolio JavaScript Engine
 * Virtuoso Projects & Engineers | Sneh Precast | AEE Social Foundation
 * ISO Certifications & Lightbox Module
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeaderScroll();
  initCertModal();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   1. Mobile Drawer Navigation
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggleBtn');
  const mobileNav = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.mobile-nav-links a');

  if (!toggleBtn || !mobileNav || !overlay) return;

  function openMenu() {
    toggleBtn.classList.add('active');
    mobileNav.classList.add('open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggleBtn.classList.remove('active');
    mobileNav.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) closeMenu();
    else openMenu();
  });

  overlay.addEventListener('click', closeMenu);
  navLinks.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   2. Header Sticky Glass Effect
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   3. Certificate Lightbox Modal Controller
   ========================================================================== */
function initCertModal() {
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('certModalImg');
  const modalTitle = document.getElementById('certModalTitle');
  const backdrop = document.getElementById('certModalBackdrop');
  const closeBtn = document.getElementById('certModalCloseBtn');
  const viewBtns = document.querySelectorAll('.view-cert-btn');

  if (!modal || !modalImg || !modalTitle || !viewBtns.length) return;

  function openModal(title, imgSrc) {
    modalTitle.textContent = title;
    modalImg.src = imgSrc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const title = btn.getAttribute('data-cert-title');
      const imgSrc = btn.getAttribute('data-cert-src');
      openModal(title, imgSrc);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   4. Contact Form Submission
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('directorContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalContent = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `Sending Message...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalContent;
      form.reset();
      showToast('Thank you! Message dispatched directly to the Executive Office of Mr. Pravin Chaudhari.');
    }, 1200);
  });
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ==========================================================================
   5. Back To Top Button
   ========================================================================== */
function initBackToTop() {
  const backBtn = document.getElementById('backToTopBtn');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backBtn.style.opacity = '1';
      backBtn.style.visibility = 'visible';
    } else {
      backBtn.style.opacity = '0';
      backBtn.style.visibility = 'hidden';
    }
  });

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
