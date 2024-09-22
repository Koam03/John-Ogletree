  // Simple Carousel Pagination for Social Icons
  document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.social-carousel .prev');
    const nextButton = document.querySelector('.social-carousel .next');
    const socialIcons = document.querySelector('.social-icons');
    const totalIcons = document.querySelectorAll('.social-icons a').length;
    const visibleIcons = 3; // Number of icons visible at once
    let currentIndex = 0;

    const updateCarousel = () => {
      const iconWidth = socialIcons.querySelector('a').offsetWidth + 20; // width + margin
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

    window.addEventListener('resize', updateCarousel);
  });