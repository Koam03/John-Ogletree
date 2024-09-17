document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
      <div class="w3-display-container w3-container">
        <img src="/w3images/jeans.jpg" alt="Jeans" style="width:100%">
        <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
          <h1 class="w3-jumbo w3-hide-small">New arrivals</h1>
          <h1 class="w3-hide-large w3-hide-medium">New arrivals</h1>
          <h1 class="w3-hide-small">COLLECTION 2016</h1>
          <p><a href="#jeans" class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
        </div>
      </div>
    `;
    document.getElementById('header-container').innerHTML = headerHTML;
  });
  