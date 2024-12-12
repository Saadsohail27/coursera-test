document.addEventListener('DOMContentLoaded', function () {
    // Show Volunteer Form and Hide Partner Form
    document.getElementById('volunteer-btn').addEventListener('click', function (event) {
        event.preventDefault();
        // Hide the partner form section
        document.getElementById('partner-form-section').classList.add('hidden');
        // Show the volunteer form section
        document.getElementById('volunteer-form-section').classList.remove('hidden');
        // Smooth scroll to the volunteer form section
        document.getElementById('volunteer-form-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Show Partner Form and Hide Volunteer Form
    document.getElementById('partner-btn').addEventListener('click', function (event) {
        event.preventDefault();
        // Hide the volunteer form section
        document.getElementById('volunteer-form-section').classList.add('hidden');
        // Show the partner form section
        document.getElementById('partner-form-section').classList.remove('hidden');
        // Smooth scroll to the partner form section
        document.getElementById('partner-form-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Dynamically Show/Hide Fields in Partnership Form Based on "Help Option"
    document.getElementById('help-option').addEventListener('change', function () {
        const selectedOption = this.value;
        const volunteersField = document.getElementById('volunteers-number');
        const financialField = document.getElementById('financial-amount');

        if (selectedOption === 'volunteers') {
            // Show the field for the number of volunteers and hide financial amount field
            volunteersField.style.display = 'block';
            financialField.style.display = 'none';
        } else if (selectedOption === 'financial') {
            // Show the field for financial contribution and hide volunteers field
            volunteersField.style.display = 'none';
            financialField.style.display = 'block';
        } else {
            // Hide both fields if no valid option is selected
            volunteersField.style.display = 'none';
            financialField.style.display = 'none';
        }
    });

    // Ensure Both Volunteer Form and Partner Form Start with Hidden Fields (On Page Load)
    document.getElementById('volunteers-number').style.display = 'none';
    document.getElementById('financial-amount').style.display = 'none';
});