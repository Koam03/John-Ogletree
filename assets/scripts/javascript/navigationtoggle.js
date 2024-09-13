document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.folder').forEach(folder => {
        folder.addEventListener('click', () => {
            const subMenu = folder.nextElementSibling;
            if (subMenu && subMenu.tagName === 'UL') {
                const isVisible = subMenu.style.display === 'block';
                document.querySelectorAll('.file-tree ul').forEach(ul => {
                    ul.style.display = 'none';
                });
                subMenu.style.display = isVisible ? 'none' : 'block';
            }
        });
    });
});