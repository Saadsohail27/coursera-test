<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  exit("ERROR");
}

// HONEYPOT CHECK (bot detector)
if (!empty($_POST["hp"])) {
  exit("ERROR");
}

$name    = trim($_POST["name"]);
$email   = trim($_POST["email"]);
$subject = trim($_POST["subject"]);
$message = trim($_POST["message"]);

$to = "muntazirmehdi1412@gmail.com";
$headers = "From: $email\r\n";
$body =
"New Contact Form Submission:

Name: $name
Email: $email
Subject: $subject

Message:
$message
";

if (mail($to, "Website Contact Form: $subject", $body, $headers)) {
  echo "OK";
} else {
  echo "ERROR";
}
?>
