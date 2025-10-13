<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST['name']) || isset($_POST['email'])){
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $company = $_POST['company'] ?? 'Not specified';
    $service = $_POST['service'] ?? 'Not specified';
    $capacity = $_POST['capacity'] ?? 'Not specified';
    $location = $_POST['location'] ?? 'Not specified';
    $timeline = $_POST['timeline'] ?? 'Not specified';
    $description = $_POST['description'] ?? '';

    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';

    $mail = new PHPMailer(true);

    try {
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'info@powertonengineering.com';
        $mail->Password = 'Powerton@123';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom('info@powertonengineering.com', 'DLS Envirotech Quote Request');
        $mail->addAddress('info.dlsenvirotech@gmail.com', 'DLS Envirotech Admin');
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = "Quote Request - " . $service;
        $mail->Body = "
        <table style='width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;'>
        <tr>
            <td colspan='2' style='padding: 15px; border: 1px solid #ccc; background: #0066cc; color: white; text-align: center;'>
                <h2>New Quote Request</h2>
            </td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold; width: 30%;'>Full Name:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$name</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Email:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$email</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Phone:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$phone</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Company:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$company</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Service Type:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$service</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Capacity Required:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$capacity</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Location:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$location</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Timeline:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$timeline</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Project Description:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$description</td>
        </tr>
        <tr>
            <td colspan='2' style='padding: 10px; border: 1px solid #ccc; background: #0066cc; color: white; text-align: center;'>
                <strong>This e-mail was sent from the quote request form on DLS Envirotech Corporation website.</strong><br>
                <small>Submitted on: " . date('Y-m-d H:i:s') . "</small>
            </td>
        </tr>
        </table>";

        $mail->send();
        
        header('Content-Type: application/json');
        echo json_encode(['success' => true, 'message' => 'Quote request sent successfully']);
        
    } catch (Exception $e) {
        header('Content-Type: application/json');
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Quote request could not be sent: ' . $mail->ErrorInfo]);
    }
} else {
    header('Content-Type: application/json');
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
?>
