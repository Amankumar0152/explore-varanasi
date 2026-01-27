<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Get the POST data
$data = json_decode(file_get_contents('php://input'), true);

// Add server timestamp and IP
$data['server_time'] = date('Y-m-d H:i:s');
$data['server_ip'] = $_SERVER['REMOTE_ADDR'];

// Format the data for text file
$logEntry = "========================================\n";
$logEntry .= "📋 NEW BOOKING RECEIVED\n";
$logEntry .= "========================================\n";
$logEntry .= "Timestamp: " . $data['server_time'] . "\n";
$logEntry .= "IP Address: " . $data['server_ip'] . "\n";
$logEntry .= "----------------------------------------\n";
$logEntry .= "👤 GUEST INFORMATION:\n";
$logEntry .= "----------------------------------------\n";
$logEntry .= "Full Name: " . ($data['fullName'] ?? 'N/A') . "\n";
$logEntry .= "Email: " . ($data['email'] ?? 'N/A') . "\n";
$logEntry .= "WhatsApp: " . ($data['whatsapp'] ?? 'N/A') . "\n";
$logEntry .= "----------------------------------------\n";
$logEntry .= "🎯 TOUR DETAILS:\n";
$logEntry .= "----------------------------------------\n";
$logEntry .= "Tour Name: " . ($data['tourName'] ?? 'N/A') . "\n";
$logEntry .= "Tour Date: " . ($data['tourDate'] ?? 'N/A') . "\n";
$logEntry .= "Tour Time: " . ($data['tourTime'] ?? 'N/A') . "\n";
$logEntry .= "Number of People: " . ($data['peopleCount'] ?? 'N/A') . "\n";
$logEntry .= "Special Requirements: " . ($data['specialReq'] ?? 'None') . "\n";
$logEntry .= "----------------------------------------\n";
$logEntry .= "🌐 TECHNICAL INFO:\n";
$logEntry .= "----------------------------------------\n";
$logEntry .= "Page URL: " . ($data['pageUrl'] ?? 'N/A') . "\n";
$logEntry .= "User Agent: " . ($data['userAgent'] ?? 'N/A') . "\n";
$logEntry .= "Booking Time (Client): " . ($data['bookingTime'] ?? 'N/A') . "\n";
$logEntry .= "========================================\n\n";

// Save to text file
$filename = 'bookings_log.txt';
file_put_contents($filename, $logEntry, FILE_APPEND | LOCK_EX);

// Also save to JSON file for easier reading
$jsonFile = 'bookings.json';
$allBookings = [];

if (file_exists($jsonFile)) {
    $existing = file_get_contents($jsonFile);
    // Remove trailing comma and bracket if exists
    $existing = rtrim($existing, ",\n]");
    if ($existing) {
        $allBookings = json_decode('[' . $existing . ']', true) ?? [];
    }
}

$allBookings[] = $data;
file_put_contents($jsonFile, json_encode($allBookings, JSON_PRETTY_PRINT));

// Return success response
echo json_encode([
    'status' => 'success',
    'message' => 'Booking saved successfully',
    'filename' => $filename,
    'count' => count($allBookings)
]);
?>