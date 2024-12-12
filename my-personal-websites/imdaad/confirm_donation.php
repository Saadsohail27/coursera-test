<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $donor_name = $_POST['donor_name'];
    $donation_date = $_POST['donation_date'];
    $amount = $_POST['amount'];

    if (empty($donor_name) || empty($donation_date) || empty($amount)) {
        echo json_encode(['success' => false, 'message' => 'All fields are required.']);
        exit;
    }

    // Email configuration
    $to = 'info@imdaad.org';
    $subject = 'Donation Confirmation';
    $headers = "From: no-reply@imdaad.org\r\n";
    $headers .= "Reply-To: no-reply@imdaad.org\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $message = "
        <html>
        <body>
            <h2>Donation Confirmation</h2>
            <p><strong>Name:</strong> {$donor_name}</p>
            <p><strong>Date and Time of Donation:</strong> {$donation_date}</p>
            <p><strong>Amount:</strong> PKR {$amount}</p>
        </body>
        </html>
    ";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Thank You for confirming your donation!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Network Error, Please check your internet connection and try again.']);
    }
}
?>