<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill in all the fields";
        exit;
    }

    if (!filter_var($email, FILTER_SANITIZE_EMAIL)) {
        echo "Invalid email format.";
        exit
    }

    $to = "antonsodu@gmail.com";
    $subject = "I have a question/enquiry to make";

    $email_body = "You have received a new message from your contact form:\n\n";
    $email_body .= "Here are the details:\n";
    $email_body .= "---------------------------------------\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Message:\n$messages\n";
    $email_body .= "---------------------------------------\n\n";
    $email_body .= "This message was submitted on " . date('Y-m-d H:i:s') . "\n";

    //Email header
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send an email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Thanks you, your message has been sent!";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
   } else {
    // Redirect
    header("Location: contact.html");
    exit;
}