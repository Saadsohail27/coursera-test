<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize input values to prevent security risks
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $idea = htmlspecialchars($_POST['idea']);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die('Invalid email format.');
    }

    // Save or process the data (e.g., send email or save to database)
    $to = "info@imdaad.org"; // Change to your organization's email
    $subject = "$name has just submitted a new idea.";
    $message = "
        Name: $name\n
        Email: $email\n
        Phone: $phone\n
        Idea: $idea
    ";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for sharing your idea! We'll review it shortly.";
    } else {
        echo "There was an error submitting your idea. Please try again.";
    }
} else {
    // Redirect to the homepage if accessed without submitting the form
    header('Location: /');
    exit();
}
?>