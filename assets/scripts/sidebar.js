document.addEventListener("DOMContentLoaded", function() {
    const sidebarHTML = `
      <nav class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style="z-index:3;width:250px" id="mySidebar">
        <div class="w3-container w3-display-container w3-padding-16">
          <i onclick="w3_close()" class="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
          <h3 class="w3-wide"><b>LOGO</b></h3>
        </div>
        <div class="w3-padding-64 w3-large w3-text-grey" style="font-weight:bold">
          <a href="/" class="w3-bar-item w3-button">Home</a>
          <a href="/about-me" class="w3-bar-item w3-button">About Me</a>
          <a href="javascript:void(0)" onclick="toggleDropdown('servicesDropdown')" class="w3-bar-item w3-button">Services <i class="fa fa-caret-down"></i></a>
          <div id="servicesDropdown" class="w3-hide w3-bar-block">
            <a href="/services" class="w3-bar-item w3-button">Overview</a>
            <a href="javascript:void(0)" onclick="toggleDropdown('designDropdown')" class="w3-bar-item w3-button">Design & Print <i class="fa fa-caret-down"></i></a>
            <div id="designDropdown" class="w3-hide w3-bar-block">
              <a href="/services/design-and-print/logo-design" class="w3-bar-item w3-button">Logo Design</a>
            </div>
          </div>
          <a href="/pricing" class="w3-bar-item w3-button">Pricing</a>
          <a href="/contact-me" class="w3-bar-item w3-button">Contact Me</a>
        </div>
      </nav>
    `;
    document.getElementById('sidebar-container').innerHTML = sidebarHTML;
  });