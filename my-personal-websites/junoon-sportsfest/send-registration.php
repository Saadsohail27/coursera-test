<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  echo json_encode(['success' => false]);
  exit;
}

/* HONEYPOT CHECK: if filled, we assume bot and silently accept (no email) */
if (!empty($_POST['website'])) {
  // Return success to the bot to avoid aggressive retries
  echo json_encode(['success' => true]);
  exit;
}

// Basic expected fields - you can expand or sanitize further
$to = "info@junoonfest.pk";
$subject = "New JunoonFest Registration";

$body = "New registration received:\n\n";

// Build message from POST values (skip honeypot if present)
foreach ($_POST as $key => $value) {
  if ($key === 'website') continue; // skip honeypot
  $label = ucfirst(str_replace('_', ' ', $key));
  // sanitize a bit
  $clean = trim(filter_var($value, FILTER_SANITIZE_STRING));
  $body .= "$label: $clean\n";
}

$headers = "From: JunoonFest <no-reply@junoonfest.pk>\r\n";
$headers .= "Reply-To: registrations@junoonfest.pk\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

// Try to send
$sent = mail($to, $subject, $body, $headers);

// Return JSON result
echo json_encode(['success' => (bool)$sent]);
