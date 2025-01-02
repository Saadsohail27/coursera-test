// Mobile navigation toggle
const hamburger = document.querySelector('.mobile-nav .hamburger');
const mobileNavLinks = document.querySelector('.mobile-nav .nav-links');
hamburger.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('active');
});

// Dropdown toggle for mobile
const dropdownToggles = document.querySelectorAll('.mobile-nav .dropdown-toggle');
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownMenu = toggle.nextElementSibling;
        dropdownMenu.classList.toggle('active');
    });
});
