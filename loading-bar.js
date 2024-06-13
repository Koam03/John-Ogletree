// loading-bar.js

document.addEventListener('DOMContentLoaded', () => {
    const loadingBar = document.createElement('div');
    loadingBar.id = 'loading-bar';
    loadingBar.style.cssText = `
        width: 0;
        height: 4px; /* Adjust the height as needed */
        background-color: #4CAF50; /* Choose your color */
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999; /* Ensure it's on top of everything else */
        transition: width 0.3s ease; /* Smooth transition effect */
    `;
    document.body.appendChild(loadingBar);

    let width = 0;
    const interval = setInterval(() => {
        width += 5; // Adjust the increment speed
        loadingBar.style.width = width + '%';

        if (width >= 100) {
            clearInterval(interval);
            loadingBar.style.opacity = 0; // Fade out the bar
            setTimeout(() => {
                loadingBar.remove(); // Remove it after fading
            }, 300); // Match the fade-out duration
        }
    }, 50); // Adjust the update interval
});