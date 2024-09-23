document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    // Show the sidebar and menu toggle by default
    sidebar.classList.add('active');
    overlay.classList.add('active');
    menuToggle.classList.add('active');
    body.classList.add('active-sidebar'); // Add the body class for the main content margin

    // Update ARIA attributes for the menu toggle
    menuToggle.setAttribute('aria-expanded', 'true');

    // Function to toggle the sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        menuToggle.classList.toggle('active');
        body.classList.toggle('active-sidebar'); // Toggle class on body for main content margin

        // Update ARIA attributes
        const isExpanded = menuToggle.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
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

    // Close sidebar with Esc key for accessibility
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    });
});
