function sendToWhatsApp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let whatsapp = document.getElementById("whatsapp").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let people = document.getElementById("people").value;
  let messageBox = document.getElementById("message").value;

  if (!time || !people) {
    alert("⏰ Please select a time and number of people.");
    return;
  }

  let message = `🌿 Free Walk Tour Registration%0A
--------------------%0A
👤 Name: ${name}%0A
📧 Email: ${email}%0A
📞 Phone: ${phone}%0A
💬 WhatsApp: ${whatsapp}%0A
📅 Date: ${date}%0A
⏰ Time: ${time}%0A
👥 People: ${people}%0A
📝 Message: ${messageBox}`;

  // Replace with your WhatsApp number
  let url = "https://wa.me/919565194075?text=" + message;
  window.open(url, '_blank').focus();
}

// Animate timeline items on scroll
document.addEventListener("scroll", () => {
  let items = document.querySelectorAll(".timeline-item");
  items.forEach(item => {
    let rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("fade-in");
    }
  });
});
