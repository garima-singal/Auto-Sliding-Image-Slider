let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[index].style.display = "block";
}

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;
  showSlide(slideIndex);
}

showSlide(slideIndex);

// Auto-slide every 4 seconds
setInterval(() => {
    changeSlide(1);
  }, 4000); 
  

  showSlide(slideIndex);
