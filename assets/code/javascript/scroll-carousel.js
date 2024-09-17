document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let index = 0;
  
    function moveCarousel() {
      carouselItems.forEach((item, i) => {
        item.style.transform = `translateX(${(i - index) * 100}%)`;
      });
    }
  
    // Auto-slide every 3 seconds
    setInterval(() => {
      index = (index + 1) % carouselItems.length;
      moveCarousel();
    }, 3000);
  
    // Smooth scrolling for sidebar links
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  