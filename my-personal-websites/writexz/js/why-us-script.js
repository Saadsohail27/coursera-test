document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".why-us-checklist li");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2, // Trigger when 20% of the item is visible
    });

    listItems.forEach((item) => {
        observer.observe(item);
    });
});
