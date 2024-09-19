document.addEventListener('DOMContentLoaded', function() {
  const submenuParents = document.querySelectorAll('.sidebar-nav li.has-submenu > a.neon-link');

  submenuParents.forEach(function(parentLink) {
    parentLink.addEventListener('click', function(e) {
      const parentLi = this.parentElement;

      // Toggle the 'active' class
      parentLi.classList.toggle('active');

      // Optional: Close other open submenus
      submenuParents.forEach(function(otherLink) {
        if (otherLink !== parentLink) {
          otherLink.parentElement.classList.remove('active');
        }
      });

      // Prevent default link behavior if the parent link has a submenu
      e.preventDefault();
    });
  });
});