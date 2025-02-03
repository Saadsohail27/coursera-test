// Get the header element
const header = document.querySelector("header");

// Function to check scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
