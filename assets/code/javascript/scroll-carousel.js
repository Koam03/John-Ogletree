document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    const links = document.querySelectorAll('.nav-list a');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Toggle portfolio overlay
    const portfolioItems = document.querySelectorAll('.gallery-item');
    portfolioItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.querySelector('.gallery-overlay').style.opacity = '1';
      });
      item.addEventListener('mouseleave', () => {
        item.querySelector('.gallery-overlay').style.opacity = '0';
      });
    });
  });
  