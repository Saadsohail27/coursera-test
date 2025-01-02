document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const hamburger = document.querySelector('.mobile-nav .hamburger');
const mobileNavLinks = document.querySelector('.mobile-nav .nav-links');

hamburger.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});



