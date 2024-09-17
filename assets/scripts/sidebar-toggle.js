document.addEventListener("DOMContentLoaded", function() {
    // Add the sidebar toggle button for smaller screens
    const sidebarButtonHTML = `
      <button class="open-sidebar-btn" onclick="openSidebar()">☰ Menu</button>
    `;
    document.body.insertAdjacentHTML('afterbegin', sidebarButtonHTML);
  
    // Function to open the sidebar
    function openSidebar() {
      document.getElementById('mySidebar').classList.add('open');
    }
  
    // Function to close the sidebar
    function closeSidebar() {
      document.getElementById('mySidebar').classList.remove('open');
    }
  
    // Add event listener to close button inside the sidebar
    const closeButton = document.querySelector('.fa-remove');
    if (closeButton) {
      closeButton.addEventListener('click', closeSidebar);
    }
  });
  