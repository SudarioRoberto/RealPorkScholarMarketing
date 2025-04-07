<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $organization = htmlspecialchars($_POST['organization']);
    $orgType = htmlspecialchars($_POST['organization_type']);
    $message = htmlspecialchars($_POST['message']);
    $newsletter = isset($_POST['newsletter']) ? 'Yes' : 'No';

    $to = "youremail@example.com"; // Replace with your actual email
    $subject = "New Contact Form Submission - MicroPig";
    $headers = "From: noreply@micropig.com\r\n" .
               "Reply-To: $email\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    $body = "You received a new message from the MicroPig website:\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Organization: $organization\n" .
            "Type of Organization: $orgType\n" .
            "Subscribed to Newsletter: $newsletter\n\n" .
            "Message:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: thank-you.html");
        exit();
    } else {
        echo "Error sending message.";
    }
}
?>