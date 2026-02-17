<?php
// api/send-email.php
// Email handler using PHPMailer + OVH SMTP

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load environment variables
if (file_exists(__DIR__ . '/../.env.php')) {
    require_once __DIR__ . '/../.env.php';
} else {
    // Fallback: Set default test values
    putenv('SMTP_HOST=ssl0.ovh.net');
    putenv('SMTP_PORT=465');
    putenv('SMTP_SECURE=true');
    putenv('SMTP_USER=info@divaeasy.com');
    putenv('SMTP_PASS=your-app-password-here');
    putenv('CONTACT_EMAIL=contact@divaeasy.com');
}

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Set response header
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(json_encode(['success' => true]));
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['error' => 'Method not allowed']));
}

// Get JSON data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['name', 'email', 'company', 'subject', 'message'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        exit(json_encode(['error' => "Field '{$field}' is required"]));
    }
}

// Extract data
$name = htmlspecialchars($data['name']);
$email = htmlspecialchars($data['email']);
$company = htmlspecialchars($data['company']);
$subject = htmlspecialchars($data['subject']);
$message = htmlspecialchars($data['message']);

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit(json_encode(['error' => 'Invalid email format']));
}

// Prevent duplicate submissions: Generate deterministic request ID and check if already sent
$request_hash = md5($email . '|' . $subject . '|' . $message);
$request_file = __DIR__ . '/../.requests/' . $request_hash . '.txt';

// Create requests directory if it doesn't exist
if (!is_dir(__DIR__ . '/../.requests')) {
    @mkdir(__DIR__ . '/../.requests', 0755, true);
}

// Check if this exact request was sent in the last 120 seconds
if (file_exists($request_file)) {
    $last_sent_time = filemtime($request_file);
    if ((time() - $last_sent_time) < 120) {
        // Return success to prevent duplicate retries showing as errors
        http_response_code(200);
        exit(json_encode([
            'success' => true,
            'message' => 'Emails sent successfully'
        ]));
    }
}

try {
    // Load PHPMailer
    require_once __DIR__ . '/../vendor/autoload.php';
    
    // OVH SMTP Configuration
    $smtp_host = getenv('SMTP_HOST') ?: 'ssl0.ovh.net';
    $smtp_port = (int)(getenv('SMTP_PORT') ?: 465);
    $smtp_user = getenv('SMTP_USER') ?: 'git@divaeasy.com';
    $smtp_pass = getenv('SMTP_PASS') ?: '';
    $contact_email = getenv('CONTACT_EMAIL') ?: 'divaeasy2@gmail.com';
    
    // Validate credentials
    if (empty($smtp_user) || empty($smtp_pass) || $smtp_pass === 'your-app-password-here') {
        throw new Exception('SMTP credentials not configured. Please set environment variables.');
    }
    
    // Retry logic variables
    $max_retries = 3;
    $retry = 0;
    $email_sent = false;
    $last_error = null;
    
    while ($retry < $max_retries && !$email_sent) {
        try {
            // Create PHPMailer instance
            $mail = new PHPMailer(true);
            
            // SMTP configuration
            $mail->isSMTP();
            $mail->Host = $smtp_host;
            $mail->SMTPAuth = true;
            $mail->Username = $smtp_user;
            $mail->Password = $smtp_pass;
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = $smtp_port;
            $mail->CharSet = 'UTF-8';
            
            // Increase SMTP timeout for slow connections
            $mail->Timeout = 60;  // Increased from 30 to 60 seconds
            $mail->SMTPKeepAlive = false;
            
            // OVH specific SSL settings
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer'  => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );
            
            // Set timezone
            date_default_timezone_set('Europe/Paris');
            
            // ============ EMAIL 1: TO COMPANY ============
            $mail->clearAddresses();
            $mail->clearReplyTos();
            
            $mail->setFrom($smtp_user, 'Diva Easy');
            $mail->addAddress($contact_email);
            $mail->addReplyTo($email, $name);
            
            $mail->Subject = "[Diva Easy] Nouveau message - {$subject}";
            $mail->isHTML(true);
            
            $company_html = getCompanyEmailTemplate($name, $email, $company, $subject, $message);
            $mail->Body = $company_html;
            $mail->AltBody = "De: {$name}\nEmail: {$email}\nEntreprise: {$company}\nSujet: {$subject}\n\nMessage:\n{$message}";
            
            $mail->send();
            
            // ============ EMAIL 2: TO USER (CONFIRMATION) ============
            $mail->clearAddresses();
            
            $mail->setFrom($smtp_user, 'Diva Easy');
            $mail->addAddress($email);
            
            $mail->Subject = 'Confirmation de réception - Diva Easy';
            
            $user_html = getUserEmailTemplate($name, $subject);
            $mail->Body = $user_html;
            $mail->AltBody = "Bonjour {$name},\n\nNous avons bien reçu votre message et vous remercions de nous avoir contacté.\nUn membre de notre équipe vous répondra dans les meilleurs délais.\n\nCordialement,\nL'équipe Diva Easy";
            
            $mail->send();
            
            // Mark as sent on success
            $email_sent = true;
            
        } catch (Exception $retry_error) {
            // Store error and retry
            $last_error = $retry_error->getMessage();
            $retry++;
            
            if ($retry < $max_retries) {
                // Wait before retrying (exponential backoff)
                $wait_time = pow(2, $retry - 1); // 1s, 2s, 4s
                sleep($wait_time);
            }
        }
    }
    
    if ($email_sent) {
        // Mark this request as sent to prevent duplicates
        @file_put_contents($request_file, 'sent', LOCK_EX);
        
        // Success response
        http_response_code(200);
        exit(json_encode([
            'success' => true,
            'message' => 'Emails sent successfully'
        ]));
    } else {
        // All retries failed
        throw new Exception("Failed to send emails after {$max_retries} attempts: {$last_error}");
    }
    
} catch (Exception $e) {
    // Error response
    http_response_code(500);
    error_log("Email sending error: " . $e->getMessage());
    exit(json_encode([
        'error' => 'Failed to send email',
        'details' => $e->getMessage()
    ]));
}

// Email template for company
function getCompanyEmailTemplate($name, $email, $company, $subject, $message) {
    $timestamp = date('d/m/Y H:i:s');
    return <<<HTML
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #14b8a6 0%, #1e293b 100%); padding: 30px; border-radius: 10px; color: white;">
            <h2 style="margin: 0;">Nouveau message reçu</h2>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <p><strong>De:</strong> {$name}</p>
            <p><strong>Email:</strong> <a href="mailto:{$email}">{$email}</a></p>
            <p><strong>Entreprise:</strong> {$company}</p>
            <p><strong>Sujet:</strong> {$subject}</p>
            <p style="font-size: 12px; color: #999;">Reçu le: {$timestamp}</p>
        </div>
        
        <div style="padding: 20px; border-left: 4px solid #14b8a6; background: #f0fdfa;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #333;">{$message}</p>
        </div>
        
        <div style="background: #f3f4f6; padding: 20px; margin-top: 20px; border-radius: 8px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>Cet email a été envoyé depuis le formulaire de contact du site Diva Easy.</p>
        </div>
    </div>
    HTML;
}

// Email template for user
function getUserEmailTemplate($name, $subject) {
    return <<<HTML
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #14b8a6 0%, #1e293b 100%); padding: 30px; border-radius: 10px; color: white;">
            <h2 style="margin: 0;">Merci pour votre message!</h2>
        </div>
        
        <div style="padding: 30px;">
            <p>Bonjour {$name},</p>
            <p>Nous avons bien reçu votre message et vous remercions de nous avoir contacté.</p>
            <p>Un membre de notre équipe vous répondra dans les meilleurs délais (généralement sous 24 heures).</p>
            
            <div style="background: #f0fdfa; padding: 15px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #14b8a6;">
                <p><strong>Récapitulatif de votre message:</strong></p>
                <p><strong>Sujet:</strong> {$subject}</p>
            </div>
            
            <p>Cordialement,<br>
            <strong>L'équipe Diva Easy</strong></p>
        </div>
        
        <div style="background: #f3f4f6; padding: 20px; margin-top: 20px; border-radius: 8px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>Vous avez reçu cet email car vous avez rempli le formulaire de contact sur notre site.</p>
        </div>
    </div>
    HTML;
}
?>
