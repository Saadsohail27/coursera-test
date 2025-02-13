// Get the header and logo elements
const header = document.querySelector("header");
const logo = document.querySelector("header a img");

// Check if the current page is the homepage (index.html)
const isHomePage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

// If it's the homepage, apply the scroll-based sticky behavior
if (isHomePage) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            header.classList.add("sticky");
            logo.src = "images/logos/logo-black-80.png"; // Change logo in scrolled state
        } else {
            header.classList.remove("sticky");
            logo.src = "images/logos/alogo.png"; // Revert to original logo
        }
    });
} else {
    // For all other pages, make the header sticky by default
    header.classList.add("sticky");
    logo.src = "images/logos/logo-black-80.png"; // Use the sticky logo by default
}
