// Function to get the time from JS Date object
function currentTime() {
    const now = new Date(); 
    const hour = now.getHours(); 
    const minutes = now.getMinutes(); 
    const seconds = now.getSeconds(); 

    const timeString = `${hour}:${minutes}:${seconds}`; 

    // Create div for clock
    const clockContainer = document.createElement('div');
    // Give the div a class
    clockContainer.classList.add('clock-container'); 
    // Append the new div to the body 
    
    // Append the date to the clock div
    clockContainer.appendChild('timeString');

}