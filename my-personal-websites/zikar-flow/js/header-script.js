// SELECT ELEMENTS
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileNavLinks = mobileNav.querySelectorAll('a');

// TOGGLE MOBILE NAV
hamburger.addEventListener('click', () => {
  // Animate hamburger into "X"
  hamburger.classList.toggle('open');
  // Slide mobile nav in/out
  mobileNav.classList.toggle('open');
  // Show/Hide overlay
  mobileNavOverlay.classList.toggle('open');
});

// CLICK OVERLAY TO CLOSE NAV
mobileNavOverlay.addEventListener('click', closeMobileNav);

// CLOSE NAV WHEN ANY LINK IS CLICKED
mobileNavLinks.forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

function closeMobileNav() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
  mobileNavOverlay.classList.remove('open');
}
