document.addEventListener("DOMContentLoaded", function() {
    const productGridHTML = `
      <div class="w3-row w3-grayscale">
        <div class="w3-col l3 s6">
          <div class="w3-container">
            <img src="/w3images/jeans1.jpg" style="width:100%">
            <p>Ripped Skinny Jeans<br><b>$24.99</b></p>
          </div>
        </div>
        <div class="w3-col l3 s6">
          <div class="w3-container">
            <div class="w3-display-container">
              <img src="/w3images/jeans2.jpg" style="width:100%">
              <span class="w3-tag w3-display-topleft">New</span>
              <div class="w3-display-middle w3-display-hover">
                <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
              </div>
            </div>
            <p>Mega Ripped Jeans<br><b>$19.99</b></p>
          </div>
        </div>
      </div>
    `;
    document.getElementById('product-grid-container').innerHTML = productGridHTML;
  });
  