<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Google reCAPTCHA Secret Key
    $secretKey = "6Lc6iegqAAAAAN5a0igrJxtkBbjXB7OvmRomtuRN";
    $captchaResponse = $_POST['g-recaptcha-response'];

    // Verify reCAPTCHA
    $verifyResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captchaResponse");
    $responseData = json_decode($verifyResponse);

    if (!$responseData->success) {
        die("recaptcha failed");
    }

    // Collect and sanitize form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("email invalid");
    }

    // Prepare email
    $to = "register@zikarflow.com";
    $subject = "New Free Trial Registration";
    $message = "Name: $name\nEmail: $email\nPhone: $phone";
    $headers = "From: no-reply@zikarflow.com\r\nReply-To: $email";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "Invalid request";
}
?>
