document.addEventListener('DOMContentLoaded', () => {
    // Path to your JSON file
    const jsonPath = 'Assets/Code/Scripts/Social_Icons.json'; // Update this path

    // Fetch the JSON data
    fetch(jsonPath)
      .then(response => response.json())
      .then(data => {
        const icons = data.socialIcons;
        const randomIcons = getRandomUniqueElements(icons, 6);
        displayIcons(randomIcons);
      })
      .catch(error => console.error('Error fetching icons:', error));

    // Function to get random unique elements from array
    function getRandomUniqueElements(arr, count) {
      const result = [];
      const usedIndices = new Set();

      while (result.length < count) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        if (!usedIndices.has(randomIndex)) {
          usedIndices.add(randomIndex);
          result.push(arr[randomIndex]);
        }
      }
      return result;
    }

    // Function to display icons
    function displayIcons(icons) {
      const container = document.getElementById('social-icons');
      container.innerHTML = ''; // Clear existing content

      icons.forEach(icon => {
        const a = document.createElement('a');
        a.href = icon.href;
        a.target = '_blank';

        const img = document.createElement('img');
        img.src = icon.imgSrc;
        img.alt = icon.alt;
        img.title = icon.title;

        a.appendChild(img);
        container.appendChild(a);
      });
    }
  });