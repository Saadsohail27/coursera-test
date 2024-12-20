document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

    // Toggle Mobile Navigation
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Dropdown Toggles in Mobile Nav
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdownMenu = toggle.nextElementSibling;
            toggle.classList.toggle('active');
            dropdownMenu.classList.toggle('active');
        });
    });
});

// Select all mobile dropdown toggles
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const parent = this.parentElement; // Get the parent .mobile-dropdown

        // Toggle the "active" class on the parent
        parent.classList.toggle('active');
    });
});