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

$to = "volunteers@junoonfest.pk";
$subject = "New Volunteer Application — JunoonFest";

$body = "New volunteer application received:\n\n";

foreach ($_POST as $key => $value) {

  // Skip honeypot field completely
  if ($key === 'website') continue;

  $label = ucfirst(str_replace('_', ' ', $key));
  $body .= "$label: $value\n";
}

$headers = "From: JunoonFest <no-reply@junoonfest.pk>\r\n";
$headers .= "Reply-To: volunteers@junoonfest.pk\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

$sent = mail($to, $subject, $body, $headers);

echo json_encode(['success' => $sent]);
