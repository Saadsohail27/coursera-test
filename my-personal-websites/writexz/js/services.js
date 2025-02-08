document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the class when in view
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the card is visible

    serviceCards.forEach(card => {
        observer.observe(card);
    });
});
