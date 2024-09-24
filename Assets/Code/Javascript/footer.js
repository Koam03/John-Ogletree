// footer.js

document.addEventListener('DOMContentLoaded', () => {
  const socialIconsContainer = document.querySelector('.social-icons');
  const jsonFilePath = 'Assets/Code/json/social-icons.json'; // Ensure this path is correct

  // Define breakpoints
  const MOBILE_BREAKPOINT = 768; // pixels

  /**
   * Determines the maximum number of icons to display based on screen width.
   * @returns {number} Maximum number of icons (10 for desktop, 6 for mobile).
   */
  function getMaxIcons() {
    return window.innerWidth <= MOBILE_BREAKPOINT ? 6 : 10;
  }

  /**
   * Fetches social icons data from the JSON file.
   * @returns {Promise<Array>} Array of social icon objects.
   */
  async function fetchSocialIcons() {
    try {
      const response = await fetch(jsonFilePath);
      if (!response.ok) {
        throw new Error(`Failed to fetch social icons: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();

      // Validate that the data is an array
      if (!Array.isArray(data)) {
        throw new Error('Social icons JSON should be an array of objects.');
      }

      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  /**
   * Shuffles an array in place using the Fisher-Yates algorithm.
   * @param {Array} array - The array to shuffle.
   * @returns {Array} The shuffled array.
   */
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  /**
   * Removes duplicate social icons based on the 'name' property.
   * @param {Array} icons - Array of social icon objects.
   * @returns {Array} Array with unique social icons.
   */
  function removeDuplicates(icons) {
    return Array.from(new Map(icons.map(item => [item.name.toLowerCase(), item])).values());
  }

  /**
   * Creates a social icon element.
   * @param {Object} item - The social icon data.
   * @param {string} item.name - The name of the social platform.
   * @param {string} item.link - The URL to the social profile.
   * @param {string} item.icon - The path to the social icon image.
   * @returns {HTMLElement} The constructed anchor element.
   */
  function createSocialIcon(item) {
    const { name = 'Social', link = '#', icon = '#' } = item;

    const linkElement = document.createElement('a');
    linkElement.href = link;
    linkElement.target = '_blank';
    linkElement.rel = 'noopener noreferrer';
    linkElement.setAttribute('aria-label', name);
    linkElement.classList.add('social-item');

    const imgElement = document.createElement('img');
    imgElement.src = icon;
    imgElement.alt = `${name} Icon`;
    imgElement.title = name;
    imgElement.loading = 'lazy'; // Improves performance by lazy loading images

    const spanElement = document.createElement('span');
    spanElement.textContent = name;

    linkElement.appendChild(imgElement);
    linkElement.appendChild(spanElement);

    return linkElement;
  }

  /**
   * Initializes and renders the social icons based on current screen size.
   */
  async function initializeSocialIcons() {
    const allIcons = await fetchSocialIcons();

    if (allIcons.length === 0) {
      socialIconsContainer.innerHTML = '<p>No social icons available.</p>';
      return;
    }

    // Remove duplicates based on 'name' (case-insensitive)
    const uniqueIcons = removeDuplicates(allIcons);

    // Determine max icons based on screen size
    const maxIcons = getMaxIcons();

    // Ensure there are enough icons to display
    if (uniqueIcons.length < maxIcons) {
      console.warn(`Only ${uniqueIcons.length} unique social icons available. Displaying all.`);
    }

    // Shuffle the array to randomize the selection
    const shuffledIcons = shuffleArray(uniqueIcons);

    // Select up to maxIcons
    const selectedIcons = shuffledIcons.slice(0, Math.min(maxIcons, uniqueIcons.length));

    // Clear any existing content
    socialIconsContainer.innerHTML = '';

    // Append each selected icon to the container
    selectedIcons.forEach(icon => {
      const socialElement = createSocialIcon(icon);
      socialIconsContainer.appendChild(socialElement);
    });
  }

  // Initialize social icons on page load
  initializeSocialIcons();

  /**
   * Debounce function to limit the rate at which a function can fire.
   * @param {Function} func - The function to debounce.
   * @param {number} wait - The number of milliseconds to delay.
   * @returns {Function} The debounced function.
   */
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const later = () => {
        clearTimeout(timeout);
        func.apply(this, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Re-initialize social icons on window resize with debounce.
   */
  window.addEventListener('resize', debounce(() => {
    // Re-initialize social icons on resize
    initializeSocialIcons();
  }, 250)); // Adjust the debounce delay as needed
});
