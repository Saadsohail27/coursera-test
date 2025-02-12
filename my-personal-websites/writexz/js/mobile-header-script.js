document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.mobile-nav .hamburger');
    const mobileNavLinks = document.querySelector('.mobile-nav .nav-links');

    // Toggle menu visibility on hamburger click
    hamburger.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from propagating to the document
        mobileNavLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close the menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!mobileNavLinks.contains(event.target) && !hamburger.contains(event.target)) {
            mobileNavLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Close dropdown menus within the mobile nav (if required)
    const dropdownToggles = document.querySelectorAll('.mobile-nav .dropdown-toggle');
    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent clicks from bubbling up
            const dropdownMenu = toggle.nextElementSibling;
            dropdownMenu.classList.toggle('active'); // Toggle dropdown visibility
        });
    });
});