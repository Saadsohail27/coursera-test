document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
        const faqItem = question.parentElement;
        const icon = question.querySelector(".faq-icon");

        // Toggle active class
        faqItem.classList.toggle("active");

        // Change plus/minus sign
        icon.textContent = faqItem.classList.contains("active") ? "-" : "+";

        // Close other open FAQs
        document.querySelectorAll(".faq-item").forEach((item) => {
            if (item !== faqItem && item.classList.contains("active")) {
                item.classList.remove("active");
                item.querySelector(".faq-icon").textContent = "+";
            }
        });
    });
});
