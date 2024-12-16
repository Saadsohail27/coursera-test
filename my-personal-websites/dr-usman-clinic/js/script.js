// Toggle FAQs
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const isActive = question.classList.contains('active');

        // Close all open FAQs
        document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
        document.querySelectorAll('.faq-toggle').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.faq-answer').forEach(a => (a.style.display = 'none'));

        if (!isActive) {
            question.classList.add('active');
            question.querySelector('.faq-toggle').classList.add('active');
            const answer = question.nextElementSibling;
            answer.style.display = 'block';
        }
    });
});

// WhatsApp Button Functions
function bookAppointment() {
    window.open('https://wa.me/923334288889?text=Hi,%20I%27d%20like%20to%20book%20an%20appointment%20with%20Dr%20Usman.', '_blank');
}

function consultationHours() {
    window.open('https://wa.me/923334288889?text=What%20are%20Dr%20Usmans%20consultation%20hours?', '_blank');
}