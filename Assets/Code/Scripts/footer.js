// footer.js

// Simple Carousel Pagination for Social Icons
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.social-carousel .prev');
    const nextButton = document.querySelector('.social-carousel .next');
    const socialIcons = document.querySelector('.social-icons');
    const socialLinks = document.querySelectorAll('.social-icons .social-link');
    const totalIcons = socialLinks.length;
    const visibleIcons = calculateVisibleIcons();
    let currentIndex = 0;
  
    function calculateVisibleIcons() {
      const wrapperWidth = document.querySelector('.carousel-wrapper').offsetWidth;
      const linkWidth = socialLinks[0].offsetWidth + 30; // width + margin (15px each side)
      return Math.floor(wrapperWidth / linkWidth);
    }
  
    const updateCarousel = () => {
      const iconWidth = socialLinks[0].offsetWidth + 30; // width + margin (15px each side)
      socialIcons.style.transform = `translateX(-${currentIndex * iconWidth}px)`;
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
      // Recalculate visible icons on resize
      const newVisibleIcons = calculateVisibleIcons();
      if (newVisibleIcons !== visibleIcons) {
        visibleIcons = newVisibleIcons;
        if (currentIndex > totalIcons - visibleIcons) {
          currentIndex = totalIcons - visibleIcons;
          if (currentIndex < 0) currentIndex = 0;
        }
        updateCarousel();
      }
    });
  });
  