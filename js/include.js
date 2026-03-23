// js/include.js
// document.addEventListener('DOMContentLoaded', function () {
  // Load the footer HTML
//   fetch('components/footer.html')
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById('footer').innerHTML = data;
//     })
//     .catch(error => console.error('Error loading footer:', error));
// });


// js/include.js
document.addEventListener('DOMContentLoaded', function () {
    // Load the navbar
    fetch('/components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));

    // Load the footer
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});