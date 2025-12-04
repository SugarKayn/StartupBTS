const track = document.querySelector('.carousel-track');
let slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

let currentIndex = 0;
let isMoving = false;

// Show current slide Only
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Navigation Functions 
function nextSlide() {
    if (isMoving) return;
    isMoving = true;
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    setTimeout(() => (isMoving = false), 600); 
}

function prevSlide() {
    if (isMoving) return;
    isMoving = true;
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    setTimeout(() => (isMoving = false), 600);
}

const slideInterval = 4000;
let autoSlide;

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, slideInterval);
}

function restartAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

// --- Button Events ---
nextButton.addEventListener('click', () => {
    nextSlide();
    restartAutoSlide();
});

prevButton.addEventListener('click', () => {
    prevSlide();
    restartAutoSlide();
});

// --- Initialize Carousel ---
showSlide(currentIndex);
startAutoSlide();



