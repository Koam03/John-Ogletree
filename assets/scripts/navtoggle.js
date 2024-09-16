// Toggle sidebar visibility
document.getElementById('sidebar-toggle').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
});

// Toggle submenu visibility
document.querySelectorAll('.dropdown-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        var submenu = this.nextElementSibling;
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
        } else {
            submenu.style.display = 'block';
        }
    });
});