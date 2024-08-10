let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide() {
  slides[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.opacity = 1;
}

export default changeSlide;
