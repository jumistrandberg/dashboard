// Get button 
const bgBtn = document.getElementById('bg-btn'); 

// Function to get the API key 
async function getApiKey() {
    const response = await fetch('./apiKeys.json')
    if(response.ok) {
        const keyArray = await response.json(); 
        const bgApiKey = keyArray[1].unsplash;
        return bgApiKey;

    } else {
        console.log(`Error: ${response.status}`);
    }
}


getApiKey();