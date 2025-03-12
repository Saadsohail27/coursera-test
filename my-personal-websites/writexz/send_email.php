<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Include PHPMailer

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';  // Hostinger SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@writexz.co.uk'; // Your email
    $mail->Password   = 'Writexz11223344?'; // Your email password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Recipient
    $mail->setFrom('info@writexz.co.uk', 'Writexz');
    $mail->addAddress('info@writexz.co.uk'); // Where to receive the form data

    // Email content
    $mail->isHTML(true);
    $mail->Subject = 'New Consultation Signup';
    $mail->Body    = "Name: " . htmlspecialchars($_POST["name"]) . "<br>"
                   . "Email: " . htmlspecialchars($_POST["email"]) . "<br>"
                   . "Phone: " . htmlspecialchars($_POST["phone"]) . "<br>"
                   . "Message: " . nl2br(htmlspecialchars($_POST["message"]));

    $mail->send();
    echo 'Your consultation request has been sent successfully!';
} catch (Exception $e) {
    echo "Oops! Something went wrong: {$mail->ErrorInfo}";
}
?>
