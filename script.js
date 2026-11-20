// Immaculate Roofing & Construction — homepage interactions
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// This is intentionally preview-only. Before launch, connect the form to a
// client-owned form service and test that submissions reach the client.
const inspectionForm = document.getElementById('inspection-form');
const formStatus = document.getElementById('form-status');
if (inspectionForm && formStatus) {
  inspectionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = 'This form is in preview mode. The website developer must connect form delivery before launch. For now, please call Leslie at 915-408-5243.';
  });
}
