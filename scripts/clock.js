 // Get the clock section
 const clockSection = document.querySelector('.clock-section');

// Function to get the time from JS Date object
function currentTime() {
    const now = new Date(); 
    const hour = now.getHours(); 
    const minutes = now.getMinutes(); 
    const seconds = now.getSeconds(); 

    // Get date
    const day = now.getDate(); 
    const month = now.getMonth(); 
    const year = now.getFullYear();

    const dateString = `${day}/${month}/${year}`;

    const timeString = `${hour}:${minutes}:${seconds}`; 

    // Create div for clock first time only
    let clockContainer = clockSection.querySelector('.clock-container'); 
    // If no clock container div already, create one
    if (!clockContainer) {
        clockContainer = document.createElement('div');
        clockContainer.classList.add('clock-container');
        clockSection.appendChild(clockContainer); 
    }

    // Put the time and date in container
    clockContainer.innerHTML = `<div class="time">${timeString}</div><div class="date">${dateString}</div>`;
}

// Call every second
setInterval(currentTime, 1000);