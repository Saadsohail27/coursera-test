document.addEventListener('DOMContentLoaded', () => {
    const donationButtons = document.querySelectorAll('.donation-button');
    const donationContent = document.querySelector('.donation-content');
    const donationMethods = document.querySelectorAll('.donation-method');

    donationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const method = button.getAttribute('data-method');

            // Hide all donation methods
            donationMethods.forEach(dm => {
                dm.style.display = 'none';
            });

            // Show the selected donation method
            const selectedMethod = document.getElementById(method);
            if (selectedMethod) {
                selectedMethod.style.display = 'block';
                donationContent.style.display = 'block';
                
                // Optionally, scroll to the donation content
                selectedMethod.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});