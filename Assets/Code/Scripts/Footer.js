document.addEventListener('DOMContentLoaded', () => {
  // Path to your JSON file
  const jsonPath = 'Assets/Code/Scripts/Social_Icons.json'; // Update this path accordingly

  // Fetch the JSON data
  fetch(jsonPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const allIcons = data.socialIcons; // Update to match the structure of your JSON
      const selectedIcons = getRandomUniqueElements(allIcons, 6); // Select 6 random icons
      displayIcons(selectedIcons);
    })
    .catch(error => {
      console.error('Error fetching social icons:', error);
    });

  /**
   * Selects n unique random elements from an array
   * @param {Array} array - The array to select from
   * @param {number} n - Number of elements to select
   * @returns {Array} - Array of selected elements
   */
  function getRandomUniqueElements(array, n) {
    const result = [];
    const takenIndices = new Set();

    while (result.length < n && result.length < array.length) {
      const randomIndex = Math.floor(Math.random() * array.length);
      if (!takenIndices.has(randomIndex)) {
        takenIndices.add(randomIndex);
        result.push(array[randomIndex]);
      }
    }

    return result;
  }

  /**
   * Displays the selected social icons in the footer
   * @param {Array} icons - Array of icon objects to display
   */
  function displayIcons(icons) {
    const socialContainer = document.getElementById('social-icons');
    socialContainer.innerHTML = ''; // Clear existing icons if any

    icons.forEach(icon => {
      // Create anchor element
      const a = document.createElement('a');
      a.href = icon.href;
      a.target = "_blank"; // Open in a new tab
      a.setAttribute('aria-label', icon.title || icon.alt);

      // Create image element
      const img = document.createElement('img');
      img.src = icon.imgSrc;
      img.alt = icon.alt;
      img.title = icon.title;

      // Append image to anchor, then anchor to container
      a.appendChild(img);
      socialContainer.appendChild(a);
    });
  }
});
