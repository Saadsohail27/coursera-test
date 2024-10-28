function toggleMobileMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const mobileLinks = document.querySelector('.mobile-links');
    hamburgerIcon.classList.toggle('active');
    mobileLinks.classList.toggle('active');
}

function toggleMobileMenu() {
    const mobileLinks = document.querySelector('.mobile-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    // Toggle the active class on the links and hamburger icon
    mobileLinks.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
}