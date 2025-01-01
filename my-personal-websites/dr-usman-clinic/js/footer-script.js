document.addEventListener('DOMContentLoaded', function () {
    // Select footer links, paragraph tags, and social icons
    const footerLinks = document.querySelectorAll('.footer-column a');
    const footerParagraphs = document.querySelectorAll('.footer-column p');
    const socialIcons = document.querySelectorAll('.social-icons a');
    const footerMiddleLinks = document.querySelectorAll('.footer-middle-links');

    // Combine all elements into a single array
    const footerElements = [...footerLinks, ...footerParagraphs, ...socialIcons, ...footerMiddleLinks];

    // Debug: Ensure elements are being selected
    console.log('Observed elements:', footerElements);

    // Intersection Observer options
    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when 10% of the element is visible
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element in view:', entry.target); // Debug log
                entry.target.classList.add('footer-slide-in'); // Add class for animation
                observer.unobserve(entry.target); // Stop observing the element
            }
        });
    }, observerOptions);

    // Observe each footer element
    footerElements.forEach(element => {
        observer.observe(element);
    });
});
