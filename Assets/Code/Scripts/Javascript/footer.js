document.addEventListener('DOMContentLoaded', () => {
  const socialIconsContainer = document.querySelector('.social-icons');
  const jsonFilePath = 'Assets/Code/Scripts/json/social-icons.json'; // Update the path if necessary
  const maxIcons = 6; // Maximum number of icons to display

  // Function to fetch JSON data
  async function fetchSocialIcons() {
    try {
      const response = await fetch(jsonFilePath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch social icons:', error);
      return [];
    }
  }

  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Function to determine the type of link
  function getLinkType(link) {
    if (link.startsWith('tel:')) return 'tel';
    if (link.startsWith('mailto:')) return 'mailto';
    return 'external';
  }

  // Function to create a social icon element
  function createSocialIcon(item) {
    const link = document.createElement('a');
    link.href = item.link;
    link.setAttribute('aria-label', item.name);
    link.classList.add('social-item');

    const linkType = getLinkType(item.link);

    // Conditionally set attributes based on link type
    if (linkType === 'external') {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }

    const img = document.createElement('img');
    img.src = item.icon;
    img.alt = item.name;
    img.title = item.name;

    const span = document.createElement('span');
    span.textContent = item.name;

    link.appendChild(img);
    link.appendChild(span);

    return link;
  }

  // Main function to initialize social icons
  async function initializeSocialIcons() {
    const allIcons = await fetchSocialIcons();
    if (allIcons.length === 0) {
      // Optional: Display a default message or icons if JSON fails
      socialIconsContainer.innerHTML = '<p>No social icons available.</p>';
      return;
    }

    // Shuffle the array to randomize the selection
    const shuffledIcons = shuffleArray([...allIcons]);

    // Select up to maxIcons
    const selectedIcons = shuffledIcons.slice(0, maxIcons);

    // Clear any existing content
    socialIconsContainer.innerHTML = '';

    // Append each selected icon to the container
    selectedIcons.forEach(icon => {
      const socialElement = createSocialIcon(icon);
      socialIconsContainer.appendChild(socialElement);
    });
  }

  // Initialize on page load
  initializeSocialIcons();
});
