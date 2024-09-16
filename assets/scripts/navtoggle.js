document.getElementById('sidebar-toggle').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');

    // Toggle the 'hide-nav' class to show/hide navigation links
    if (sidebar.classList.contains('hide-nav')) {
        sidebar.classList.remove('hide-nav');
        content.style.marginLeft = '250px';
    } else {
        sidebar.classList.add('hide-nav');
        content.style.marginLeft = '50px'; // Adjust content margin to match new sidebar width
    }
});