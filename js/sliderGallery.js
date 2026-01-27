let currentIndex = 0;
const wrapper = document.getElementById('sliderWrapper');
const images = document.querySelectorAll('.slide-img');
const dotsContainer = document.getElementById('dotsContainer');

// Dots generate karna
images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
});

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active-dot', i === currentIndex);
    });
}

function moveSlide(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function goToSlide(index) {
    currentIndex = index;
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

// Lightbox Logic
images.forEach(img => {
    img.onclick = () => {
        document.getElementById('lightbox-img').src = img.src;
        document.getElementById('lightbox').style.display = 'flex';
    };
});

function closeLightbox(event) {
    // Agar image par click ho toh band nahi hoga, sirf background ya button par
    if (event.target.id === 'lightbox' || event.target.classList.contains('close-btn')) {
        document.getElementById('lightbox').style.display = 'none';
    }
}

updateDots(); // Initial state