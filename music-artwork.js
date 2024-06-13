// music-section.js

document.addEventListener('DOMContentLoaded', () => {
    const trackElements = document.querySelectorAll('.track'); // Select all elements with class "track"

    trackElements.forEach(trackElement => {
        const audioElement = trackElement.querySelector('audio'); 
        const artworkElement = trackElement.querySelector('.artwork'); 

        audioElement.addEventListener('loadedmetadata', () => {
            const durationSeconds = audioElement.duration;
            const borderWidth = Math.min(durationSeconds, 60); // Cap at 60px for longer tracks

            artworkElement.style.borderWidth = `${borderWidth}px`;
        });
    });
});