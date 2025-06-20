let slideIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".track");
  const cards = document.querySelectorAll(".card");
  const totalCards = cards.length;

  function showSlide(index) {
    const cardWidth = cards[0].offsetWidth; 
    const maxIndex = totalCards - 3;

    
    if (index < 0) slideIndex = 0;
    else if (index > maxIndex) slideIndex = maxIndex;
    else slideIndex = index;

    const moveX = slideIndex * cardWidth;
    track.style.transform = `translateX(-${moveX}px)`;
  }

  window.nextSlide = function () {
    showSlide(slideIndex + 1);
  };

  window.prevSlide = function () {
    showSlide(slideIndex - 1);
  };
});




let currentImage = 0;
const imageTrack = document.querySelector('.imgtrack');
const images = document.querySelectorAll('.imgtrack img');
const totalImages = images.length;
const visibleImages = 3;

function slideImages() {
  currentImage++;
  if (currentImage > totalImages - visibleImages) {
    currentImage = 0; // reset
  }
  const imageWidth = images[0].offsetWidth;
  imageTrack.style.transform = `translateX(-${currentImage * imageWidth}px)`;
}

setInterval(slideImages, 4000);





  const modal = document.getElementById('city');
  const openBtn = document.getElementById('open');
  const closeBtn = document.getElementById('close');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

 



