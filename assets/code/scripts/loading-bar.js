document.addEventListener("DOMContentLoaded", function() {
    const loadingBar = document.getElementById('loading-bar');

    // Function to simulate loading progress
    function simulateLoading() {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 90) {
                clearInterval(interval);
            } else {
                width += 1;
                loadingBar.style.width = width + '%';
            }
        }, 20); // Adjust the speed as needed
    }

    // Start simulating loading
    simulateLoading();

    // Once the entire page is fully loaded
    window.addEventListener('load', function() {
        // Complete the loading bar
        loadingBar.style.width = '100%';
        
        // After a short delay, hide the loading bar
        setTimeout(() => {
            loadingBar.classList.add('complete');
            setTimeout(() => {
                loadingBar.classList.add('hidden');
            }, 400); // Match this duration with the CSS transition
        }, 500); // Short delay to ensure the bar reaches 100%
    });
});
