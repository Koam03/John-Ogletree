// (Optional) Add interactivity for dropdown menus or other features
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active'); // Toggle active class for styling
    });
});