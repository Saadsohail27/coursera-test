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
});
