// Function to open the sidebar
function openSidebar() {
    document.getElementById('mySidebar').classList.add('open');
  }
  
  // Function to close the sidebar
  function closeSidebar() {
    document.getElementById('mySidebar').classList.remove('open');
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // Add the sidebar toggle button to the DOM
    const sidebarButtonHTML = `
      <button class="open-sidebar-btn w3-button w3-black" onclick="openSidebar()">☰ Menu</button>
    `;
  
    // Insert the button into the body or any specific element
    document.body.insertAdjacentHTML('afterbegin', sidebarButtonHTML);
  });  