const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let index = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % items.length;
    updateCarousel();
}

function prevSlide() {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

