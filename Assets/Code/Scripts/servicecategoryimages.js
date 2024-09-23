/ Fetch JSON data and insert it into the service grid
fetch('services.json')
    .then(response => response.json())
    .then(data => {
        const serviceGrid = document.getElementById('serviceGrid');
        
        // Loop through each service category and create HTML structure
        data.serviceCategories.forEach(service => {
            const serviceItem = document.createElement('a');
            serviceItem.href = service.link;
            serviceItem.className = 'service-item';
            
            // Create img element for the image
            const img = document.createElement('img');
            img.src = service.image.source; // Set the image URL from JSON
            img.alt = service.image.alt;    // Set alt text
            
            // Create h4 element for the category title
            const title = document.createElement('h4');
            title.textContent = service.category;
            
            // Append image and title to the service item
            serviceItem.appendChild(img);
            serviceItem.appendChild(title);
            
            // Append service item to the grid
            serviceGrid.appendChild(serviceItem);
        });
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });
