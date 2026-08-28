<?php

header("Content-Type: application/json; charset=UTF-8");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


/* ==========================================
   PHPMailer
========================================== */

require __DIR__ . "/vendor/autoload.php";


/* ==========================================
   Only allow POST
========================================== */

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Invalid request."
    ]);

    exit;

}


/* ==========================================
   Get form data
========================================== */

$name = trim($_POST["name"] ?? "");

$email = trim($_POST["email"] ?? "");

$message = trim($_POST["message"] ?? "");

$honeypot = trim($_POST["website"] ?? "");


/* ==========================================
   Honeypot
========================================== */

/*
   Real users should never fill this field.

   If it contains anything, silently reject
   the submission.
*/

if ($honeypot !== "") {

    echo json_encode([
        "success" => false,
        "message" => "Invalid submission."
    ]);

    exit;

}


/* ==========================================
   Validate
========================================== */

if ($name === "" || $email === "" || $message === "") {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Please fill in all required fields."
    ]);

    exit;

}


if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);

    exit;

}


/* ==========================================
   Length protection
========================================== */

if (strlen($name) > 100) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Your name is too long."
    ]);

    exit;

}

if (strlen($message) > 5000) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Your message is too long."
    ]);

    exit;

}


/* ==========================================
   Clean HTML
========================================== */

$nameSafe = htmlspecialchars(
    $name,
    ENT_QUOTES,
    "UTF-8"
);

$emailSafe = htmlspecialchars(
    $email,
    ENT_QUOTES,
    "UTF-8"
);

$messageSafe = nl2br(
    htmlspecialchars(
        $message,
        ENT_QUOTES,
        "UTF-8"
    )
);


/* ==========================================
   Send Email
========================================== */

$mail = new PHPMailer(true);

try {

    /*
    |--------------------------------------------------------------------------
    | SMTP
    |--------------------------------------------------------------------------
    */

    $mail->isSMTP();

    $mail->Host = "smtp.hostinger.com";

    $mail->SMTPAuth = true;

    $mail->Username = "info@thecrochetplace.com.pk";

    $mail->Password = "Thecrochetplace11?";

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

    $mail->Port = 465;


    /*
    |--------------------------------------------------------------------------
    | Sender
    |--------------------------------------------------------------------------
    */

    $mail->setFrom(
        "YOUR_DOMAIN_EMAIL",
        "The Crochet Place Website"
    );


    /*
    |--------------------------------------------------------------------------
    | Recipient
    |--------------------------------------------------------------------------
    */

    $mail->addAddress(
        "thecrochetplace5@gmail.com",
        "The Crochet Place"
    );


    /*
    |--------------------------------------------------------------------------
    | Reply To
    |--------------------------------------------------------------------------
    */

    $mail->addReplyTo(
        $email,
        $name
    );


    /*
    |--------------------------------------------------------------------------
    | Email
    |--------------------------------------------------------------------------
    */

    $mail->isHTML(true);

    $mail->Subject =
        "New Contact Message - The Crochet Place";


    $mail->Body = "

        <div style=\"
            font-family:Arial,sans-serif;
            max-width:650px;
            margin:auto;
            color:#444;
        \">

            <h2 style=\"
                color:#cf2d5c;
            \">

                New Message From
                The Crochet Place Website

            </h2>

            <hr>

            <p>

                <strong>Name:</strong><br>

                {$nameSafe}

            </p>

            <p>

                <strong>Email:</strong><br>

                {$emailSafe}

            </p>

            <p>

                <strong>Message:</strong><br>

                {$messageSafe}

            </p>

            <hr>

            <p style=\"
                color:#999;
                font-size:13px;
            \">

                Sent through thecrochetplace website contact form.

            </p>

        </div>

    ";


    /*
    |--------------------------------------------------------------------------
    | Plain-text fallback
    |--------------------------------------------------------------------------
    */

    $mail->AltBody =
        "New Contact Message\n\n" .
        "Name: " . $name . "\n" .
        "Email: " . $email . "\n\n" .
        "Message:\n" . $message;


    /*
    |--------------------------------------------------------------------------
    | Send
    |--------------------------------------------------------------------------
    */

    $mail->send();


    echo json_encode([
        "success" => true,
        "message" => "Your message has been sent successfully!"
    ]);

    exit;


} catch (Exception $e) {

    error_log(
        "Contact form error: " . $mail->ErrorInfo
    );

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" =>
            "Message could not be sent right now."
    ]);

    exit;

}