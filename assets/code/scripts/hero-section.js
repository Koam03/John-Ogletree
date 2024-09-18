// Load the hero content into the hero element using fetch API
fetch('/assets/code/partials/hero.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('hero').innerHTML = data;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
