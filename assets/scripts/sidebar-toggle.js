document.addEventListener("DOMContentLoaded", function() {
    // Add sidebar toggle button for small screens
    const sidebarButtonHTML = `
      <button class="open-sidebar-btn" onclick="openSidebar()">☰ Menu</button>
    `;
    document.body.insertAdjacentHTML('afterbegin', sidebarButtonHTML);
  
    // Functions to handle sidebar open and close
    function openSidebar() {
      document.getElementById('mySidebar').classList.add('open');
    }
  
    function closeSidebar() {
      document.getElementById('mySidebar').classList.remove('open');
    }
  
    // Add event listener for close button inside the sidebar
    document.querySelector('.fa-remove').addEventListener('click', closeSidebar);
  });
  