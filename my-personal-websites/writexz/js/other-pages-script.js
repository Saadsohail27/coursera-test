document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header'); // Select the header
    const logo = document.querySelector('.logo img'); // Select the logo image
    const hamburger = document.querySelector('.mobile-nav .hamburger');
    const mobileNavLinks = document.querySelector('.mobile-nav .nav-links');

    // Change logo on scroll
    window.addEventListener('scroll', function () {

            logo.src = 'images/logos/180black.png'; // Set black logo
 			mobileNavLinks.style.color = 'black';
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
