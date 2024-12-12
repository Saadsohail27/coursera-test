<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    $name = htmlspecialchars(trim($_POST['name']));
    $age = htmlspecialchars(trim($_POST['age']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $email = htmlspecialchars(trim($_POST['email']));
    $event = htmlspecialchars(trim($_POST['event']));
    $futureVolunteer = htmlspecialchars(trim($_POST['future-volunteer']));
    $confirmation = htmlspecialchars(trim($_POST['confirmation']));

    // Validate required fields
    if (empty($name) || empty($age) || empty($phone) || empty($email) || empty($event) || empty($futureVolunteer) || empty($confirmation)) {
        echo json_encode([
            'success' => false,
            'message' => 'All fields are required. Please fill out the form completely.'
        ]);
        exit;
    }

    // Email details
    $to = "info@imdaad.org";
    $subject = "Volunteer Signup Form Submission";
    $headers = [
        "From: $email",
        "Reply-To: $email",
        "Content-Type: text/html; charset=UTF-8"
    ];

    // Email body
    $message = "
        <h2>Volunteer Signup Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Age:</strong> $age</p>
        <p><strong>Phone Number (WhatsApp):</strong> $phone</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Event Willing to Volunteer For:</strong> $event</p>
        <p><strong>Willing to Help in Future Events:</strong> $futureVolunteer</p>
        <p><strong>Confirmation of Presence:</strong> $confirmation</p>
    ";

    // Send the email
    if (mail($to, $subject, $message, implode("\r\n", $headers))) {
        echo json_encode([
            'success' => true,
            'message' => 'Your details were submitted successfully.'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Failed to send your submission. Please try again later.'
        ]);
    }
} else {
    // Reject non-POST requests
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method.'
    ]);
}
?>