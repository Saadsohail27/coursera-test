<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Include PHPMailer

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["email"])) {
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Invalid email address.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';  // Hostinger SMTP server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@writexz.co.uk'; // Your email
        $mail->Password   = 'Writexz11223344?'; // ⚠️ Consider using environment variables instead of plain text passwords
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Recipient
        $mail->setFrom('info@writexz.co.uk', 'Writexz');
        $mail->addAddress('info@writexz.co.uk'); // Where to receive the subscriptions

        // Email content
        $mail->isHTML(true);
        $mail->Subject = 'New Newsletter Subscription';
        $mail->Body    = "New subscriber email: " . htmlspecialchars($email);

        $mail->send();
        echo 'success';
    } catch (Exception $e) {
        http_response_code(500);
        echo "Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(400);
    echo "Invalid request.";
}
?>
