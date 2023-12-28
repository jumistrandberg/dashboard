// Get the name section 
const nameSection = document.querySelector('.name-section'); 

// Get the input textbox
const nameTextBox = document.getElementById('nameTextBox');

// Listen for clicks on the text input 
nameTextBox.addEventListener('click', function(input) {
    nameTextBox.value = ''
});

// Listen for changes to input 
nameTextBox.addEventListener('input', function() {
    // Remove end white space 
    const enteredText = nameTextBox.value.trim();
    if (enteredText !== '') {
        localStorage.setItem('savedText', enteredText);
    }
});

// Set the text from local storage 
function setTextFromLocalStorage() {
    const savedText = localStorage.getItem('savedText'); 
    if (savedText !== null) {
        nameTextBox.value = savedText;
    }
}

// Call the function to retrieve the text saved before to local storage 
document.addEventListener('DOMContentLoaded', setTextFromLocalStorage)

