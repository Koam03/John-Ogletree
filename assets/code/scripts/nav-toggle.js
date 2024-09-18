const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.neon-sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
