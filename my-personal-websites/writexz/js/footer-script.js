document.addEventListener('DOMContentLoaded', function() {
    // Select all the footer links, paragraph tags, and social icons
    const footerLinks = document.querySelectorAll('footer ul li');
    const footerParagraphs = document.querySelectorAll('footer p');
    const footerIcons = document.querySelectorAll('.footer-social-icon');  // Select footer social icons

    // Combine all elements into a single array
    const footerElements = [...footerLinks, ...footerParagraphs, ...footerIcons];

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when 10% of the footer is visible
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('footer-slide-in'); // Add class to slide in
                observer.unobserve(entry.target); // Stop observing after the animation
            }
        });
    }, observerOptions);

    // Observe each footer element (links, paragraphs, and icons)
    footerElements.forEach(element => {
        observer.observe(element);
    });
});