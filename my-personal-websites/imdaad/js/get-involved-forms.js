document.getElementById('volunteer-btn').addEventListener('click', function(event) {
    event.preventDefault();
    // Hide partner form and show volunteer form
    document.getElementById('partner-form').classList.add('hidden');
    document.getElementById('volunteer-form').classList.remove('hidden');
    document.getElementById('volunteer-form').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('partner-btn').addEventListener('click', function(event) {
    event.preventDefault();
    // Hide volunteer form and show partner form
    document.getElementById('volunteer-form').classList.add('hidden');
    document.getElementById('partner-form').classList.remove('hidden');
    document.getElementById('partner-form').scrollIntoView({ behavior: 'smooth' });
});

// Show/hide relevant fields based on partnership help option selection
document.getElementById('help-option').addEventListener('change', function() {
    var selectedOption = this.value;
    if (selectedOption === 'volunteers') {
        document.getElementById('volunteers-number').style.display = 'block';
        document.getElementById('financial-amount').style.display = 'none';
    } else if (selectedOption === 'financial') {
        document.getElementById('volunteers-number').style.display = 'none';
        document.getElementById('financial-amount').style.display = 'block';
    } else {
        document.getElementById('volunteers-number').style.display = 'none';
        document.getElementById('financial-amount').style.display = 'none';
    }
});