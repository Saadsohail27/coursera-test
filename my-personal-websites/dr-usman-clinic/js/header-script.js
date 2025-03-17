// Hamburger menu and mobile navigation functionality
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');

hamburgerMenu.addEventListener('click', () => {
    // Toggle the "active" class on the hamburger menu
    hamburgerMenu.classList.toggle('active');

    // Handle the visibility and sliding animations of the mobile navigation
    if (mobileNav.classList.contains('active')) {
        // If mobile navigation is open, add the sliding-out animation
        mobileNav.classList.remove('active'); // Remove the "active" class
        mobileNav.classList.add('closing'); // Add the "closing" class for slide-out

        // After the animation ends, hide the mobile navigation
        setTimeout(() => {
            mobileNav.style.display = 'none';
            mobileNav.classList.remove('closing'); // Reset the state
        }, 700); // Match animation duration (0.5s)
    } else {
        // Open the mobile navigation
        mobileNav.style.display = 'block'; // Ensure it's visible
        setTimeout(() => {
            mobileNav.classList.add('active'); // Add the "active" class for slide-in
        }, 10); // Small delay to trigger the animation
    }
});

// JavaScript to toggle the 'scrolled' class when scrolling
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- New Code Added: Close Mobile Nav on Link Click ---
const mobileNavLinks = document.querySelectorAll('#mobile-nav a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            mobileNav.classList.add('closing');
            setTimeout(() => {
                mobileNav.style.display = 'none';
                mobileNav.classList.remove('closing');
            }, 700);
            hamburgerMenu.classList.remove('active');
        }
    });
});
