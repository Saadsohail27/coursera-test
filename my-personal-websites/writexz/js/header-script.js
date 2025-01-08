document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header'); // Select the header
    const logo = document.querySelector('.logo img'); // Select the logo image
    const hamburger = document.querySelector('.mobile-nav .hamburger');
    const mobileNavLinks = document.querySelector('.mobile-nav .nav-links');

    // Change logo on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); // Add the scrolled class
            logo.src = 'images/logos/180black.png'; // Set black logo
        } else {
            header.classList.remove('scrolled'); // Remove the scrolled class
            logo.src = 'images/logos/180-x180.png'; // Set white logo
        }
    });

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
