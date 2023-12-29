// // Dialog functionality 
// // Get the dialog
// const dialog = document.querySelector('dialog');
// // Get the open dialog button (add link)
// const addLinkBtn = document.getElementById('add-link-btn'); 
// // Get the close dialog button 
// const closeDialogBtn = document.querySelector('dialog button'); 

// // Open dialog when add link button is clicked
// addLinkBtn.addEventListener('click', () => {
//     dialog.showModal();
// });

// // Close dialog when close button is clicked 
// closeDialogBtn.addEventListener('click', () => {
//     dialog.close();
// });

// // Add links functionality 
// // Get the elements
// const linkUrlInput = document.getElementById('link-url-input'); 
// const linkName = document.getElementById('link-name');
// const saveLinkBtn = document.getElementById('save-link-btn');
// const linksContainer = document.getElementById('links-container');

// // Add link to links container
// function addLink(url, name) {
//     const linkAnchor = document.createElement('a'); 
//     linkAnchor.href = url;
//     linkAnchor.textContent = name || url; 
//     linksContainer.appendChild(linkAnchor);
// }

// // Save the links when 'add' button is clicked 
// saveLinkBtn.addEventListener('click', () => {
//     const url = linkUrlInput.value; 
//     const name = linkName.value; 

//     if(url && name) {
//         addLink(url, name); 
//         // Save to local storage
//         // Get if saved, or create empty array
//         let savedLinks = JSON.parse(localStorage.getItem('savedLinks')) || [];
//         savedLinks.push({url, name}); 
//         localStorage.setItem('savedLinks', JSON.stringify(savedLinks));

//         // Close and reset
//         dialog.close(); 
//         linkUrlInput.value = '';
//         linkName.value = '';
//     } else {
//         saveLinkBtn.disabled = true;
//         const errorMessage = document.createElement('p'); 
//         errorMessage.textContent = 'Please enter a valid URL';
//         dialog.appendChild(errorMessage); 
//     }
    
// })

// Dialog functionality 
// Get the dialog
const dialog = document.querySelector('dialog');
// Get the open dialog button (add link)
const addLinkBtn = document.getElementById('add-link-btn'); 
// Get the close dialog button 
const closeDialogBtn = document.querySelector('dialog button'); 
// Get the rest of the elements 
const linkUrlInput = document.getElementById('link-url-input'); 
const linkName = document.getElementById('link-name');
const saveLinkBtn = document.getElementById('save-link-btn');
const linksContainer = document.getElementById('links-container');


// Open dialog when add link button is clicked
addLinkBtn.addEventListener('click', () => {
    dialog.showModal();
});

// Close dialog when close button is clicked 
closeDialogBtn.addEventListener('click', () => {
    dialog.close();
});

// Function to add a link to linksContainer
function addLink(url, name) {
    const linkAnchor = document.createElement('a');
    linkAnchor.classList.add('link-element');
    linkAnchor.href = url;
    linkAnchor.textContent = name || url;
    linksContainer.appendChild(linkAnchor);
}

// Event listener for adding a link when the button is clicked
saveLinkBtn.addEventListener('click', () => {
    const url = linkUrlInput.value;
    const name = linkName.value;

    if (url && name) {
        addLink(url, name);
    }
});

