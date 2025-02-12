// Get the header and logo elements
const header = document.querySelector("header");
const logo = document.querySelector("header a img");

// Function to check scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        header.classList.add("sticky");
        logo.src = "images/logos/logo-black-80.png"; // Change logo in scrolled state
    } else {
        header.classList.remove("sticky");
        logo.src = "images/logos/alogo.png"; // Revert to original logo
    }
});