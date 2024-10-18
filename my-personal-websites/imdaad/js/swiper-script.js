var swiper = new Swiper('.swiper-container', {
    loop: true, // Enables continuous loop mode
    slidesPerView: 1, // Shows one slide at a time
    spaceBetween: 30, // Space between slides (optional)
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Make pagination bullets clickable
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // Auto slide every 3 seconds
        disableOnInteraction: false, // Keep autoplay running on interaction
    },
});