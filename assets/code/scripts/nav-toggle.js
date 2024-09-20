      // Toggle Sidebar on Mobile
      const menuToggle = document.getElementById('mobile-menu');
      const sidebarNav = document.getElementById('sidebar-nav');
      const body = document.body;
      
      menuToggle.addEventListener('click', (e) => {
         e.stopPropagation(); // Prevent event bubbling
         sidebarNav.classList.toggle('active');
         menuToggle.classList.toggle('active');
         body.classList.toggle('active-sidebar');
         
         // Update ARIA attributes
         if (menuToggle.classList.contains('active')) {
            menuToggle.setAttribute('aria-expanded', 'true');
         } else {
            menuToggle.setAttribute('aria-expanded', 'false');
         }
      });
      
      // Toggle Dropdowns on Mobile
      const submenuParents = document.querySelectorAll('.has-submenu > a.neon-link');
      
      submenuParents.forEach(parent => {
         parent.addEventListener('click', (e) => {
            // Only toggle on mobile
            if (window.innerWidth <= 991) {
               e.preventDefault();
               parent.parentElement.classList.toggle('active');
            }
         });
      });
      
      // Close Sidebar when clicking outside
      document.addEventListener('click', (e) => {
         if (!sidebarNav.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebarNav.classList.remove('active');
            menuToggle.classList.remove('active');
            body.classList.remove('active-sidebar');
            menuToggle.setAttribute('aria-expanded', 'false');
            
            // Remove active classes from all submenus
            submenuParents.forEach(parent => {
               parent.parentElement.classList.remove('active');
            });
         }
      });
      
      // Prevent clicks inside the sidebar from closing it
      sidebarNav.addEventListener('click', (e) => {
         e.stopPropagation();
      });
      
      // Handle Window Resize
      window.addEventListener('resize', () => {
         if (window.innerWidth > 991) {
            sidebarNav.classList.remove('active');
            menuToggle.classList.remove('active');
            body.classList.remove('active-sidebar');
            menuToggle.setAttribute('aria-expanded', 'false');
            
            // Remove active classes from all submenus
            submenuParents.forEach(parent => {
               parent.parentElement.classList.remove('active');
            });
         }
      });