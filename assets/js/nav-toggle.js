// Function to check screen width and initialize sidebar visibility
function checkScreenWidth() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('menu-toggle');
  
    if (window.innerWidth <= 768) {
      // For smaller screens, hide the sidebar and show the menu toggle button
      sidebar.classList.add('sidebar-hidden');
      toggleButton.style.display = 'flex';
    } else {
      // For larger screens, show the sidebar and hide the menu toggle button
      sidebar.classList.remove('sidebar-hidden');
      toggleButton.style.display = 'none';
    }
  }
  
  // Toggle sidebar visibility on smaller screens
  document.getElementById('menu-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('sidebar-visible');
    sidebar.classList.toggle('sidebar-hidden');
  });
  
  // Run the checkScreenWidth function on initial load
  checkScreenWidth();
  
  // Add event listener for window resize to handle responsive changes
  window.addEventListener('resize', checkScreenWidth);  