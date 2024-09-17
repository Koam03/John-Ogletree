// Subscribe section creation
document.addEventListener("DOMContentLoaded", function() {
    const subscribeSection = `
      <div class="w3-container w3-black w3-padding-32">
        <h1>Subscribe</h1>
        <p>To get special offers and VIP treatment:</p>
        <p><input class="w3-input w3-border" type="text" placeholder="Enter e-mail" style="width:100%"></p>
        <button type="button" class="w3-button w3-red w3-margin-bottom">Subscribe</button>
      </div>
    `;
  
    // Append the Subscribe section to a target element in your HTML, such as a <div> with an id "subscribe-container"
    document.getElementById('subscribe-container').innerHTML = subscribeSection;
  });  