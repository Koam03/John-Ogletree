document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.neon-sidebar');
    const body = document.body;

    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('active');
      body.classList.toggle('active-sidebar');
    });
  });