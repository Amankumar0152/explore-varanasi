// In the form submit function, replace the fetch call with:
function saveToTextFile(formData) {
    const textContent = `
========================================
📋 NEW BOOKING RECEIVED
========================================
Timestamp: ${new Date().toLocaleString()}
----------------------------------------
👤 GUEST INFORMATION:
----------------------------------------
Full Name: ${formData.fullName}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
----------------------------------------
🎯 TOUR DETAILS:
----------------------------------------
Tour Name: ${formData.tourName}
Tour Date: ${formData.tourDate}
Tour Time: ${formData.tourTime}
Number of People: ${formData.peopleCount}
Special Requirements: ${formData.specialReq || 'None'}
----------------------------------------
🌐 TECHNICAL INFO:
----------------------------------------
Page URL: ${formData.pageUrl}
User Agent: ${formData.userAgent}
IP Address: ${formData.ip}
========================================
    `;
    
    // Create download link
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `booking_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    return true;
}