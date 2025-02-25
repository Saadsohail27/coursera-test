  document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav ul');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li a'); // Select all links
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.querySelector('.mobile-nav').appendChild(overlay);

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  // Close menu if overlay is clicked
  overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
  });

  // Close menu when any link inside mobile nav is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
});