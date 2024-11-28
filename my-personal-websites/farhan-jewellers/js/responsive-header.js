const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.createElement('div'); // Create overlay element
overlay.classList.add('overlay');
document.body.appendChild(overlay); // Append to the DOM

// Toggle the navbar and overlay visibility
const toggleNav = () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  overlay.classList.toggle('active');
};

// Close the navbar when clicking outside
const closeNav = () => {
  hamburger.classList.remove('active');
  mobileNav.classList.remove('active');
  overlay.classList.remove('active');
};

// Event listeners
hamburger.addEventListener('click', toggleNav);
overlay.addEventListener('click', closeNav);