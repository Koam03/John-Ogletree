document.getElementById('sidebar-toggle').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');

    if (sidebar.style.display === 'none' || !sidebar.style.display) {
        sidebar.style.display = 'block';
        content.style.marginLeft = '250px';
        content.style.width = 'calc(100% - 250px)';
    } else {
        sidebar.style.display = 'none';
        content.style.marginLeft = '0';
        content.style.width = '100%';
    }
});