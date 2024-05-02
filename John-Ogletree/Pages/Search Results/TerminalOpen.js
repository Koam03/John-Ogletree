// Assuming you have an array of sample search data
const searchData = [
    { title: "Sample Result 1", url: "sample1.html" },
    { title: "Sample Result 2", url: "sample2.html" },
    { title: "Sample Result 3", url: "sample3.html" },
    // Add more sample data as needed
];

// Function to display search results in terminal-like format
function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = ""; // Clear previous results

    if (results.length === 0) {
        searchResultsContainer.innerHTML = "<span class='terminal-result'>No results found.</span>";
    } else {
        results.forEach(result => {
            const span = document.createElement("span");
            span.className = "terminal-result";
            span.textContent = result.title + " (" + result.url + ")";
            searchResultsContainer.appendChild(span);
        });
    }
}

// Call the displaySearchResults function with sample search data
displaySearchResults(searchData);