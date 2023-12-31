// Get button 
const bgBtn = document.getElementById('bg-btn'); 

// Function to get the API key 
async function getApiKey() {
    try {
        const response = await fetch('./apiKeys.json');
        if (response.ok) {
            const keyArray = await response.json(); 
            const bgApiKey = keyArray[1].unsplash;
            return bgApiKey;
        } else {
            console.log(`Error: ${response.status}`);
            return null; // Return a default value or handle this error case
        }
    } catch (error) {
        console.error('Error fetching API key:', error);
        return null; // Return a default value or handle this error case
    }
}

async function randomImg(search) { 
    try {
        const apiKey = await getApiKey(); 
        const url = `https://api.unsplash.com/photos/random?query=${search}&client_id=${apiKey};`;
        
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // Handle the received data as needed (e.g., setting image source on the page)
            console.log('Received image data:', data);
        } else {
            console.log(`Error fetching random image: ${response.status}`);
        }
    } catch (error) {
        console.error('Error getting random image:', error);
    }
}

// Call randomImg function with a search query (replace 'yourSearchQuery' with an actual search query)
randomImg('yourSearchQuery');
