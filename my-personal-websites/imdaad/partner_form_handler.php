<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the form data
    $org_name = htmlspecialchars(trim($_POST['org-name']));
    $established = htmlspecialchars(trim($_POST['established']));
    $help_option = htmlspecialchars(trim($_POST['help-option']));
    $volunteers = isset($_POST['volunteers']) ? htmlspecialchars(trim($_POST['volunteers'])) : 'N/A';
    $financial = isset($_POST['financial']) ? htmlspecialchars(trim($_POST['financial'])) : 'N/A';
    $owner_phone = htmlspecialchars(trim($_POST['owner-phone']));
    $org_email = htmlspecialchars(trim($_POST['org-email']));

    // Validate required fields
    if (empty($org_name) || empty($established) || empty($help_option) || empty($owner_phone) || empty($org_email)) {
        echo json_encode([
            'success' => false,
            'message' => 'All fields are required. Please fill out the form completely.'
        ]);
        exit;
    }

    // Compose the email content
    $subject = "New Partnership Form Submission";
    $message = "
    <h2>Partnership Form Details</h2>
    <p><strong>Organization Name:</strong> $org_name</p>
    <p><strong>Established:</strong> $established</p>
    <p><strong>Help Option:</strong> $help_option</p>";

    // Include additional information based on the help option
    if ($help_option == 'volunteers') {
        $message .= "<p><strong>Number of Volunteers:</strong> $volunteers</p>";
    } elseif ($help_option == 'financial') {
        $message .= "<p><strong>Financial Contribution (PKR):</strong> $financial</p>";
    }

    $message .= "
    <p><strong>Owner's Phone (WhatsApp):</strong> $owner_phone</p>
    <p><strong>Organization's Email:</strong> $org_email</p>
    ";

    // Email headers
    $headers = [
        "MIME-Version: 1.0",
        "Content-Type: text/html; charset=UTF-8",
        "From: $org_email",
        "Reply-To: $org_email"
    ];

    // Send email
    $to = "info@imdaad.org"; // Recipient email address
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