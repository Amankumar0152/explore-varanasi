(function() {
    const track = document.getElementById('track');
    const slides = document.querySelectorAll('.slide');
    const left = document.getElementById('leftArrow');
    const right = document.getElementById('rightArrow');
    const dots = document.querySelectorAll('.dot-simple');

    let current = 0;
    const total = slides.length;

    function updateSlide(index) {
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;
      current = index;
      track.style.transform = `translateX(-${current * 100}%)`;

      dots.forEach((dot, i) => {
        if (i === current) dot.classList.add('active');
        else dot.classList.remove('active');
      });
    }

    left.addEventListener('click', () => updateSlide(current - 1));
    right.addEventListener('click', () => updateSlide(current + 1));

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => updateSlide(idx));
    });

    updateSlide(0);
  })();