<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header('Content-Type: application/json');  // Set content type to JSON

    // Collect form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate required fields
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "All fields are required!"]);
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email format!"]);
        exit;
    }

    // Prepare email
    $to = "saadsohail8790@gmail.com";  // Replace with your email address
    $subject = "New Message from Contact Form";
    $body = "You have received a new message from your website contact form:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Message: $message\n";

    // Set email headers
   $headers = "From: no-reply@yourdomain.com\r\n" .
           "Reply-To: $email\r\n" .
           "Content-Type: text/plain; charset=UTF-8\r\n";

    // Use -f parameter to set the return path
    $parameters = "-f no-reply@yourdomain.com";  // Replace with your actual domain email

    // Send email
    if (mail($to, $subject, $body, $headers, $parameters)) {
        echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Message failed to send."]);
    }
}
?>