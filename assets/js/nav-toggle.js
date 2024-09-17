// JavaScript to toggle the sidebar on smaller screens
document.getElementById('menu-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('sidebar-visible'); // Toggle visibility
  });  