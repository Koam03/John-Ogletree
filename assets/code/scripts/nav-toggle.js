document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const body = document.body;

  // Function to toggle the sidebar
  function toggleSidebar() {
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
      menuToggle.classList.toggle('active');
      body.classList.toggle('active-sidebar'); // Toggle class on body for main content margin

      // Update ARIA attributes
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

  // Event listener for menu toggle button
  menuToggle.addEventListener('click', toggleSidebar);

  // Event listener for overlay click to close the sidebar
  overlay.addEventListener('click', toggleSidebar);

  // Optional: Close the sidebar when a navigation link is clicked (useful for single-page applications)
  const navLinks = document.querySelectorAll('.sidebar-nav a.neon-link');
  navLinks.forEach(link => {
      link.addEventListener('click', function () {
          if (sidebar.classList.contains('active')) {
              toggleSidebar();
          }
      });
  });

  // Close sidebar with Esc key for accessibility and trap focus
  document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sidebar.classList.contains('active')) {
          toggleSidebar();
      }

      // Trap focus within the sidebar when it's active
      if (sidebar.classList.contains('active')) {
          const focusableElements = sidebar.querySelectorAll('a.neon-link, button.neon-button, input, textarea');
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.key === 'Tab') {
              if (e.shiftKey) { // Shift + Tab
                  if (document.activeElement === firstElement) {
                      e.preventDefault();
                      lastElement.focus();
                  }
              } else { // Tab
                  if (document.activeElement === lastElement) {
                      e.preventDefault();
                      firstElement.focus();
                  }
              }
          }
      }
  });
});
