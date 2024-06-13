// (Optionally) You can use this to update the loading message
const loadingMessage = document.getElementById('loading-message');

// Example: Change message after a delay
setTimeout(() => {
  loadingMessage.textContent = "Almost there...";
}, 3000); // 3 seconds