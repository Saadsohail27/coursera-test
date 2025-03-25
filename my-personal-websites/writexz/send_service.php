<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer (make sure it's installed via Composer or manually)
require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize and validate input
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
    $services = filter_var($_POST["services"], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Invalid email address.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP configuration using Hostinger settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@writexz.co.uk'; 
        $mail->Password   = 'Writexz11223344?'; // For security, consider using an app password or environment variable
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Set sender and recipient
        $mail->setFrom('info@writexz.co.uk', 'Writexz');
        $mail->addAddress('info@writexz.co.uk');

        // Construct the email content
        $mail->isHTML(true);
        $mail->Subject = 'A new client from the website has reached out !';
        $mail->Body    = "<strong>Name:</strong> " . htmlspecialchars($name) . "<br>"
                        . "<strong>Email:</strong> " . htmlspecialchars($email) . "<br>"
                        . "<strong>Phone:</strong> " . htmlspecialchars($phone) . "<br>"
                        . "<strong>Service Required:</strong> " . htmlspecialchars($services) . "<br>"
                        . "<strong>Message:</strong><br>" . nl2br(htmlspecialchars($message));

        $mail->send();
        echo 'success'; // This is used by the AJAX script to determine success
    } catch (Exception $e) {
        http_response_code(500);
        echo "Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(400);
    echo "Invalid request.";
}
?>
