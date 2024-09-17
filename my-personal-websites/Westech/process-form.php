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

    // Send the email
    $headers = "From: " . $email;
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Meesage not sent\nNetwork error.";
    }
}
?>