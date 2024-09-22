// footer.js

// Simple Carousel Pagination for Social Icons
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.social-carousel .prev');
    const nextButton = document.querySelector('.social-carousel .next');
    const socialIcons = document.querySelector('.social-icons');
    const socialItems = document.querySelectorAll('.social-icons .social-item');
    const totalIcons = socialItems.length;
    let visibleIcons = calculateVisibleIcons(); // Initialize
    let currentIndex = 0;
  
    function calculateVisibleIcons() {
      const wrapperWidth = document.querySelector('.carousel-wrapper').offsetWidth;
      const itemWidth = socialItems[0].offsetWidth + 30; // width + margin (15px each side)
      return Math.floor(wrapperWidth / itemWidth);
    }
  
    const updateCarousel = () => {
      const itemWidth = socialItems[0].offsetWidth + 30; // width + margin
      socialIcons.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };
  
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    nextButton.addEventListener('click', () => {
      if (currentIndex < totalIcons - visibleIcons) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    window.addEventListener('resize', () => {
      const newVisibleIcons = calculateVisibleIcons();
      if (visibleIcons !== newVisibleIcons) {
        visibleIcons = newVisibleIcons;
        if (currentIndex > totalIcons - visibleIcons) {
          currentIndex = totalIcons - visibleIcons;
          if (currentIndex < 0) currentIndex = 0;
          updateCarousel();
        }
      }
    });
  });
  