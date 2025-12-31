<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  echo json_encode(['success' => false]);
  exit;
}

/* ===========================
   Honeypot check (ANTI-SPAM)
   =========================== */
if (!empty($_POST['website'])) {
  // Bot detected — pretend success, do nothing
  echo json_encode(['success' => true]);
  exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if (!$name || !$email || !$message) {
  echo json_encode(['success' => false]);
  exit;
}

$to = "info@junoonfest.pk";
$subject = "JunoonFest — Contact / Sponsorship Query";

$body = "New contact query received:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n";

$headers = "From: JunoonFest <no-reply@junoonfest.pk>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

$sent = mail($to, $subject, $body, $headers);

echo json_encode(['success' => $sent]);
