<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    

    // Email details
    $to = "info@magedebeachresort.co.za";
    $subject = "New Contact Form Message from MAGEDE Beach Resort";
    

    // Email message
    $email_message = "New contact form submission:\n\n";
    $email_message .= "Name: " . $name . "\n";
    $email_message .= "Email: " . $email . "\n";
    $email_message .= "Phone: " . $phone . "\n";
    $email_message .= "Message: " . $message . "\n";
    

    // Email headers
    $headers = "From: " . $email;
    
    
    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>