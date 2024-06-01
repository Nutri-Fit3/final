let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function updateSlider() {
    if (currentIndex >= totalSlides) currentIndex = 0;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-100 * currentIndex}%)`;
    });
}

function autoSlide() {
    currentIndex++;
    updateSlider();
}

let autoSlideInterval = setInterval(autoSlide, 3000);

nextButton.addEventListener('click', () => {
    currentIndex++;
    updateSlider();
    resetInterval();
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
    resetInterval();
});

function resetInterval() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 3000);
}