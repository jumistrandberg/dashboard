 // Get the clock section
 const clockSection = document.querySelector('.clock-section');

// Function to get the time from JS Date object
function currentTime() {
    const now = new Date(); 
    const hour = now.getHours(); 
    const minutes = now.getMinutes(); 
    const seconds = now.getSeconds(); 

    const timeString = `${hour}:${minutes}:${seconds}`; 

    // Create div for clock first time only
    let clockContainer = clockSection.querySelector('.clock-container'); 
    // If no clock container div already, create one
    if (!clockContainer) {
        clockContainer = document.createElement('div');
        clockContainer.classList.add('clock-container');
        clockSection.appendChild(clockContainer); 
    }

    // Put the time in its container
    clockContainer.textContent = timeString;
}

// Call every second
setInterval(currentTime, 1000);