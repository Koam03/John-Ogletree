// Update your JavaScript to trap focus within the sidebar when it's active
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const body = document.body;

  function toggleSidebar() {
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
      menuToggle.classList.toggle('active');

      const isExpanded = menuToggle.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);

      if (isExpanded) {
          // Focus on the first link in the sidebar
          const firstLink = sidebar.querySelector('.sidebar-nav a.neon-link');
          firstLink.focus();
      } else {
          // Return focus to the menu toggle button
          menuToggle.focus();
      }
  }

  menuToggle.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', toggleSidebar);

  const navLinks = document.querySelectorAll('.sidebar-nav a.neon-link');
  navLinks.forEach(link => {
      link.addEventListener('click', function () {
          if (sidebar.classList.contains('active')) {
              toggleSidebar();
          }
      });
  });

  // Close sidebar with Esc key
  document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sidebar.classList.contains('active')) {
          toggleSidebar();
      }
  });
});
