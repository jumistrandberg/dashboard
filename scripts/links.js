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