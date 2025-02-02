document.querySelectorAll(".faq-question").forEach((button) => {
            button.addEventListener("click", function () {
                const faq = this.parentElement;
                const answer = faq.querySelector(".faq-answer");
                const icon = this.querySelector(".faq-icon");

                // Close any already open FAQ
                document.querySelectorAll(".faq").forEach((item) => {
                    if (item !== faq) {
                        item.classList.remove("active");
                        item.querySelector(".faq-answer").style.maxHeight = null;
                        item.querySelector(".faq-icon").textContent = "+";
                    }
                });

                // Toggle current FAQ
                if (faq.classList.contains("active")) {
                    faq.classList.remove("active");
                    answer.style.maxHeight = null;
                    icon.textContent = "+";
                } else {
                    faq.classList.add("active");
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    icon.textContent = "-";
                }
            });
        });