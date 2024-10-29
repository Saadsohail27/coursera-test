const swiper = new Swiper('.swiper-container', {
    // Basic Swiper configuration
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Pause autoplay initially
swiper.autoplay.stop();

// IntersectionObserver to start autoplay when in viewport
const swiperContainer = document.querySelector('.swiper-container');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            swiper.autoplay.start(); // Start autoplay when visible
            observer.unobserve(swiperContainer); // Stop observing
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

// Observe the Swiper container
observer.observe(swiperContainer);