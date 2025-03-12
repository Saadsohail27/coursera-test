<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ensure PHPMailer is installed

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Invalid email address.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';  
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@writexz.co.uk'; 
        $mail->Password   = 'Writexz11223344?'; // Use an app password for security
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Recipient
        $mail->setFrom('info@writexz.co.uk', 'Writexz');
        $mail->addAddress('info@writexz.co.uk');

        // Email content
        $mail->isHTML(true);
        $mail->Subject = 'New Quote Request';
        $mail->Body    = "<strong>Name:</strong> " . htmlspecialchars($name) . "<br>"
                        . "<strong>Email:</strong> " . htmlspecialchars($email) . "<br>"
                        . "<strong>Phone:</strong> " . htmlspecialchars($phone) . "<br>"
                        . "<strong>Project Details:</strong> <br>" . nl2br(htmlspecialchars($message));

        $mail->send();
        echo 'success'; // This message is used by AJAX to determine success
    } catch (Exception $e) {
        http_response_code(500);
        echo "Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(400);
    echo "Invalid request.";
}
?>
