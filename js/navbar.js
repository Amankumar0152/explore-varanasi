// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});


// Dropdown toggle for mobile (FIXED VERSION)
const dropdownParents = document.querySelectorAll('.nav-links li');

dropdownParents.forEach(parent => {
    const link = parent.querySelector('a');
    const dropdown = parent.querySelector('.dropdown');

    if (dropdown && link) {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault();

                // Close other dropdowns
                document.querySelectorAll('.dropdown').forEach(d => {
                    if (d !== dropdown) d.classList.remove('active');
                });

                // Toggle current dropdown
                dropdown.classList.toggle('active');
            }
        });
    }
});


// Close menu when clicking outside (mobile)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 992) {
        if (!e.target.closest('.navbar')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');

            // Close all dropdowns
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    }
});