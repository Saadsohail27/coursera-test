document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header'); // Select the header
    const logo = document.querySelector('.logo img'); // Select the logo image
    const hamburger = document.querySelector('.mobile-nav .hamburger');
    const mobileNavLinks = document.querySelector('.mobile-nav .nav-links');

    // Detect if the current page is the homepage (index.html or root '/')
    const currentPath = window.location.pathname.split('/').pop(); // Get the last part of the path
    const isHomePage = currentPath === '' || currentPath === 'index.html';

    if (!isHomePage) {
        // Apply scrolled styles by default for all pages except the homepage
        header.classList.add('scrolled');
        logo.src = 'images/logos/writexz-logo-black.png'; // Set black logo
    } else {
        // Change logo on scroll (only for homepage)
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.classList.add('scrolled'); // Add the scrolled class
                logo.src = 'images/logos/writexz-logo-black.png'; // Set black logo
            } else {
                header.classList.remove('scrolled'); // Remove the scrolled class
                logo.src = 'images/logos/writexz-logo-white.png'; // Set white logo
            }
        });
    }

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
