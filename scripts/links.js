// Dialog functionality 
// Get the dialog
const dialog = document.querySelector('dialog');
// Get the open dialog button (add link)
const addLinkBtn = document.getElementById('add-link-btn'); 
// Get the close dialog button 
const closeDialogBtn = document.querySelector('dialog button'); 

// Open dialog when add link button is clicked
addLinkBtn.addEventListener('click', () => {
    dialog.showModal();
});

// Close dialog when close button is clicked 
closeDialogBtn.addEventListener('click', () => {
    dialog.close();
});

// Add links functionality 
// Get the elements
const linkUrlInput = document.getElementById('link-url-input'); 
const linkName = document.getElementById('link-name');
const saveLinkBtn = document.getElementById('save-link-btn');
const linksContainer = document.getElementById('links-container');

// Add link to links container
function addLink(url, name) {
    const linkAnchor = document.createElement('a'); 
    linkAnchor.href = url;
    linkAnchor.textContent = name || url; 
    linksContainer.appendChild(linkAnchor);
}

// Save the links when 'add' button is clicked 
saveLinkBtn.addEventListener('click', () => {
    const url = linkUrlInput.value.trim(); 
    const name = linkName.value.trim(); 

    if(url !== '') {
        addLink(url, name); 
        // Save to local storage
        localStorage.setItem()
        dialog.close(); 
        linkUrlInput.value = '';
        linkName.value = '';
    } else {
        bajs jag vet inte
    }
    
})
