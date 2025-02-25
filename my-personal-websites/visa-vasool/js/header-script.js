// Get the header, logo, and "elievers" text elements
const header = document.querySelector("header");
const logo = document.querySelector("header a img");
const elieversText = document.querySelector(".velievers-text"); // Target the span

// Check if the current page is the homepage (index.html)
const isHomePage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

// Function to update sticky header styles
function updateHeader() {
    if (window.scrollY > 200) {
        header.classList.add("sticky");
        logo.src = "images/logos/logo-black-80.png"; // Change logo
        elieversText.style.color = "#019C55"; // Change "elievers" text to green in sticky header
    } else {
        header.classList.remove("sticky");
        logo.src = "images/logos/alogo.png"; // Revert logo
        elieversText.style.color = "white"; // Change "elievers" text to white in non-sticky header
    }
}

// Apply scroll-based sticky behavior only on the homepage
if (isHomePage) {
    window.addEventListener("scroll", updateHeader);
    updateHeader(); // Ensure correct color on page load
} else {
    // For other pages, make the header sticky by default
    header.classList.add("sticky");
    logo.src = "images/logos/logo-black-80.png"; // Use sticky logo
    elieversText.style.color = "#019C55"; // Keep "elievers" text green in sticky header
}

