<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    $issueType = htmlspecialchars($_POST['issue_type']);

    // Determine the destination email based on issue type
    switch ($issueType) {
        case 'General Information':
            $to = "info@westech.com.pk";
            break;
        case 'Sales':
            $to = "sales@westech.com.pk";
            break;
        case 'Complaints':
            $to = "complaints@westech.com.pk";
            break;
        case 'Support':
            $to = "support@westech.com.pk";
            break;
        case 'Other':
        default:
            $to = "info@westech.com.pk";
            break;
    }

    // Create the body of the email
    $body = "Name: $name\nEmail: $email\nSubject: $subject\nDepartment: $issueType\nMessage: $message";

    // Add the forwarded from line if the email is not directly to info@westech.com.pk
    if ($to !== "info@westech.com.pk") {
        $body .= "\n\nForwarded from: $to";
    }

    // Send the main email
    $headers = "From: " . $email;
    if (mail($to, $subject, $body, $headers)) {
        // Send automatic response
        $responseSubject = "Thank You for Contacting Westech!";
        $responseBody = "Dear $name,\n\nThank you for reaching out to Westech!\n\nWe have received your message and one of our team members will get back to you as soon as possible. Your inquiry is important to us, and we aim to respond within a few minutes to a few hours on working days.\n\nIn the meantime, feel free to browse our website for more information about our products and services.\n\nIf you need immediate assistance, please call us at +92 3331870881.\n\nThank you for your patience and for choosing Westech.\n\nBest regards,\nThe Westech Team\ninfo@westech.com.pk\nwestech.com";
        $responseHeaders = "From: support@westech.com.pk";
        mail($email, $responseSubject, $responseBody, $responseHeaders);
        
        // Output success message
        echo "<div id='form-message' style='color: green; margin: 20px 0;'>Message sent successfully!</div>";
    } else {
        // Output failure message
        echo "<div id='form-message' style='color: red; margin: 20px 0;'>Message failed to send.</div>";
    }
}
?>