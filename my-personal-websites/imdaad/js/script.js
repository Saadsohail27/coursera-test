document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    const statsSection = document.querySelector('.stats');
    let started = false; // To ensure the animation runs only once

    function animateCounters() {
        counters.forEach(counter => {
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const current = +counter.innerText;
                const increment = target / 100; // Adjust this for speed

                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(updateCounter, 10); // Adjust speed of animation
                } else {
                    counter.innerText = target; // Ensure final number is accurate
                }
            };
            updateCounter();
        });
    }

    // Intersection Observer to detect scroll into the section
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !started) {
            started = true; // Ensure the animation runs only once
            animateCounters();
        }
    }, {
        threshold: 0.5 // 50% of the section should be visible
    });

    observer.observe(statsSection);
});

