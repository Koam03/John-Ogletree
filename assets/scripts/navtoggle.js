document.getElementById('sidebar-toggle').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');

    if (sidebar.style.width === '0px' || !sidebar.style.width) {
        sidebar.style.width = '250px';
        content.style.marginLeft = '250px';
        content.style.width = 'calc(100% - 250px)';
    } else {
        sidebar.style.width = '0px';
        content.style.marginLeft = '0';
        content.style.width = '100%';
    }
});

// Add event listeners for dropdown toggles
var dropdowns = document.querySelectorAll('.dropdown-toggle');
dropdowns.forEach(function (dropdownToggle) {
    dropdownToggle.addEventListener('click', function () {
        var parent = this.parentElement;
        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
        } else {
            parent.classList.add('active');
        }
    });
});