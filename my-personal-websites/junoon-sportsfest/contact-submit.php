<?php
// contact-submit.php
header('Content-Type: application/json; charset=utf-8');

// Replace with your destination email
$destination = 'info@junoonfest.pk';

// Utility: return JSON and exit
function jsonResponse($success, $message, $httpCode = 200) {
    http_response_code($httpCode);
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(false, 'Invalid request method', 405);
}

// Honeypot
if (!empty($_POST['website'])) {
    // pretend ok but reject silently to avoid telling bots
    jsonResponse(true, 'Thank you for your message.'); // or 400 if you prefer
}

// Basic fields
$fullName = trim($_POST['fullName'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');
$ts = intval($_POST['ts'] ?? 0);

// Validate
if (!$fullName || !$email || !$message) {
    jsonResponse(false, 'Please fill required fields.', 400);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse(false, 'Email address is invalid.', 400);
}

// Optional: basic anti-automation using ts (e.g. require > 2 seconds)
if ($ts && (time() - floor($ts/1000)) < 2) {
    jsonResponse(false, 'Submission too fast. Are you a bot?', 400);
}

// sanitize message
$clean_message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Build email
$subject = "New contact form message from " . substr($fullName, 0, 200);
$body = "Name: $fullName\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n\n";
$body .= "Message:\n$clean_message\n\n";
$body .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? '') . "\n";
$body .= "User-Agent: " . ($_SERVER['HTTP_USER_AGENT'] ?? '') . "\n";

// Prevent header injection
$clean_email = preg_replace('/[\r\n]+/', '', $email);
$headers = "From: {$clean_email}\r\n";
$headers .= "Reply-To: {$clean_email}\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

// Send
$sent = @mail($destination, $subject, $body, $headers);
if ($sent) {
    jsonResponse(true, 'Message sent successfully.');
} else {
    // Try to return actionable error
    jsonResponse(false, 'Failed to send message. Please try again later.', 500);
}
