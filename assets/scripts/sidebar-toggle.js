document.addEventListener("DOMContentLoaded", function() {
    // Add the sidebar toggle button for smaller screens
    const sidebarButtonHTML = `
      <button class="open-sidebar-btn" onclick="openSidebar()">☰ Menu</button>
    `;
    document.body.insertAdjacentHTML('afterbegin', sidebarButtonHTML);
  
    console.log("Sidebar toggle button added to the DOM.");
  
    // Function to open the sidebar
    function openSidebar() {
      const sidebar = document.getElementById('mySidebar');
      if (sidebar) {
        console.log("Opening sidebar...");
        sidebar.classList.add('open');
      } else {
        console.error("Sidebar element with ID 'mySidebar' not found.");
      }
    }
  
    // Function to close the sidebar
    function closeSidebar() {
      const sidebar = document.getElementById('mySidebar');
      if (sidebar) {
        console.log("Closing sidebar...");
        sidebar.classList.remove('open');
      } else {
        console.error("Sidebar element with ID 'mySidebar' not found.");
      }
    }
  
    // Add event listener to close button inside the sidebar
    const closeButton = document.querySelector('.fa-remove');
    if (closeButton) {
      console.log("Close button found. Adding event listener.");
      closeButton.addEventListener('click', closeSidebar);
    } else {
      console.error("Close button with class 'fa-remove' not found.");
    }
  });
  