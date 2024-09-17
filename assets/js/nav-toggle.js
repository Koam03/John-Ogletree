// Toggle for sidebar visibility
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Add click event listener for the menu toggle button
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-visible');
});
